import httpClient from '../../httpclient';
import { formatDate } from '../../tools/fxn.service';

export default class AuthModule {
  static registerUser = (user) => httpClient.post('auth/register', { ...user });

  static login = (user) => httpClient.patch('auth/login', ...user);

  static getCurrentUser = async () => {
    return httpClient.get('auth/current-user').then(({ data }) => {
      let user = data;

      const joinedSince = formatDate(user.createdAt);

      user = { ...user, joinedSince };

      delete user.createdAt;

      return user;
    });
  };
}

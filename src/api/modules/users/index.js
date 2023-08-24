import httpClient from '../../httpclient';

export const useApiPath = (_id) => (_id ? `users/${_id}/` : 'users/');

export default class UserModule {
  static getAllUsers = () => httpClient.get(useApiPath());

  static getUser = (_id) => httpClient.get(useApiPath(_id));

  static updateUser = (_id, userUpdate) =>
    httpClient.patch(useApiPath(_id), userUpdate);

  static deleteOneUser = (_id) => httpClient.delete(useApiPath(_id));
}

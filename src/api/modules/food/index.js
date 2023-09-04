import httpClient from '../../httpclient';

const useApiPath = (_id) => (_id ? `food_data/${_id}/` : 'food_data/');

export default class FoodModule {
  static getAllFood = () => httpClient.get(useApiPath());

  static getFood = (_id) => httpClient.get(useApiPath(_id));

  static createFood = (food) => httpClient.post(useApiPath(), { ...food });

  static updateFood = (_id, foodUpdate) =>
    httpClient.patch(useApiPath(_id), foodUpdate);

  static deleteOneFood = (_id) => httpClient.delete(useApiPath(_id));
}

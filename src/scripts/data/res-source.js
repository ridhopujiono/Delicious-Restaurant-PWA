import API_ENDPOINT from '../globals/api-endpoint';
import FavoriteResto from './favorite-resto';

class TheRestaurant {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async favResto() {
    const response = FavoriteResto.getAllResto();
    return response;
    // const responseJson = await response.json();
    // return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson);
    return (responseJson.restaurant);
  }
}

export default TheRestaurant;

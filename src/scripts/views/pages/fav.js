import FavoriteResto from '../../data/favorite-resto';
import { createItemTemplate } from '../templates/template-creator';

const Fav = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurant" class="grid-resto">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteResto.getAllResto();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Fav;

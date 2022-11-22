import TheRestaurant from '../../data/res-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero" id="home">
        <div class="hero-content">
          <h2>Delicious Restaurant</h2>
          <h5 style="margin-bottom: 10px">Best restaurant menu !</h5>
          <a href="#main" style="    background: white;
          padding: 12px;
          padding-left: 25px;
          padding-right: 25px;
          text-decoration: none;
          margin-top: 10px;
          color: orange;
          font-weight: 500;">here</a>
        </div>
      </div>
      <div class="content" id="main">
        <center>
          <h2>Choose ur Restaurant</h2>
          <br>
        </center>
        <div id="restaurant-container" class="grid-resto">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurant.listRestaurant();
    const resContainer = document.querySelector('#restaurant-container');
    restaurants.forEach((restaurant) => {
      resContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;

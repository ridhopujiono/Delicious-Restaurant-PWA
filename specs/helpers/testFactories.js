/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteResto from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto,
        favoriteRestaurants: FavoriteResto
    });
};

export { createLikeButtonPresenterWithRestaurant };

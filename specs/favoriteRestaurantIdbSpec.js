import { itActsAsFavoriteRestaurantInit } from './contract/favoriteRestaurantContract';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Favorite Restaurant Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteResto.getAllResto()).forEach(
            async (restaurant) => {
                await FavoriteResto.deleteResto(restaurant.id);
            }
        );
    });

    itActsAsFavoriteRestaurantInit(FavoriteResto);
});

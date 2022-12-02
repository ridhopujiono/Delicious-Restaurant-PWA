import FavoriteResto from '../src/scripts/data/favorite-resto';

import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('unlike a restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteResto.putResto({
            id: 'rqdv5juczeskfw1e867'
        });
    });

    afterEach(async () => {
        await FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
    });

    it('should display unlike widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        expect(
            document.querySelector('[aria-label="unlike this movie"]')
        ).toBeTruthy();
    });

    it('should not display like widget when the resto has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        expect(
            document.querySelector('[aria-label="like this restaurant"]')
        ).toBeFalsy();
    });

    it('should be able to remove liked resto from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        document
            .querySelector('[aria-label="unlike this movie"]')
            .dispatchEvent(new Event('click'));

        expect(await FavoriteResto.getAllResto()).toEqual([]);
    });

    it('should not throw error if the unliked resto is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        // hapus dulu resto dari daftar resto yang disukai
        await FavoriteResto.deleteResto('rqdv5juczeskfw1e867');

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteResto.getAllResto()).toEqual([]);
    });
});

import FavoriteResto from '../src/scripts/data/favorite-resto';

import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('liking a resto', () => {
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });
        expect(
            document.querySelector('[aria-label="like this movie"]')
        ).toBeTruthy();
    });

    it('should not show the unlike button when the resto has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        expect(
            document.querySelector('[aria-label="unlike this movie"]')
        ).toBeFalsy();
    });

    it('should be able to like the resto', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const resto = await FavoriteResto.getResto(
            'rqdv5juczeskfw1e867'
        );

        expect(resto).toEqual({ id: 'rqdv5juczeskfw1e867' });
        FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
    });
    it('should not add a resto again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });
        // Tambahkan resto dengan ID rqdv5juczeskfw1e867 (restoran dengan urutan ke- 1) ke daftar resto yang disukai
        await FavoriteResto.putResto({
            id: 'rqdv5juczeskfw1e867'
        });
        // Simulasikan pengguna menekan tombol suka resto
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
    });

    it('should not add a resto again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({
            id: 'rqdv5juczeskfw1e867'
        });

        // Tambahkan resto dengan ID rqdv5juczeskfw1e867 (restoran dengan urutan ke- 1) ke daftar resto yang disukai
        await FavoriteResto.putResto({
            id: 'rqdv5juczeskfw1e867'
        });
        // Simulasikan pengguna menekan tombol suka resto
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        // tidak ada resto yang ganda
        expect(await FavoriteResto.getAllResto()).toEqual([
            { id: 'rqdv5juczeskfw1e867' }
        ]);

        FavoriteResto.deleteResto('rqdv5juczeskfw1e867');
    });

    it('should not add a resto when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteResto.getAllResto()).toEqual([]);
    });
});

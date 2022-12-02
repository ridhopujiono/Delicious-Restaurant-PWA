const itActsAsFavoriteRestaurantInit = (favoriteResto) => {
    it('should return the resto that has been added', async () => {
        favoriteResto.putResto({
            id: 'rqdv5juczeskfw1e867'
        });
        favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });

        expect(
            await favoriteResto.getResto('rqdv5juczeskfw1e867')
        ).toEqual({
            id: 'rqdv5juczeskfw1e867'
        });
        expect(
            await favoriteResto.getResto('s1knt6za9kkfw1e867')
        ).toEqual({
            id: 's1knt6za9kkfw1e867'
        });
        expect(await favoriteResto.getResto(3)).toEqual(undefined);
    });

    it('should refuse a resto from being added if it does not have the correct property', async () => {
        favoriteResto.putResto({ aProperty: 'property' });

        expect(await favoriteResto.getAllResto()).toEqual([]);
    });

    it('can return all of the restos that have been added', async () => {
        favoriteResto.putResto({
            id: 'rqdv5juczeskfw1e867'
        });
        favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });

        expect(await favoriteResto.getAllResto()).toEqual([
            {
                id: 'rqdv5juczeskfw1e867'
            },
            { id: 's1knt6za9kkfw1e867' }
        ]);
    });

    it('should remove favorite resto', async () => {
        favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
        favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });
        favoriteResto.putResto({ id: 'w9pga3s2tubkfw1e867' });

        await favoriteResto.deleteResto('rqdv5juczeskfw1e867');

        expect(await favoriteResto.getAllResto()).toEqual([
            { id: 's1knt6za9kkfw1e867' },
            { id: 'w9pga3s2tubkfw1e867' }
        ]);
    });

    it('should handle request to remove a resto even though the resto has not been added', async () => {
        favoriteResto.putResto({ id: 'rqdv5juczeskfw1e867' });
        favoriteResto.putResto({ id: 's1knt6za9kkfw1e867' });
        favoriteResto.putResto({ id: 'w9pga3s2tubkfw1e867' });

        await favoriteResto.deleteResto('s1knt6za9kkfw1e868');

        expect(await favoriteResto.getAllResto()).toEqual([
            { id: 'rqdv5juczeskfw1e867' },
            { id: 's1knt6za9kkfw1e867' },
            { id: 'w9pga3s2tubkfw1e867' }
        ]);
    });
};

export { itActsAsFavoriteRestaurantInit };

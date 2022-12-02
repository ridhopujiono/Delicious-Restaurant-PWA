const assert = require('assert');

Feature('Liking Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/fav');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
    I.see('Favorite restaurant not found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Favorite restaurant not found');

    I.amOnPage('/');

    I.scrollTo('#restaurant-container');
    I.wait(1);

    I.seeElement('.resto-item__content h3 .resto_name');

    const firstRestaurant = locate('.resto-item__content h3 .resto_name').first();

    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/fav');
    I.seeElement('.resto-item__content h3 .resto_name');

    const likedRestaurants = await I.grabTextFrom(
        locate('.resto-item__content h3 .resto_name').first()
    );

    assert.strictEqual(firstRestaurantTitle, likedRestaurants);
});

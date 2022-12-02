const assert = require('assert');

Feature('Unlike Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({ I }) => {
    I.dontSeeElement('.resto-item__content');
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.dontSeeElement('.resto-item__content');

    I.amOnPage('/');
    I.scrollTo('#restaurant-container');
    I.wait(1);

    I.seeElement('.resto-item__content h3 .resto_name');
    const firstRestaurant = locate('.resto-item__content h3 .resto_name').first();

    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item__content h3 .resto_name');

    const likedRestaurants = await I.grabTextFrom(
        locate('.resto-item__content h3 .resto_name').first()
    );

    assert.strictEqual(firstRestaurantTitle, likedRestaurants);

    I.seeElement('.resto-item__content h3 .resto_name');

    await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('restaurant-item');
});

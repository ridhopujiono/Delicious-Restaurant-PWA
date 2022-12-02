const createElementContainer = (DOMQuery, data) => {
    const elementContainer = document.querySelector(DOMQuery);
    elementContainer.restaurants = data;
};

const createElementItem = (DOMQuery, data) => {
    const elementItem = document.querySelector(DOMQuery);
    elementItem.restaurant = data;
};

const createElementDetail = (DOMQuery, data) => {
    const elementDetail = document.querySelector(DOMQuery);
    elementDetail.detail = data;
};

/* TODO  Memberi nama yang lebih berbeda untuk createLikeButtonTemplate dan createLikedButtonTemplate */
const createLikeButtonRestaurantTemplate = () => `
 <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonRestaurantTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createElementContainer,
    createElementItem,
    createElementDetail,
    createLikeButtonRestaurantTemplate,
    createUnlikeButtonRestaurantTemplate
};

import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="item-card" tabindex="0">
    <h2><a href="/#/detail/${restaurant.id}" class="restaurant-name">${restaurant.name}</a></h2>
    <p class="restaurant-city">${restaurant.city} | Rating: ${restaurant.rating}/5</p>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image lazyload">
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-card1" tabindex="0">
    <h2 class="detail-name">${restaurant.name}</h2>
    <h3> Rating: ${restaurant.rating}/5</h3>
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="detail-image lazyload">
    <h3 class="detail-city">Kota: ${restaurant.city}</h3>
    <h4 class="detail-address">Alamat: ${restaurant.address}</h4>
    <p class="detail-desc">${restaurant.description}</p>
    <div class="detail-menu">
      <h3 class="detail-menu__heading">Menu Makanan</h3>
      <div class="detail-food">
        ${restaurant.menus.foods
    .map((food) => `<p>${food.name}</p>`)
    .join('')}
      </div>
      <h3 class="detail-menu__heading">Menu Minuman</h3>
      <div class="detail-drink">
        ${restaurant.menus.drinks
    .map((drink) => `<p>${drink.name}</p>`)
    .join('')}
      </div>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

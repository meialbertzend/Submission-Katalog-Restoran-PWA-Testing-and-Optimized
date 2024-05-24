import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="explore-container">
        <h1 class="explore-heading">Favorite Restaurant</h1>
        </div>
        <div id="restaurant-list" class="restaurant-list">
        </div>

         `;
    },
    async afterRender() {
        const restaurants = await favoriteRestaurantIdb.getAllRestaurants();
        const restaurantsContainer = document.querySelector('#restaurant-list');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
        // Fungsi ini akan dipanggil setelah render()
    },
};
export default Favorite;

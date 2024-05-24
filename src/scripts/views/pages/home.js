import restaurantSource from '../../data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="explore-container">
        <h1 class="explore-heading">Explore Restaurant</h1>
        </div>
        <div id="restaurant-list" class="restaurant-list">
        </div>
        

        `;
    },
    async afterRender() {
        const restaurants = await restaurantSource.HomeRestaurant();
        const restaurantsContainer = document.querySelector('#restaurant-list');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
        // Fungsi ini akan dipanggil setelah render()
    },
};
export default Home;

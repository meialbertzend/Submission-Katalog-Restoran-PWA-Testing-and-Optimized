import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="explore-container">
        <h1 class="explore-heading">Detail Page</h1>
      </div>
      <div id="detail-card" class="detail-card"></div>
      <div class="detail-review"></div>
      <div id="likeButtonContainer"></div>
      <form id="reviewForm" class="review-form">
        <h2>Tambahkan Review</h2>
        <div class="form-group">
          <label for="name">Nama</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="review">Review</label>
          <textarea id="review" name="review" rows="4" required></textarea>
        </div>
        <button type="submit">Kirim Review</button>
      </form>
      
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-card');
    const reviewForm = document.querySelector('#reviewForm');
    const reviewInputName = document.querySelector('#name');
    const reviewInputReview = document.querySelector('#review');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        name: restaurant.name,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    const updateReviewSection = (reviews) => {
      const reviewSection = document.querySelector('.detail-review');
      reviewSection.innerHTML = `
              <h4 class="detail-menu__heading">Review Customer</h4>
              ${reviews.map((review) => `
                <div class="review-card">
                  <p class="review-text">"${review.review}"</p>
                  <p class="review-author">Oleh: ${review.name}</p>
                  <p class="review-date">Tanggal Review: ${review.date}</p>
                </div>
              `).join('')}
            `;
    };

    // eslint-disable-next-line max-len
    updateReviewSection(restaurant.customerReviews); // Memuat ulasan saat halaman detail diakses

    // Menambahkan event listener untuk mengirim review
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const newReview = {
        id: restaurant.id,
        name: reviewInputName.value,
        review: reviewInputReview.value,
      };

      const response = await restaurantSource.addReview(newReview);

      if (response.error) {
        // eslint-disable-next-line no-alert
        alert('Gagal mengirim review. Silakan coba lagi.');
      } else {
        // eslint-disable-next-line no-alert
        alert('Review berhasil dikirim.');
        updateReviewSection(response.customerReviews);
        reviewInputName.value = '';
        reviewInputReview.value = '';
      }
    });
  },
};

export default Detail;

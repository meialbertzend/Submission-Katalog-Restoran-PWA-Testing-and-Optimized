/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
    // Mengunjungi halaman like sebelumnya untuk menghapus data sementara
    I.amOnPage('/#/favorite');
});

// Skenario Menyukai satu restaurant
Scenario('LIKE A RESTAURANT', async ({ I }) => {
    I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
    I.seeElement('.explore-container');

    // Kembali ke halaman utama
    I.amOnPage('/');
    I.wait(15);
    I.waitForElement('.restaurant-name');

    // Memilih restaurant pertama dari daftar
    const firstRestaurant = locate('.restaurant-name').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.wait(15);
    I.click(firstRestaurant);

    // Menunggu tombol suka muncul dan mengkliknya
    I.waitForElement('#likeButton');
    I.click('#likeButton');

    // Kembali ke halaman daftar resturant yang disukai
    I.amOnPage('/#/favorite');
    I.waitForElement('.item-card');

    // Memastikan restaurant yang disukai memiliki judul yang sesuai dengan restaurant yang dipilih
    const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

// Skenario Membatalkan menyukai satu restaurant
Scenario('UNLIKE A RESTAURANT', async ({ I }) => {
    I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.restaurant-item');
    I.seeElement('.explore-container');

    // Kembali ke halaman utama
    I.amOnPage('/');
    I.wait(15);
    I.waitForElement('.restaurant-name');

    // Memilih restauran pertama dari daftar
    const firstRestaurant = locate('.restaurant-name').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.wait(15);
    I.click(firstRestaurant);

    // Menunggu tombol suka muncul dan mengkliknya
    I.waitForElement('#likeButton');
    I.click('#likeButton');

    // Kembali ke halaman daftar restaurant yang disukai
    I.amOnPage('/#/favorite');
    I.waitForElement('.item-card');

    // Memastikan restaurant yang disukai memiliki judul yang sesuai dengan restaurant yang dipilih
    const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

    // Kembali ke halaman daftar restaurant yang disukai
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-name');

    // Memilih restaurant pertama dari daftar restaurant yang disukai
    const firstFavoriteRestaurant = locate('.restaurant-name').first();
    I.click(firstFavoriteRestaurant);

    // Menunggu tombol suka muncul dan mengkliknya untuk membatalkan suka
    I.waitForElement('#likeButton');
    I.click('#likeButton');

    // Kembali ke halaman daftar restaurant yang disukai
    I.amOnPage('/#/favorite');

    // Memastikan pesan "Tidak ada resturant untuk ditampilkan" tidak terlihat
    I.dontSeeElement('Tidak ada restaurant untuk ditampilkan', '.item-card');
});

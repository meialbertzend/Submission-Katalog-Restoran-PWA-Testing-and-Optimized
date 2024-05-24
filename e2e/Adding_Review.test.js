/* eslint-disable no-undef */
Feature('Menambahkan Review');

Before(({ I }) => {
    // Kembali ke halaman utama
    I.amOnPage('/');
    I.wait(5);
    I.waitForElement('.restaurant-name');

    // Memilih restoran pertama dari daftar
    const restoranPertama = locate('.restaurant-name').first();
    I.wait(15);
    I.click(restoranPertama);
});

Scenario('Pengguna dapat menambahkan review', async ({ I }) => {
    // Simulasi pengguna mengisi formulir review
    const namaReviewer = 'End To End Test';
    const isiReview = 'Tempat bagus!';

    I.fillField('#name', namaReviewer);
    I.fillField('#review', isiReview);

    // Simulasi pengguna mengirim formulir review
    I.click('Kirim Review');
    // Verifikasi bahwa review pengguna muncul di halaman detail
    I.see(namaReviewer);
    I.see(isiReview);
});

# Submission: Katalog Restoran PWA + Testing and Optimized

Jalankan project ini dengan `npm run start-dev`

## Fitur yang harus ada pada aplikasi:

1. Halaman Utama (Daftar Restoran)
   Syarat:
   - Menampilkan daftar restoran yang datanya bersumber dari API: restaurant-api.dicoding.dev. Silakan lihat dokumentasinya pada halaman tersebut.
   - Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.
   - Ada tautan/CTA yang mengarah ke detail restoran pada setiap item-nya.
   - Hero elemen tetap dipertahankan.
2. Halaman Detail Restoran
   Syarat:
   - Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
   - Pada halaman detail restoran harus berisi hal-hal berikut.
   - Nama restoran
   - Gambar
   - Alamat
   - Kota
   - Deskripsi
   - Menu Makanan
   - Menu Minuman
   - Customer Reviews
   - Ada tombol favorite untuk memasukkan atau menghapus restoran favorit dari database. Penyimpanan ini menggunakan IndexedDB.
3. Halaman Daftar Restoran Favorit
   Syarat:
   - Halaman daftar restoran dapat diakses melalui menu navigasi favorit.
   - Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
   - Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
   - Ada tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
4. Native Capability
   Syarat:
   - Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apa pun, bahkan menggunakan workbox.
   - Aplikasi harus menampilkan icon Add to Home Screen.
   - Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
5. Code Quality
   Syarat:

   - Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint, ya.
   - Menerapkan salah satu style guide, baik Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
   - Periksa kembali sebelum mengirimkan submission project Anda. Penuhi seluruh kriteria yang ditetapkan dalam konfigurasi linter Anda. Kondisi terpenuhinya kriteria ditandai dengan tidak adanya satupun error ketika menjalankan eslint.

6. Pertahankan syarat yang ada pada submission sebelumnya. Di antaranya, responsibilitas tampilan, aksesibilitas pada website, appbar, footer, dan sebagainya.
7. Integration Test
   Syarat:
   - Menerapkan integration test untuk fungsi menyukai dan batal menyukai restoran.
8. End to End Test
   Syarat:
   - Menerapkan End to End Test dengan skenario:
   - Menyukai salah satu restoran.
   - Batal menyukai restoran tersebut.
9. Image Optimization
   Syarat:
   - Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus di bawah 200kb.
   - Menerapkan teknik image responsive pada gambar hero. Resolusi gambar pada layar seluler dan desktop harus berbeda.
   - Menerapkan teknik lazy loading pada gambar daftar restoran yang ditampilkan.
10. Bundle Optimization
    Syarat:
    - Memasang bundle analyzer pada proyek submission.
    - Gunakan teknik Code Splitting untuk memisahkan vendor code dari kode asli yang Anda tuliskan.
    - Pertahankan syarat yang ada pada submission sebelumnya. Seperti penerapan PWA, responsibilitas tampilan, aksesibilitas pada website dan sebagainya.
      ![hungry-explorer-2](https://github.com/meialbertzend/Submission-Katalog-Restoran-PWA-Testing-and-Optimized/assets/141926927/145e3178-fabe-46c0-a60a-225dc40c8fa5)
      ![project2](https://github.com/meialbertzend/Submission-Katalog-Restoran-PWA-Testing-and-Optimized/assets/141926927/a2661628-4b1a-42a5-aa89-4a67c186d6f3)
      ![hungry-explorer-4](https://github.com/meialbertzend/Submission-Katalog-Restoran-PWA-Testing-and-Optimized/assets/141926927/d8fd42f2-db57-465b-9aae-79c81ca7df21)
      ![hungry-explorer-3](https://github.com/meialbertzend/Submission-Katalog-Restoran-PWA-Testing-and-Optimized/assets/141926927/5d0ce147-8467-4e82-8046-836ef597fcc7)

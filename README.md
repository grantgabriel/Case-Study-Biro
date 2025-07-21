# 🎓 Portal Berita Universitas Sumatera Utara (USU)

Proyek ini adalah aplikasi web portal berita **Universitas Sumatera Utara (USU)** yang dibangun dengan **Laravel** sebagai backend dan **React (Vite)** sebagai frontend.

Aplikasi ini mendukung:
* Manajemen berita (CRUD)
* Pencarian berita
* Filter berdasarkan kategori (TPB)
* Login berdasarkan peran (*role*) (admin dan user)
* Dashboard khusus untuk admin

---

## 🚀 Fitur

* ✏️ **Manajemen Berita**: Admin dapat menambah, mengedit, dan menghapus berita.
* 🔍 **Pencarian Berita**: Cari berita berdasarkan kata kunci.
* 📂 **Filter Kategori**: Filter berita berdasarkan kategori Tahap Persiapan Bersama (TPB).
* 📊 **Dashboard Admin**: Halaman khusus bagi admin untuk mengelola konten.

---

## 🛠️ Langkah Instalasi

### 1. Clone Repositori
Clone repositori ini ke mesin lokal Anda.
```bash
git clone https://github.com/grantgabriel/Case-Study-Biro.git
cd Case-Study-Biro
```

### 2. Instal Dependensi Backend (Laravel)
Instal semua dependensi PHP yang dibutuhkan oleh Composer.
```bash
composer install
```

### 3. Konfigurasi Lingkungan
Salin file `.env.example` menjadi `.env`.
```bash
cp .env.example .env
```

### 4. Generate Kunci Aplikasi
Buat kunci enkripsi unik untuk aplikasi.
```bash
php artisan key:generate
```

### 5. Atur Koneksi Database
Buka file `.env` dan sesuaikan konfigurasi database Anda.
```makefile
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=usu_news
DB_USERNAME=root
DB_PASSWORD=
```

### 6. Jalankan Migrasi dan Seeder
Buat struktur tabel database dan isi dengan data awal (termasuk akun admin dan user).
```bash
php artisan migrate:fresh --seed
```
Setelah proses seeder, akun berikut akan dibuat:

* **Admin**:
    * **Email**: `admin@gmail.com`
    * **Password**: `password`
* **User**:
    * **Email**: `user@gmail.com`
    * **Password**: `password`

### 7. Instal Dependensi Frontend (React)
Instal semua dependensi JavaScript yang dibutuhkan oleh NPM.
```bash
npm install
```

---

## ⚡ Menjalankan Aplikasi

Untuk menjalankan aplikasi, Anda perlu menjalankan server backend dan frontend secara bersamaan di dua terminal terpisah.

### 1. Jalankan Server Frontend (Vite)
```bash
npm run dev
```

### 2. Jalankan Server Backend (Laravel)
```bash
php artisan serve
```

---

## 🌐 Akses Halaman

| Halaman | URL | Akses |
| :--- | :--- | :--- |
| Halaman Login | `/login` | Publik |
| Halaman Berita | `/activities/berita` | Publik |
| Halaman Detail Berita | `/activities/detail-berita/{slug}` | Publik |
| Dashboard | `/dashboard` | Admin |
| Tambah Berita | `/dashboard/action/add-berita` | Admin |
| Edit Berita | `/dashboard/action/edit-berita/{id}` | Admin |

---

## 📁 Struktur Direktori Frontend

Berikut adalah gambaran singkat struktur direktori untuk komponen dan halaman React.

```
resources/
├── js/
│   ├── components/
│   │   ├── NewsList.jsx
│   │   ├── SearchNews.jsx
│   │   ├── Categories.jsx
│   │   └── ...
│   └── pages/
│       └── Login.jsx
└── ...
```

---

## 🤝 Kontribusi

*Pull request* dan *issue* selalu terbuka untuk perbaikan bug, penambahan fitur, atau peningkatan lainnya. Jangan ragu untuk berkontribusi!

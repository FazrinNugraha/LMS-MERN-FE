# Learning Management System (LMS) - Frontend

Sebuah platform manajemen pembelajaran (LMS) berbasis web modern yang dirancang untuk memfasilitasi manajemen kursus, materi, kategori, dan pelacakan perkembangan belajar siswa. Aplikasi ini memiliki arsitektur multi-role yang memisahkan hak akses dan antarmuka antara Manager (Admin/Instruktur) dan Student (Siswa) secara aman.

## Tentang Proyek

Proyek ini merupakan bagian Frontend dari ekosistem LMS yang dibangun menggunakan MERN Stack (MongoDB, Express.js, React, Node.js). Aplikasi ini menekankan pada performa tinggi menggunakan Vite, validasi data yang ketat menggunakan Zod, caching data yang efisien dengan React Query, serta antarmuka yang bersih, minimalis, dan responsif.

### Fitur Utama:
* Sistem Multi-Role: Pemisahan rute, tata letak, dan komponen dasbor khusus untuk peran Manager dan Student.
* Manajemen Kursus & Konten: Pembuatan, pembaruan, penghapusan, dan pratinjau kursus beserta materi di dalamnya (mendukung format konten berbasis video maupun teks melalui integrasi Rich Text Editor).
* Manajemen Siswa & Kategori: Penanganan pendaftaran siswa ke dalam kursus tertentu serta pengelompokan kursus berdasarkan kategori secara dinamis.
* Autentikasi & Proteksi Rute: Verifikasi token sesi pengguna secara berkala menggunakan pemanfaatan React Router Loaders dan penyimpanan token terenkripsi via react-secure-storage untuk mencegah akses tidak sah[cite: 1].
* Manajemen State & Sinkronisasi Cache: Optimalisasi pengambilan data asinkronus dan manajemen state server otomatis menggunakan TanStack React Query v5.

---

## Tech Stack

![](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)

---

## Struktur Arsitektur Rute

Aplikasi menggunakan skema pembuatan rute terpusat melalui createBrowserRouter dengan penanganan hak akses sebagai berikut[cite: 1]:

├── /                        -> Landing Page Utama[cite: 1]
├── /success-checkout        -> Halaman Sukses Transaksi/Checkout Kursus[cite: 1]
│
├── /manager (Akses Khusus Peran: Manager)[cite: 1]
│   ├── /sign-in             -> Login Akun Manager (Otomatis redirect jika sesi masih aktif)[cite: 1]
│   ├── /sign-up             -> Registrasi Akun Baru Manager[cite: 1]
│   ├── /                    -> Dasbor Utama / Ikhtisar Statistik Platform[cite: 1]
│   ├── /courses             -> Manajemen Daftar Kursus[cite: 1]
│   │   ├── /create          -> Formulir Pembuatan Kursus Baru[cite: 1]
│   │   ├── /edit/:id        -> Pembaruan Detail Informasi Kursus[cite: 1]
│   │   ├── /:id             -> Detail Struktur Kursus & Daftar Materi Konten[cite: 1]
│   │   ├── /:id/create      -> Penambahan Materi Baru (Video/Teks) ke Kursus[cite: 1]
│   │   ├── /:id/edit/:cId   -> Pembaruan Materi Kursus Spesifik[cite: 1]
│   │   └── /:id/preview     -> Pratinjau Tampilan Pembelajaran Kursus dari Perspektif Siswa[cite: 1]
│   ├── /students            -> Manajemen Daftar Seluruh Siswa[cite: 1]
│   │   ├── /create          -> Pendaftaran Akun Siswa Baru[cite: 1]
│   │   └── /edit/:id        -> Pembaruan Data Profil Siswa[cite: 1]
│   └── /categories          -> Manajemen Kategori Kursus[cite: 1]
│
└── /student (Akses Khusus Peran: Student)[cite: 1]
    ├── /sign-in             -> Login Akun Student[cite: 1]
    ├── /                    -> Dasbor Pembelajaran Student (Daftar Kursus yang Diikuti)[cite: 1]
    └── /detail-courses/:id  -> Halaman Akses Pembelajaran & Pemutaran Materi Kursus[cite: 1]

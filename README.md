# Dokumentasi Antarmuka Aplikasi "E-Inventory"
# 1. Halaman Beranda / Landing Page
<br>
<img width="1365" height="636" alt="Screenshot 2026-06-23 215139" src="https://github.com/user-attachments/assets/19eaa9fa-35be-4663-b159-82f9a5e6b06b" />
<br>
Deskripsi Halaman: Halaman utama yang diakses pertama kali oleh pengguna atau pengunjung umum tanpa harus melakukan proses otentikasi (Login) terlebih dahulu. Menampilkan judul utama sistem "Sistem Manajemen Inventaris Barang" beserta deskripsi singkat fungsi aplikasi
<br>
Komponen UI & Fitur:
<br>
Indikator Status: Terdapat badge dinamis bertuliskan "Status Pengunjung: Publik (Akses Terbatas)" yang menegaskan bahwa pengguna umum hanya diberikan hak akses membaca informasi ringkas
<br>
Navigasi Global: Bar navigasi atas (Navbar) berwarna hijau teal yang menyediakan tautan cepat ke Beranda, Dashboard, serta tombol akses masuk

# 2. Form Login Administrator

<img width="1365" height="633" alt="Screenshot 2026-06-23 215307" src="https://github.com/user-attachments/assets/f1fe8118-9ce4-4026-8748-0a018b0eb21d" />

Deskripsi Halaman: Komponen antarmuka yang dirancang khusus menggunakan utilitas TailwindCSS untuk membatasi hak akses halaman kelola data master
<br>
Komponen UI & Fitur:
<br>
Form Input: Terdiri dari kolom input teks untuk Username dan input tersamar untuk Password demi menjaga keamanan akun
<br>
Tombol "Masuk ke Dashboard": Berfungsi memicu aksi (event handler) pengiriman data otentikasi via HTTP POST menggunakan Axios. Sesi yang berhasil dikonfirmasi akan menyimpan status log-in dan token ke dalam localStorage browser

# 3. Dashboard Kelola Data Barang

<img width="1365" height="633" alt="Screenshot 2026-06-23 215341" src="https://github.com/user-attachments/assets/57586c4b-b0bf-4220-89a6-415b0a7da40c" />

Deskripsi Halaman: Panel kendali utama (Dashboard) bagi pengguna dengan hak akses Administrator. Halaman ini menampilkan visualisasi data inventaris secara real-time yang ditarik dari database backend
<br>
Komponen UI & Fitur:
<br>
Tombol "+ Tambah Barang": Tombol aksi cepat untuk membuka modal input data barang baru.
<br>
Tabel Inventaris Modern: Tabel bertenaga TailwindCSS yang mengorganisasi kolom data penting seperti ID, Nama Barang, Jumlah Stok (dengan penanda badge warna hijau), Harga, serta Kolom Aksi
<br>
Menu Manajemen (Aksi): Tautan interaktif Edit dan Hapus pada setiap baris data untuk melakukan manipulasi atau pembaruan stok barang secara instan

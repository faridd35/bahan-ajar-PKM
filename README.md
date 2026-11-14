# Catatan Materi PPLG

Catatan materi kejuruan PPLG SMKN 21: Pemrograman Dasar (bahasa C) dan Koding & Kecerdasan Artifisial (Python).

Situs: https://faridd35.github.io/bahan-ajar-PKM/

## Struktur

| Lokasi | Fungsi |
|---|---|
| `pemrograman-dasar/`, `koding-dan-kecerdasan-artifisial/` | Isi materi dalam format Markdown (`.md`). Ini satu-satunya tempat menulis materi. |
| `_data/materi.yml` | Daftar materi untuk beranda dan sidebar. Urutan di file ini adalah urutan tampil. |
| `_layouts/default.html` | Tata letak halaman materi (sidebar, isi, dan panel "Di halaman ini"). |
| `index.html` | Beranda. |
| `assets/css/site.css`, `assets/js/` | Gaya tampilan, pewarnaan kode, tombol salin, dan pencarian. |

## Menambah materi baru

1. Buat file `.md` di folder mata pelajaran. Baris paling atas wajib:

   ```
   ---
   layout: default
   ---
   ```

2. Tambahkan satu blok di `_data/materi.yml`, di bawah mata pelajaran yang sesuai:

   ```yaml
   - judul: Perulangan
     url: /pemrograman-dasar/perulangan.html
     ringkas: Satu atau dua kalimat tentang isi materi.
     siap: true
   ```

   Nama pada `url` sama dengan nama file `.md`, dengan ekstensi `.html`. Gunakan `siap: false` untuk materi yang masih kosong; materi tersebut tampil sebagai "Segera hadir" dan tidak bisa dibuka.

3. Commit. Situs ter-update dalam 1 sampai 3 menit.

## Catatan

- File `.md` tanpa baris `layout: default` di atasnya tidak diproses GitHub Pages, sehingga halamannya tidak akan muncul.
- Gambar diletakkan di `pemrograman-dasar/images/` dan dipanggil dengan `images/nama-file.png`.

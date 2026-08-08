---
layout: default
---

<style>
  /* Menyamakan border untuk seluruh tabel di dalam Markdown */
  table {
    border-collapse: collapse !important;
    width: 100%;
    margin: 12px 0;
  }
  
  /* Menebalkan border header dan isi sel */
  th, td {
    border: 2px solid #57606a !important; /* Warna border tebal abu-abu/gelap */
    padding: 8px 12px !important;
  }

  /* Opsional: Membuat warna header tabel sedikit lebih tebal/jelas */
  th {
    border-bottom: 3px solid #21262d !important;
  }
</style>

# Variabel, Tipe Data, Komentar, dan Input dalam Python

> Catatan materi Koding dan Kecerdasan Artifisial
> Kelas X RPL Pertemuan 3
---

## Daftar Isi

1. [Variabel](#1-variabel)
2. [Tipe Data](#2-tipe-data)
3. [Komentar](#3-komentar)
4. [Input dan Output](#4-input-dan-output)
5. [Contoh Program Lengkap](#5-contoh-program-lengkap)
6. [Perbedaan Python dan C](#6-perbedaan-python-dan-c)
7. [Rangkuman](#7-rangkuman)

---

## 1. Variabel

**Variabel** adalah tempat menyimpan sebuah nilai data.

Berbeda dengan beberapa bahasa lain, di Python variabel dapat **langsung dibuat dan diisi nilai tanpa perlu mendeklarasikan tipe datanya terlebih dahulu**. Python akan otomatis mendeteksi tipe data variabel tersebut saat kode dijalankan (dikenal dengan istilah ***dynamic typing***).

```python
x = 5
y = "Hello, World!"
```

### Casting

Jika ingin menentukan sendiri tipe data dari sebuah nilai, kita bisa melakukan **casting** (konversi tipe data secara eksplisit).

```python
x = str(5)      # mengubah menjadi string -> '5'
y = int(3)      # mengubah menjadi integer -> 3
z = float(3)    # mengubah menjadi float -> 3.0
```

### Memeriksa Tipe Data dengan `type()`

Untuk melihat tipe data yang secara otomatis ditentukan oleh Python, gunakan fungsi `type()` dengan nama variabel di dalam tanda kurung.

```python
x = 5
y = 'Kantin Tefa'
z = 3.14

print(type(x))   # <class 'int'>
print(type(y))   # <class 'str'>
print(type(z))   # <class 'float'>
```

### Aturan Penamaan Variabel

Nama variabel bisa pendek seperti `x` dan `y`, atau lebih deskriptif seperti `nama`, `umur`, `alamat`, `tanggal_lahir`, `tempat_lahir`.

<div style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">
<strong>Diizinkan</strong>
<table style="width:100%; border-collapse:collapse; margin-top:8px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Aturan</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Dimulai huruf (a-z, A-Z) atau underscore (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">_</code>)</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">nama</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">_umur</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">Kelas</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Bersifat <em>case-sensitive</em></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">nama</code> berbeda dengan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">Nama</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;">Hanya berisi huruf, angka, underscore</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">nama_lengkap</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">tanggalLahir</code></td>
</tr>
</tbody>
</table>
</div>

<div style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">
<strong>Tidak Diizinkan</strong>
<table style="width:100%; border-collapse:collapse; margin-top:8px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Aturan</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Alasan</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Dimulai angka atau simbol</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Identifier harus diawali huruf atau underscore</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Mengandung spasi atau simbol selain underscore</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Hanya alfanumerik dan underscore yang diizinkan</td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;">Memakai <em>reserved word</em> Python</td>
<td style="padding:8px 10px; font-size:0.9em;">Kata tersebut sudah dipakai sebagai sintaks Python, contoh: <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">print</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">if</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">class</code></td>
</tr>
</tbody>
</table>
</div>

**Teknik penulisan untuk nama lebih dari satu kata:**

| Teknik | Contoh |
|---|---|
| Camel Case | `iniNamaVariabel` |
| Pascal Case | `IniNamaVariabel` |
| Snake Case | `ini_nama_variabel` |

### Assignment Ganda

Python membolehkan pengisian nilai ke beberapa variabel berbeda dalam satu baris:

```python
x, y, z = 1, 2, 3
```

Python juga membolehkan pengisian nilai yang **sama** ke beberapa variabel sekaligus dalam satu baris:

```python
x = y = z = "Halo"
```

---

## 2. Tipe Data

**Tipe data** adalah pengelompokan jenis nilai yang bisa disimpan oleh sebuah variabel. Setiap tipe data memiliki fungsi dan karakteristiknya masing-masing.

### Kategori Tipe Data di Python

1. **Tipe data dasar**: `int`, `float`, `complex`, `str`, `bool`
2. **Tipe data lanjutan**: `list`, `tuple`, `range`, `dict`, `set`, `NoneType`

Fokus pembahasan kali ini ada di tipe data dasar, dibagi menjadi tiga kelompok: **Numerik**, **String**, dan **Boolean**.

### 2.1 Tipe Data Angka (Numerik)

<div style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Tipe</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Fungsi</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Contoh nilai</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Bilangan bulat</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">5</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">-7</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">1000</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">float</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Bilangan desimal/pecahan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">3.14</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">-0.5</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">2.0</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">complex</code></td>
<td style="padding:8px 10px; font-size:0.9em;">Bilangan kompleks (real + imajiner)</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">3 + 5j</code></td>
</tr>
</tbody>
</table>
</div>

```python
angka_bulat = 10
angka_desimal = 7.5
angka_kompleks = 3 + 5j

print(type(angka_bulat))     # <class 'int'>
print(type(angka_desimal))   # <class 'float'>
print(type(angka_kompleks))  # <class 'complex'>
```

> Beda dengan bahasa C yang mengharuskan kita menuliskan tipe data secara saat deklarasi variabel (`int angka = 10;`), di Python cukup tulis angkanya saja, maka Python akan mendeteksi apakah ada tanda titik desimal atau tidak dan otomatis menentukan tipenya. Angka `10` otomatis menjadi `int`, sedangkan `10.0` otomatis menjadi `float`.
>
> Tipe `complex` jarang dipakai dalam pemrograman dasar sehari-hari, cukup dikenali namanya saja untuk sekarang.

### 2.2 Tipe Data String

Tipe `str` atau `String` adalah kumpulan karakter atau teks. 

Variabel yang berisi data string di Python bisa dideklarasikan menggunakan tanda kutip satu (*single quotes*) maupun tanda kutip dua (*double quotes*). Keduanya sama saja dan bisa dipilih bebas.

```python
x = "Kantin Tefa"
# sama saja hasilnya dengan
x = 'Kantin Tefa'
```

### 2.3 Tipe Data Boolean

Tipe `bool` (boolean) hanya memiliki dua kemungkinan nilai: `True` atau `False`. Biasanya dipakai untuk menyimpan status atau hasil dari sebuah kondisi.

```python
status_lulus = True
status_hadir = False

print(type(status_lulus))   # <class 'bool'>
```

---

## 3. Komentar

### Single-line Comment

Komentar satu baris di Python dibuat dengan simbol pagar (`#`). Python akan otomatis menganggap seluruh isi baris tersebut sebagai komentar.

```python
# ini adalah komentar
print("Hello, World!")
```

### Multiline Comment

Python **tidak memiliki sintaks bawaan khusus** untuk komentar multi-baris. Namun tetap ada dua cara umum untuk membuatnya:

1. Menambahkan `#` di setiap baris
2. Menggunakan nilai string dengan **triple quotes** (tiga tanda kutip berturut-turut)

```python
'''
ini adalah komentar multiline
dapat ditulis lebih dari satu baris
bisa menggunakan tanda kutip satu sebanyak 3 karakter
'''

"""
ini adalah komentar multiline
dapat ditulis lebih dari satu baris
bisa menggunakan tanda kutip dua sebanyak 3 karakter
"""
```

---

## 4. Input dan Output

Fungsi `print()` digunakan untuk menampilkan teks atau nilai output ke layar, dan tidak perlu diakhiri titik koma (`;`) seperti di bahasa C.
 
```python
print(5 + 3)                      # hasil operasi matematika: 8
print("Umur saya:", 16, "tahun")  # kombinasi teks dan angka
```

### Menerima Input dari Pengguna

Sejauh ini nilai variabel selalu ditulis langsung di dalam kode (misalnya `umur = 16`). Supaya program bisa menerima nilai dari pengguna secara interaktif, Python menyediakan fungsi **`input()`**.

```python
nama = input("Siapa namamu? ")
print("Halo,", nama)
```

Saat baris `input(...)` dijalankan, program akan berhenti sejenak menunggu pengguna mengetik sesuatu dan menekan Enter. Teks yang diketik pengguna kemudian disimpan ke dalam variabel `nama`.

<div style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">
<strong>Catatan penting</strong><br>
Nilai yang dihasilkan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">input()</code> <strong>selalu bertipe <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">str</code></strong>, meskipun pengguna mengetik angka. Kalau nilai tersebut ingin dipakai untuk operasi matematika, harus di-<em>casting</em> terlebih dahulu.
<pre style="background:#0d1117; color:#c9d1d9; padding:12px 14px; border-radius:6px; overflow-x:auto; margin-top:10px;"><code>umur = input("Umur kamu berapa? ")
umur = int(umur)   # casting dari str menjadi int
print(umur + 1)</code></pre>
</div>

### Kesalahan Umum dan print(f-string)

Menggabungkan string dan angka langsung dengan `+` akan menyebabkan **error**, karena Python tidak mengizinkan penggabungan `str` dengan `int` secara langsung.
 
```python
umur = 16
print("Umur saya " + umur)         # ERROR! str tidak bisa langsung digabung int
print("Umur saya " + str(umur))    # BENAR, tapi harus casting manual dulu
print(f"Umur saya {umur}")         # LEBIH PRAKTIS, pakai f-string
```
 
**f-string** (ditandai huruf `f` sebelum tanda kutip) adalah cara paling praktis menggabungkan teks dan variabel. Caranya cukup tulis nama variabel di dalam kurung kurawal `{ }`, tanpa perlu casting manual dan tanpa risiko error seperti contoh di atas.

<div style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">
f-string otomatis mengubah tipe data apa pun (angka, boolean, dll) menjadi teks saat ditampilkan, jadi tidak akan menyebabkan error seperti kasus penggabungan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+</code> pada bagian sebelumnya. Ini adalah cara yang lebih direkomendasikan dibanding menggabungkan string secara manual.
</div>

---

## 5. Contoh Program Lengkap

### Program Penjumlahan Sederhana dengan fungsi Input
Program sederhana yang menggunakan fungsi input nama pengguna dan input dua angka untuk dilakukan proses penjumlahan
```python
nama = input("Masukkan Nama: ")
print("Halo", nama, "Silahkan Masukkan Angkanya!")

angka1 = int(input("Masukkan Angka Pertama: "))
angka2 = int(input("Masukkan Angka Kedua: "))

penjumlahan = angka1 + angka2

print("Hasil Penjumlahan Adalah: ", penjumlahan)
```

**Input:**

```
Masukkan Nama: Farid

Masukkan Angka Pertama: 20
Masukkan Angka Kedua: 30
```

**Output:**
```
Masukkan Nama: Farid
Halo Farid Silahkan Masukkan Angkanya!
Masukkan Angka Pertama: 20
Masukkan Angka Kedua: 30
Hasil Penjumlahan Adalah:  50
```

### Program Menghitung Luas Permukaan dan Volume Balok dengan fungsi Input
Praktek penerapan seluruh materi (variabel, tipe data, casting, komentar, `input()`, dan f-string). Program menghitung **luas permukaan dan volume balok**, serta menampilkan pesan menyapa pengguna dengan input nama dan variabel (panjang, lebar, dan tinggi). 

```python
# Ini adalah Komentar Singleline
print("-- Selamat Datang di Program Menghitung Luas Permukaan dan Volume Balok")

# Membuat Variabel {nama} yang dapat di input oleh pengguna dan akan ditampilkan di layar
nama = input("Silahkan Masukkan Nama Kamu Terlebih Dahulu: ")
print(f"\nHalo {nama}! Silahkan Masukkan Angka nya!")

'''
===============================
Ini adalah Komentar Multiline
===============================
Membuat variabel (panjang, lebar, dan tinggi) dengan fungsi input yang dapat diisi pengguna.
Variabel input yang akan digunakan untuk perhitungan matematika, HARUS menggunakan teknik casting 
untuk mengubah tipe data nya menjadi numerik (int atau float).
Ketiga variabel menggunakan casting float, agar pengguna bisa mengisi bilangan desimal.
'''
panjang = float(input("Masukkan Panjang nya: "))
lebar = float(input("Masukkan Lebar nya: "))
tinggi = float(input("Masukkan Tinggi nya: "))

luas =  int(2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)) # Mengubah tipe data menjadi int, untuk mengubah hasil menjadi bilangan bulat
volume = int(panjang * lebar * tinggi) # Mengubah tipe data menjadi int, untuk mengubah hasil menjadi bilangan bulat

# Menampilkan Hasil Input Pengguna dan Hasil Perhitungan Luas dan Volume Balok
print("\n=== Hasil Perhitungan ===")
print(f"Panjang: {panjang}")
print(f"Lebar: {lebar}")
print(f"Tinggi: {tinggi}")
print(f"Luas Permukaan Balok: {luas}")
print(f"Volume: {volume}")
```

**Input:**

```
Silahkan Masukkan Nama Kamu Terlebih Dahulu: Farid

Masukkan Panjang nya: 10
Masukkan Lebar nya: 10
Masukkan Tinggi nya: 10
```

**Output:**

```
-- Selamat Datang di Program Menghitung Luas Permukaan dan Volume Balok
Silahkan Masukkan Nama Kamu Terlebih Dahulu: Farid

Halo Farid! Silahkan Masukkan Angka nya!
Masukkan Panjang nya: 10
Masukkan Lebar nya: 10
Masukkan Tinggi nya: 10

=== Hasil Perhitungan ===
Panjang: 10.0
Lebar: 10.0
Tinggi: 10.0
Luas Permukaan Balok: 600
Volume: 1000
```

> **Alur Program**: input pengguna (`str`) → **di-casting ke `float`** supaya bisa dihitung → hasil perhitungan (`float`) → **di-casting lagi ke `int`** supaya ditampilkan sebagai bilangan bulat.

---

## 6. Perbedaan Python dan C

Setelah pertemuan sebelumnya membahas variabel dan tipe data di bahasa **C**, berikut perbandingan langsung dengan **Python** supaya perbedaan formatnya terlihat jelas.

<div style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Aspek</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Bahasa C</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Python</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Deklarasi tipe data</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Wajib eksplisit (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int umur = 16;</code>)</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Otomatis terdeteksi (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">umur = 16</code>)</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Akhir baris statement</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Wajib titik koma (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">;</code>)</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak perlu titik koma</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Blok kode</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Kurung kurawal <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">{ }</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Indentasi (spasi/tab)</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Komentar satu baris</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">//</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">#</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Komentar banyak baris</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">/* ... */</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak ada bawaan, pakai <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">'''...'''</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tipe data string</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak ada bawaan, direpresentasikan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">char[]</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Ada tipe <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">str</code> bawaan</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tanda kutip untuk teks</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Karakter tunggal kutip satu, string kutip dua</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Kutip satu/dua bebas untuk string</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Mengganti tipe data variabel</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Butuh variabel baru dengan tipe berbeda</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Casting langsung (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">str()</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int()</code>)</td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;">Mencetak ke layar</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">printf()</code> dengan format specifier</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">print()</code>, tanpa format specifier</td>
</tr>
</tbody>
</table>
</div>

> **Poin penting untuk diingat:** C disebut bahasa dengan tipe data *statis* (harus ditentukan di awal dan tidak berubah), sedangkan Python bersifat *dinamis* (tipe data mengikuti nilai yang diberikan, dan fleksibel berubah kapan saja). Ini adalah salah satu perbedaan filosofi paling mendasar antara kedua bahasa ini.

---

## 7. Rangkuman

- **Variabel** di Python langsung diisi nilai tanpa deklarasi tipe (*dynamic typing*), tipenya bisa diperiksa dengan `type()` atau diubah dengan **casting**.
- **Tipe data dasar** di Python meliputi kelompok Angka (`int`, `float`, `complex`), String (`str`), dan Boolean (`bool`).
- **Komentar** satu baris pakai `#`, komentar banyak baris memakai triple quotes (`'''` atau `"""`).
- **`print()`** menampilkan output, **`input()`** menerima nilai dari pengguna. Secara bawaan tipe nya adalah `str`, sehingga sering perlu di-*casting* untuk keperluan operasi matematika.
- Menggabungkan string dan angka langsung dengan `+` menyebabkan **error**. Solusinya casting ke `str()`, atau lebih praktis pakai **f-string**.
- Perbedaan paling mendasar antara Python dan C ada pada sifat tipe datanya: **statis** (C) vs **dinamis** (Python).

---

*Materi ini disusun untuk kebutuhan pembelajaran Koding dan Kecerdasan Artifisial.*

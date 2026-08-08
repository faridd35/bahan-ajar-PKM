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

# Variabel dan Tipe Data dalam Python

> Catatan materi Koding dan Kecerdasan Artifisial
> Pertemuan: Variabel dan Tipe Data (lanjutan dari Pengenalan Python)

---

## Daftar Isi

1. [Review Singkat: Mengenal Python](#1-review-singkat-mengenal-python)
2. [Indentasi dalam Python](#2-indentasi-dalam-python)
3. [Variabel dalam Python](#3-variabel-dalam-python)
4. [Tipe Data dalam Python](#4-tipe-data-dalam-python)
5. [Komentar dalam Python](#5-komentar-dalam-python)
6. [Input dan Output](#6-input-dan-output)
7. [Python vs C: Apa yang Berbeda?](#7-python-vs-c-apa-yang-berbeda)
8. [Contoh Program Lengkap](#8-contoh-program-lengkap)
9. [Rangkuman](#9-rangkuman)

---

## 1. Review Singkat: Mengenal Python

Sebelum masuk ke variabel dan tipe data, ingat kembali beberapa hal dasar tentang Python yang sudah dibahas pertemuan lalu.

**Python** adalah bahasa pemrograman populer yang dibuat oleh **Guido van Rossum** dan pertama kali dirilis pada **tahun 1991**. Python dikenal karena sintaksnya yang sederhana dan mudah dipahami, mirip dengan bahasa Inggris sehari-hari.

### Karakteristik Python

| Karakteristik | Penjelasan |
|---|---|
| Mudah dipelajari | Sintaks yang bersih dan sederhana |
| *Interpreted language* | Tidak perlu dikompilasi terlebih dahulu sebelum dijalankan |
| *Cross-platform* | Berjalan di Windows, Mac, dan Linux |
| *Open source* | Gratis dan bebas digunakan |
| Serbaguna (*versatile*) | Bisa digunakan untuk berbagai keperluan |

### Kekurangan Python

- Kecepatan eksekusi lebih lambat dibanding bahasa *compiled* (C, C++, Java)
- Konsumsi memori yang lebih besar

### Python Bisa Digunakan untuk Apa Saja?

- Web development (bagian server)
- Software development
- Matematika dan data science
- Sistem scripting

Python bisa dijalankan langsung lewat Command Line, atau ditulis dalam sebuah file dengan ekstensi **`.py`**.

---

## 2. Indentasi dalam Python

**Indentasi** adalah penambahan spasi atau tab di awal baris kode untuk mengatur struktur, hierarki, dan keterbacaan program.

Di Python, indentasi **sangat penting dan wajib digunakan**, karena berfungsi sebagai pengganti kurung kurawal `{ }` yang biasa dipakai di bahasa lain seperti C.

### Fungsi Utama Indentasi

| Fungsi | Digunakan pada |
|---|---|
| Mengatur perulangan | `for`, `while` |
| Mengatur percabangan | `if`, `elif`, `else` |
| Membuat fungsi dan class | `def`, `class` |

```python
# Contoh penggunaan indentasi pada percabangan
umur = 16

if umur >= 17:
    print("Sudah cukup umur")
else:
    print("Belum cukup umur")
```

<div style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">
Perhatikan: baris <code>print(...)</code> menjorok ke dalam (diberi indentasi) karena berada <strong>di dalam</strong> blok <code>if</code>/<code>else</code>. Kesalahan indentasi di Python akan langsung menyebabkan error, bukan sekadar masalah kerapian kode.
</div>

---

## 3. Variabel dalam Python

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

print(type(x))   # <class 'int'>
print(type(y))   # <class 'str'>
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
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">identifier harus diawali huruf atau underscore</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Mengandung spasi atau simbol selain underscore</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">hanya alfanumerik dan underscore yang diizinkan</td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;">Memakai <em>reserved word</em> Python</td>
<td style="padding:8px 10px; font-size:0.9em;">kata tersebut sudah dipakai sebagai sintaks Python, contoh: <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">print</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">if</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">class</code></td>
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

## 4. Tipe Data dalam Python

**Tipe data** adalah pengelompokan jenis nilai yang bisa disimpan oleh sebuah variabel. Setiap tipe data memiliki fungsi dan karakteristiknya masing-masing.

| Kategori | Tipe Data |
|---|---|
| Tipe numerik | `int`, `float`, `complex` |
| Tipe teks | `str` |
| Tipe boolean | `bool` |
| Tipe urutan | `list`, `tuple`, `range` |
| Tipe None | `NoneType` |

> Fokus pertemuan ini ada pada tiga kategori dasar: **Angka**, **String**, dan **Boolean**. Tipe data yang lebih kompleks seperti `list`, `tuple`, `dict`, dan `set` akan dibahas lebih lanjut di pertemuan berikutnya.

### 4.1 Tipe Data Angka (Numeric)

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

> Beda dengan bahasa C yang mengharuskan kita menuliskan tipe data secara eksplisit saat deklarasi (`int angka = 10;`), di Python cukup tulis angkanya saja — ada tanda titik desimal atau tidak itulah yang otomatis menentukan tipenya. Angka `10` otomatis menjadi `int`, sedangkan `10.0` otomatis menjadi `float`.
>
> Tipe `complex` jarang dipakai dalam pemrograman dasar sehari-hari, cukup dikenali namanya saja untuk sekarang.

### 4.2 Tipe Data String

**String** adalah kumpulan karakter atau teks.

Variabel yang berisi data string di Python bisa dideklarasikan menggunakan tanda kutip satu (*single quotes*) maupun tanda kutip dua (*double quotes*) — keduanya sama saja dan bisa dipilih bebas.

```python
x = "Kantin Tefa"
# sama saja hasilnya dengan
x = 'Kantin Tefa'
```

### 4.3 Tipe Data Boolean

Tipe `bool` (boolean) hanya memiliki dua kemungkinan nilai: `True` atau `False`. Biasanya dipakai untuk menyimpan status atau hasil dari sebuah kondisi.

```python
status_lulus = True
status_hadir = False

print(type(status_lulus))   # <class 'bool'>
```

---

## 5. Komentar dalam Python

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

## 6. Input dan Output

### Statement dan print()

Dalam sebuah program, **statement** adalah kumpulan instruksi yang kita ketik atau kode yang akan dieksekusi oleh komputer.

```python
print("Python sangat menyenangkan")
```

Baris kode di atas adalah contoh sebuah statement. Perlu dicatat: **di Python, statement tidak perlu diakhiri dengan tanda titik koma (`;`)**.

Fungsi `print()` digunakan untuk menampilkan teks atau nilai output. Saat menampilkan teks, kita bisa menggunakan tanda kutip dua (`""`) maupun kutip satu (`''`).

Python bisa langsung mencetak angka, bahkan langsung melakukan operasi matematika di dalam `print()`. Python juga bisa mencetak kombinasi angka dan teks sekaligus, yang dipisahkan dengan tanda koma.

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

### Kesalahan Umum: Menggabungkan String dan Angka

Salah satu kesalahan yang paling sering dialami pemula Python adalah mencoba menggabungkan (*concatenate*) string dengan angka menggunakan tanda `+` secara langsung.

```python
umur = 16
print("Umur saya " + umur)        # ERROR! tidak bisa langsung digabung
```

Kode di atas akan menghasilkan error, karena Python tidak mengizinkan penggabungan tipe data `str` dengan `int` secara langsung menggunakan `+`. Ini berbeda dengan `printf()` di bahasa C, yang otomatis menyesuaikan format lewat format specifier (`%d`, `%s`, dst).

**Solusinya:** ubah dulu angka tersebut menjadi string menggunakan casting `str()`, seperti yang sudah dibahas di bagian Variabel.

```python
umur = 16
print("Umur saya " + str(umur))   # BENAR, hasil: Umur saya 16
```

### f-string: Cara Modern Menggabungkan Teks dan Variabel

Selain memakai tanda koma (seperti pada `print()` sebelumnya) atau `+` dengan casting manual, Python punya cara yang lebih praktis dan lebih umum dipakai: **f-string**.

f-string dibuat dengan menambahkan huruf `f` sebelum tanda kutip, lalu variabel langsung ditulis di dalam kurung kurawal `{ }` tanpa perlu casting manual.

```python
nama = "Farid"
umur = 16

print(f"Nama saya {nama}, umur {umur} tahun")
# Output: Nama saya Farid, umur 16 tahun
```

<div style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">
f-string otomatis mengubah tipe data apa pun (angka, boolean, dll) menjadi teks saat ditampilkan, jadi tidak akan menyebabkan error seperti kasus penggabungan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+</code> pada bagian sebelumnya. Ini adalah cara yang lebih direkomendasikan dibanding menggabungkan string secara manual.
</div>

---

## 7. Python vs C: Apa yang Berbeda?

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

## 8. Contoh Program Lengkap

Sebagai penerapan dari seluruh materi yang sudah dibahas — variabel, tipe data, casting, komentar, `input()`, dan f-string — berikut contoh program yang menghitung **luas permukaan dan volume balok**, sekaligus menyapa pengguna dengan namanya sendiri.

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

### Penjelasan Ringkas

<div style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Bagian Kode</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Konsep yang Diterapkan</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;"># Ini adalah Komentar Singleline</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Komentar satu baris — dipakai untuk menandai bagian-bagian program</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">nama = input(...)</code> lalu ditampilkan dengan f-string</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">input()</code> untuk menerima teks, langsung dipakai di f-string tanpa casting (karena tetap dipakai sebagai teks)</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">'''...'''</code> di atas bagian input angka</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Komentar multiline — menjelaskan blok kode yang lebih panjang, yaitu alasan casting <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">float</code> diperlukan</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">panjang = float(input(...))</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">input()</code> dan casting digabung dalam satu baris, langsung diubah ke <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">float</code> agar bisa dihitung dan mendukung desimal</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">luas = int(2 * (...))</code>, <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">volume = int(...)</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Hasil perhitungan (otomatis <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">float</code>) di-casting lagi ke <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int</code> agar ditampilkan sebagai bilangan bulat</td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">print(f"Luas Permukaan Balok: {luas}")</code></td>
<td style="padding:8px 10px; font-size:0.9em;">f-string dipakai di seluruh bagian output, menggantikan cara lama (koma atau <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+</code> dengan casting manual)</td>
</tr>
</tbody>
</table>
</div>

> Perhatikan alur casting dua arah di program ini: input pengguna (`str`) → **di-casting ke `float`** supaya bisa dihitung → hasil perhitungan (`float`) → **di-casting lagi ke `int`** supaya ditampilkan sebagai bilangan bulat. Ini adalah contoh nyata kenapa memahami casting itu penting — bukan cuma sekali dipakai, tapi bisa berulang sesuai kebutuhan program.

---

## 9. Rangkuman

- Python bersifat *interpreted*, sintaksnya sederhana, dan tidak memerlukan deklarasi tipe data secara eksplisit (*dynamic typing*).
- **Indentasi** di Python bersifat wajib dan menggantikan fungsi kurung kurawal `{ }` di bahasa C.
- **Variabel** di Python langsung diisi nilai tanpa deklarasi tipe, dan tipenya bisa diperiksa dengan `type()` atau diubah dengan **casting**. Penamaan variabel mengikuti aturan identifier dan bisa memakai gaya Camel Case, Pascal Case, atau Snake Case.
- **Tipe data** di Python terbagi dalam beberapa kategori; fokus pertemuan ini pada **Angka** (`int`, `float`, `complex`), **String** (`str`), dan **Boolean** (`bool`).
- **Komentar** satu baris pakai `#`, komentar banyak baris memakai triple quotes (`'''` atau `"""`) karena Python tidak punya sintaks komentar multi-baris bawaan.
- **`print()`** menampilkan output, **`input()`** menerima nilai dari pengguna — dan hasil `input()` selalu bertipe `str` sehingga sering perlu di-*casting*.
- Menggabungkan string dan angka langsung dengan `+` akan menyebabkan **error** — harus di-casting dulu ke `str()`, atau gunakan **f-string** sebagai cara yang lebih praktis.
- Perbedaan paling mendasar antara Python dan C ada pada sifat tipe datanya: **statis** (C) vs **dinamis** (Python).

---

*Materi ini disusun untuk kebutuhan pembelajaran Koding dan Kecerdasan Artifisial.*

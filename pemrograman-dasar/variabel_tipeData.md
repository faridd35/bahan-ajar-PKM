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

# Komentar, Variabel, dan Tipe Data dalam Bahasa C

> Catatan materi Pemrograman Dasar — Kelas X RPL
> Pertemuan 3

---

## Daftar Isi

1. [Komentar](#1-komentar)
2. [Variabel](#2-variabel)
3. [Tipe Data](#3-tipe-data)
4. [Escape Sequence](#4-escape-sequence)
5. [Contoh Program Lengkap](#5-contoh-program-lengkap)
6. [Rangkuman](#6-rangkuman)

---

## 1. Komentar

**Komentar** adalah teks di dalam kode program yang diabaikan oleh compiler/interpreter saat program dijalankan. Komentar tidak memengaruhi jalannya program, fungsinya murni untuk manusia yang membaca kode.

### Fungsi Komentar dalam Kode Program

- Menjelaskan alur atau tahapan logika dalam kode
- Memberikan informasi atau catatan tambahan pada bagian kode tertentu
- Memudahkan proses pemeliharaan (*maintenance*) program di kemudian hari
- Membantu programmer mengingat kembali fungsi dari kode yang pernah ditulis
- Memudahkan programmer lain memahami kode yang kita buat (kolaborasi tim)

### Jenis Komentar di Bahasa C

Bahasa C mengenal dua jenis komentar:

| Jenis | Sintaks | Cakupan |
|---|---|---|
| Single-line | `// teks komentar` | Hanya berlaku untuk satu baris |
| Multi-line | `/* teks komentar */` | Bisa mencakup satu baris atau beberapa baris sekaligus |

**Contoh:**

```c
// Ini adalah komentar single-line
#include <stdio.h>

/*
Ini adalah komentar multi-line.
Bisa digunakan untuk menulis penjelasan
yang lebih panjang, misalnya deskripsi program.
*/
int main() {
    // Menampilkan teks ke layar
    printf("Hello World");
    return 0;
}
```

**Output:**

```
Hello World
```

<div markdown="1" style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Catatan**

Komentar single-line (<code>//</code>) hanya berlaku untuk satu baris. Untuk penjelasan yang lebih panjang dan mencakup banyak baris sekaligus, gunakan <code>/* */</code>.

</div>

---

## 2. Variabel

**Variabel** adalah tempat penyimpanan data di dalam memori komputer yang diberi nama, dan nilainya dapat digunakan atau diubah selama program berjalan.

### Analogi

Variabel dapat dibayangkan seperti sebuah **kotak berlabel**:

- **Label pada kotak** → nama variabel
- **Barang di dalam kotak** → nilai yang disimpan
- **Jenis barang yang boleh dimasukkan** → tipe data

Kotak dengan label `umur` misalnya hanya cocok diisi angka, bukan teks. Begitu juga variabel bertipe `int` hanya boleh menyimpan bilangan bulat.

### Struktur Variabel

<div markdown="1" style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Penting**

Setiap variabel di bahasa C selalu terdiri dari tiga bagian berikut. Ketiganya wajib ada saat sebuah variabel dideklarasikan dengan nilai awal.

| # | Bagian | Keterangan |
|:-:|---|---|
| 1 | Nama Variabel *(identifier)* | Label yang dipakai untuk memanggil/mengakses nilai |
| 2 | Tipe Data | Menentukan jenis nilai apa yang boleh disimpan |
| 3 | Nilai | Data aktual yang disimpan di dalam variabel |

</div>

Sintaks dasar deklarasi variabel:

```c
tipe_data nama_variabel = nilai;
```

**Contoh:**

```c
int angka = 10;
float phi = 3.14;
char nilai = 'A';
char nama[] = "Farid";
char kelas[] = "X-PPLG";
```

### Aturan Penamaan Variabel

<div markdown="1" style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Diizinkan**


| Aturan | Contoh valid |
|---|---|
| Diawali huruf (a-z, A-Z) atau underscore (`_`) | `parkiran`, `nama`, `Kelas`, `_umur`, `asal`, `aSAl` |
| Bersifat *case-sensitive*, yaitu huruf besar dan kecil dianggap berbeda | `nama` ≠ `Nama` (dua variabel yang berbeda) |
| Kata lebih dari satu suku kata dipisah dengan underscore (`_`) | `nama_lengkap`, `jenis_mobil`, `menu_makanan`, `mata_pelajaran` |

</div>

<div markdown="1" style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Tidak Diizinkan**


| Aturan | Contoh tidak valid | Alasan |
|---|---|---|
| Tidak boleh dipisah dengan tanda strip (`-`) | `mobil-sport`, `warung-makan`, `mata-pelajaran` | tanda `-` dibaca compiler sebagai operator pengurangan |
| Tidak boleh diawali angka atau simbol | `1nama`, `9azrul`, `#kaburajadulu`, `*lemari`, `@raffiahmad` | identifier harus diawali huruf atau underscore |
| Tidak boleh menggunakan kata kunci (*reserved word*) bahasa C | `printf`, `if`, `else`, `int`, `return` | kata tersebut sudah dipakai sebagai sintaks bahasa C |

</div>

---

## 3. Tipe Data

**Tipe data** adalah pengelompokan jenis nilai yang boleh disimpan dalam sebuah variabel. Tipe data menentukan seberapa besar ukuran memori yang dialokasikan dan operasi apa saja yang bisa dilakukan terhadap nilai tersebut.

### Kategori Tipe Data di C

1. **Tipe data primitif / bawaan** (*primary/built-in*) : `int`, `char`, `float`, `double`
2. **Tipe data turunan** (*derived*) : `array`, `pointer`, `reference`

Fokus pembahasan kali ini ada di tipe data primitif.

### Jenis Tipe Data Primitif

<div markdown="1" style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Tipe | Fungsi | Contoh nilai |
|---|---|---|
| `int` *(integer)* | Menyimpan bilangan bulat | `1`, `2`, `3` |
| `float` | Menyimpan bilangan desimal, presisi sekitar 6–7 digit di belakang koma | `6.7`, `3.14`, `1.234567` |
| `double` | Menyimpan bilangan desimal dengan presisi lebih tinggi, hingga sekitar 15 digit | `1.234567890000` |
| `char` *(character)* | Menyimpan satu karakter tunggal, ditulis dengan tanda petik satu `' '` | `'1'`, `'A'`, `'B'`, `'C'` |

</div>

### Bagaimana dengan String?

Berbeda dengan bahasa pemrograman lain seperti Python atau Java, **bahasa C tidak memiliki tipe data `string` secara bawaan**.

String adalah kumpulan karakter (huruf, angka, simbol, atau spasi) yang membentuk sebuah teks. Karena C tidak punya tipe khusus untuk itu, **string direpresentasikan sebagai gabungan beberapa `char`**, yaitu **array of char** (`char[]`), dan ditulis dengan tanda petik dua `" "`.

```c
char nama[] = "Farid";      // string, tersimpan sebagai array of char
char kelas[] = "X-PPLG";    // string, tersimpan sebagai array of char
```

### Format Specifier

<div markdown="1" style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">
Format specifier digunakan untuk menghubungkan sebuah variabel dengan fungsi <code>printf()</code> agar nilainya bisa ditampilkan sesuai tipe datanya.

| Tipe Data | Format Specifier |
|:-:|:-:|
| `int` | `%d` atau `%i` |
| `float` | `%f` |
| `double` | `%lf` |
| `char` | `%c` |
| string (`char[]`) | `%s` |

</div>

---

## 4. Escape Sequence

Kalian mungkin memperhatikan tanda `\n` pada beberapa contoh program sebelumnya (misalnya di `printf("Hello World\n")`). Tanda tersebut adalah salah satu contoh **escape sequence**.

**Escape sequence** adalah kombinasi karakter yang diawali tanda backslash (`\`) untuk merepresentasikan karakter khusus yang tidak bisa langsung diketik atau punya fungsi tersendiri (seperti pindah baris atau tab), bukan untuk ditampilkan apa adanya.

<div markdown="1" style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Escape Sequence | Fungsi |
|:-:|---|
| `\n` | Pindah ke baris baru (*new line*) |
| `\t` | Menambahkan tab (indentasi horizontal) |
| `\"` | Menampilkan tanda kutip dua `"` di dalam string |
| `\'` | Menampilkan tanda kutip satu `'` di dalam karakter |
| `\\` | Menampilkan tanda backslash `\` |

</div>

**Contoh penggunaan:**

```c
#include <stdio.h>

int main() {
    printf("Nama\tKelas\n");       // \t memberi jarak seperti tabel, \n pindah baris
    printf("Farid\tX-PPLG\n");
    printf("Dia berkata: \"Saya Akan Lawan!!!\"\n"); // \" menampilkan tanda kutip
    return 0;
}
```

**Output:**

```
Nama	Kelas
Farid	X-PPLG
Dia berkata: "Saya Akan Lawan!!!"
```

<div markdown="1" style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Perhatian**

Tanpa <code>\n</code>, seluruh hasil <code>printf()</code> akan tercetak menyambung dalam satu baris meskipun ditulis di baris kode yang berbeda-beda. Ini adalah kesalahan yang cukup sering terjadi pada pemula.

</div>

---

## 5. Contoh Program Lengkap

Program berikut menggabungkan komentar, variabel, seluruh tipe data (`int`, `float`, `double`, `char`, string), dan escape sequence yang telah dibahas.

```c
#include <stdio.h>

int main() {
    // Deklarasi variabel dengan berbagai tipe data
    char nama[] = "Farid";        // string (array of char)
    int umur = 20;                // tipe int
    float tinggi_badan = 170.5;   // tipe float
    char golongan_darah = 'A';    // tipe char

    /*
    Menampilkan seluruh data ke layar
    menggunakan format specifier yang sesuai
    dengan tipe data masing-masing variabel
    */
    printf("===== BIODATA =====\n");
    printf("Nama           : %s\n", nama);
    printf("Umur           : %d tahun\n", umur);
    printf("Tinggi Badan   : %.1f cm\n", tinggi_badan);
    printf("Golongan Darah : %c\n", golongan_darah);
    return 0;
}
```

**Output program:**

```
====== BIODATA ======
Nama           : Farid
Umur           : 20 tahun
Tinggi Badan   : 170.5 cm
Golongan Darah : A
```

---

## 6. Rangkuman

- **Komentar** (`//` dan `/* */`) tidak memengaruhi jalannya program, tetapi sangat membantu dokumentasi dan kolaborasi.
- **Variabel** adalah wadah bernama untuk menyimpan nilai, dengan struktur: nama variabel, tipe data, dan nilai. Penamaan variabel harus mengikuti aturan identifier yang berlaku di C.
- **Tipe data primitif** di C meliputi `int`, `float`, `double`, dan `char`.
- **String tidak ada sebagai tipe data bawaan di C**, sebagai gantinya string direpresentasikan sebagai `char[]` (array of char).
- Setiap tipe data punya **format specifier**-nya sendiri saat digunakan pada `printf()`: `%d`/`%i` untuk int, `%f` untuk float, `%lf` untuk double, `%c` untuk char, dan `%s` untuk string.
- **Escape sequence** (`\n`, `\t`, `\"`, `\'`, `\\`) digunakan untuk menampilkan karakter khusus atau mengatur format tampilan output.

---

*Materi ini disusun untuk kebutuhan pembelajaran Pemrograman Dasar Kelas X RPL.*

---
layout: default
---

# Fungsi dalam Bahasa C

> Catatan materi Pemrograman Dasar — Kelas X RPL
> Pertemuan: Fungsi

---

## Daftar Isi

1. [Mengenal Fungsi](#1-mengenal-fungsi)
2. [Membuat dan Memanggil Fungsi](#2-membuat-dan-memanggil-fungsi)
3. [Parameter dan Argumen](#3-parameter-dan-argumen)
4. [Nilai Kembalian (`return`)](#4-nilai-kembalian-return)
5. [Deklarasi (Prototype) dan Definisi Fungsi](#5-deklarasi-prototype-dan-definisi-fungsi)
6. [Variabel Lokal](#6-variabel-lokal)
7. [Array sebagai Parameter](#7-array-sebagai-parameter)
8. [Contoh Program Lengkap: Kalkulator dengan Fungsi](#8-contoh-program-lengkap-kalkulator-dengan-fungsi)
9. [Rangkuman](#9-rangkuman)

---

## 1. Mengenal Fungsi

**Fungsi** (*function*) adalah **sekumpulan kode yang diberi nama** dan hanya dijalankan ketika **dipanggil**. Satu fungsi bisa dipanggil berkali-kali.

Kegunaan fungsi:

- **Menghindari kode berulang.** Kode ditulis sekali, lalu dipanggil kapan saja.
- **Program lebih rapi.** Program besar dipecah menjadi bagian-bagian kecil.
- **Perbaikan lebih mudah.** Kesalahan cukup diperbaiki di satu tempat.

Fungsi yang sudah kamu pakai:

<div markdown="1" style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Fungsi | Tugasnya |
|---|---|
| `printf()` | Menampilkan teks ke layar |
| `scanf()` | Membaca input dari keyboard |
| `main()` | Fungsi utama, tempat program mulai berjalan |

`printf()` dan `scanf()` adalah **fungsi bawaan** (sudah disediakan C lewat `#include <stdio.h>`). Pada materi ini kamu belajar membuat **fungsi buatan sendiri**.

</div>

**Bentuk umum sebuah fungsi:**

```c
tipe_data nama_fungsi(tipe_data nama_parameter) {
    // kode yang dijalankan fungsi
    return nilai;
}
```

<div markdown="1" style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Bagian | Artinya |
|---|---|
| `tipe_data` (di depan nama) | Jenis nilai yang **dikembalikan** fungsi, misalnya `int` atau `float`. Jika tidak mengembalikan apa pun, tulis `void` |
| `nama_fungsi` | Nama fungsi. Dipakai saat memanggil fungsi |
| `(tipe_data nama_parameter)` | Data yang **diterima** fungsi dari luar. Boleh kosong atau lebih dari satu |
| `{ ... }` | Badan fungsi, yaitu kode yang dijalankan |
| `return nilai;` | Mengirim hasil kembali ke tempat fungsi dipanggil |

</div>

---

## 2. Membuat dan Memanggil Fungsi

Fungsi paling sederhana hanya **menjalankan tugas** (misalnya menampilkan pesan) tanpa mengembalikan nilai. Tipenya adalah `void` (artinya "kosong").

**Sintaks:**

```c
void nama_fungsi() {
    // kode yang dijalankan
}
```

Untuk **memanggil** fungsi, tulis namanya diikuti tanda kurung dan titik koma:

```c
nama_fungsi();
```

### Contoh Program

```c
#include <stdio.h>

void apa_kabar() {
    printf("Halo, ini pesan dari fungsi apa_kabar()\n");
    printf("Sekarang kita hitung: 20 + 5 = %d\n", 20 + 5);
}

int main() {
    printf("Program dimulai\n");
    apa_kabar();
    printf("Program kembali ke main()\n");
    apa_kabar();
    return 0;
}
```

**Output:**

```
Program dimulai
Halo, ini pesan dari fungsi apa_kabar()
Sekarang kita hitung: 20 + 5 = 25
Program kembali ke main()
Halo, ini pesan dari fungsi apa_kabar()
Sekarang kita hitung: 20 + 5 = 25
```

Cara membaca jalannya program:

<div markdown="1" style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">

1. Program selalu dimulai dari `main()`.
2. Saat bertemu `apa_kabar();`, program **melompat** ke dalam fungsi `apa_kabar()`.
3. Semua kode di dalam fungsi dijalankan sampai selesai.
4. Program **kembali** ke `main()`, tepat setelah baris pemanggilan, lalu melanjutkan baris berikutnya.

</div>

`apa_kabar()` dipanggil **dua kali**, tetapi kodenya hanya ditulis **sekali**.

<div markdown="1" style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Perhatian**

- Fungsi yang **hanya dibuat tetapi tidak dipanggil** tidak akan pernah berjalan.
- Saat memanggil, **jangan lupa tanda kurung `()`**. Menulis `apa_kabar;` saja tidak memanggil fungsi.
- Pada contoh ini, fungsi ditulis **di atas** `main()`. Alasannya dijelaskan di bagian 5.

</div>

---

## 3. Parameter dan Argumen

Fungsi dapat **menerima data dari luar** melalui **parameter**.

Parameter ditulis di dalam tanda kurung setelah nama fungsi, lengkap dengan tipe datanya.

**Sintaks:**

```c
void nama_fungsi(tipe_data nama_parameter) {
    // parameter dipakai seperti variabel biasa
}
```

### Contoh Program

```c
#include <stdio.h>

void cetak_kuadrat(int angka) {
    printf("Kuadrat dari %d adalah %d\n", angka, angka * angka);
}

int main() {
    cetak_kuadrat(3);
    cetak_kuadrat(5);

    int x = 8;
    cetak_kuadrat(x);

    return 0;
}
```

**Output:**

```
Kuadrat dari 3 adalah 9
Kuadrat dari 5 adalah 25
Kuadrat dari 8 adalah 64
```

Fungsi `cetak_kuadrat()` yang sama memberikan hasil berbeda karena **data yang dikirim berbeda**.

### Parameter dan Argumen

Perbedaan kedua istilah ini:

<div markdown="1" style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Istilah | Artinya | Pada contoh di atas |
|---|---|---|
| **Parameter** | Variabel penampung di dalam definisi fungsi | `int angka` |
| **Argumen** | Nilai sebenarnya yang dikirim saat fungsi dipanggil | `3`, `5`, dan `x` |

</div>

Argumen bisa berupa angka langsung (`3`) maupun variabel (`x`). Nilainya **disalin** ke parameter.

### Parameter Lebih dari Satu

Pisahkan dengan koma. Saat memanggil, **jumlah dan urutan argumen harus sama** dengan parameternya.

```c
void cetak_selisih(int a, int b) {
    printf("Selisih: %d\n", a - b);
}

cetak_selisih(10, 4);   // a = 10, b = 4, hasilnya 6
```

---

## 4. Nilai Kembalian (`return`)

Fungsi `void` tidak memberi hasil. Agar fungsi dapat **mengirim hasil perhitungan** ke tempat pemanggilnya, gunakan `return`.

Langkahnya:

1. Ganti `void` dengan **tipe data hasil** yang diinginkan (`int`, `float`, dan seterusnya).
2. Gunakan `return` diikuti nilai yang dikirim kembali.

### Contoh Program

```c
#include <stdio.h>

int tambah(int nilai_pertama, int nilai_kedua) {
    return nilai_pertama + nilai_kedua;
}

int main() {
    int hasil = tambah(10, 10);
    printf("Hasil tambah: %d\n", hasil);
    return 0;
}
```

**Output:**

```
Hasil tambah: 20
```

Penjelasan langkah demi langkah:

<div markdown="1" style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Langkah | Yang terjadi |
|---|---|
| 1 | `main()` memanggil `tambah(10, 10)`. Nilai `10` dan `10` dikirim sebagai argumen |
| 2 | Parameter `nilai_pertama` dan `nilai_kedua` masing-masing menerima `10` |
| 3 | Fungsi menghitung `10 + 10` lalu mengirim hasilnya (`20`) dengan `return` |
| 4 | Nilai `20` kembali ke `main()` dan disimpan ke variabel `hasil` |

</div>

### Berbagai Cara Memakai Hasil Fungsi

Hasil dari fungsi bisa disimpan ke variabel, atau langsung dipakai di dalam `printf()`. Argumen juga boleh berupa variabel.

```c
#include <stdio.h>

int tambah(int nilai_pertama, int nilai_kedua) {
    return nilai_pertama + nilai_kedua;
}

int main() {
    int hasil = tambah(2, 20);
    int angka_pertama = 20, angka_kedua = 20;
    int hasil_kedua = tambah(angka_pertama, angka_kedua);

    printf("Hasil penjumlahan pertama: %d\n", tambah(2, 3));
    printf("Hasil penjumlahan kedua: %d\n", hasil);
    printf("Hasil penjumlahan ketiga: %d\n", hasil_kedua);
    return 0;
}
```

**Output:**

```
Hasil penjumlahan pertama: 5
Hasil penjumlahan kedua: 22
Hasil penjumlahan ketiga: 40
```

### Tipe Data Kembalian Lain

Tipe kembalian tidak harus `int`. Contoh fungsi yang mengembalikan bilangan desimal (`float`) untuk menghitung luas lingkaran:

```c
#include <stdio.h>

float hitung_luas_lingkaran(float jari) {
    return 3.14 * jari * jari;
}

int main() {
    printf("Luas lingkaran: %.2f\n", hitung_luas_lingkaran(3.2));
    return 0;
}
```

**Output:**

```
Luas lingkaran: 32.15
```

### Ringkasan Jenis Fungsi

<div markdown="1" style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Jenis | Contoh | Fungsinya |
|---|---|---|
| Tanpa parameter, tanpa return | `void apa_kabar()` | Hanya menjalankan tugas |
| Dengan parameter, tanpa return | `void cetak_kuadrat(int angka)` | Menerima data, lalu menjalankan tugas |
| Dengan parameter dan return | `int tambah(int a, int b)` | Menerima data, menghitung, lalu mengembalikan hasil |

</div>

<div markdown="1" style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Perhatian**

- Tipe data di depan nama fungsi harus **cocok dengan nilai yang di-`return`**. Fungsi `int` mengembalikan bilangan bulat, fungsi `float` mengembalikan bilangan desimal.
- `return` **mengakhiri fungsi seketika**. Kode yang ada setelah `return` tidak akan dijalankan.
- Fungsi `void` tidak mengembalikan nilai, jadi hasilnya **tidak bisa** disimpan ke variabel.

</div>

---

## 5. Deklarasi (Prototype) dan Definisi Fungsi

C membaca program dari atas ke bawah. Artinya, **sebuah fungsi harus sudah "dikenal" sebelum dipanggil**.

Pada contoh sebelumnya, fungsi ditulis di atas `main()`. Jika fungsi ditulis **di bawah** `main()`, buat **deklarasi** (disebut juga **prototype**) di bagian atas program agar compiler mengenalinya.

<div markdown="1" style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">

| Istilah | Artinya | Contoh |
|---|---|---|
| **Deklarasi (prototype)** | "Pemberitahuan" ke compiler bahwa fungsi ini ada. Hanya baris pertamanya, diakhiri `;` | `int kuadrat(int x);` |
| **Definisi** | Fungsi lengkap beserta isinya | `int kuadrat(int x) { return x * x; }` |

</div>

### Contoh Program

```c
#include <stdio.h>

// Deklarasi (prototype)
int kuadrat(int x);

int main() {
    printf("Kuadrat dari 4 adalah %d\n", kuadrat(4));
    return 0;
}

// Definisi fungsi
int kuadrat(int x) {
    return x * x;
}
```

**Output:**

```
Kuadrat dari 4 adalah 16
```

<div markdown="1" style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Apa yang terjadi jika deklarasinya dihapus?**

Compiler belum mengenal `kuadrat` saat membaca `main()`. Hasilnya bisa berupa peringatan *implicit declaration of function* atau bahkan error, tergantung versi compiler. Karena itu, tulis prototype jika fungsi diletakkan di bawah `main()`.

Prototype harus **sama dengan definisinya**: tipe kembalian, nama fungsi, serta jumlah dan tipe parameter.

</div>

---

## 6. Variabel Lokal

Variabel yang dibuat **di dalam fungsi** disebut **variabel lokal**. Variabel ini hanya bisa dipakai **di dalam fungsi itu** dan dihapus setelah fungsi selesai. Dua fungsi boleh memakai nama variabel yang sama tanpa saling memengaruhi.

```c
#include <stdio.h>

int kali_dua(int angka) {
    int hasil = angka * 2;
    return hasil;
}

int main() {
    int hasil = 100;
    int dua_kali = kali_dua(7);

    printf("hasil di main: %d\n", hasil);
    printf("dua_kali: %d\n", dua_kali);
    return 0;
}
```

**Output:**

```
hasil di main: 100
dua_kali: 14
```

Variabel `hasil` di `main()` dan variabel `hasil` di `kali_dua()` adalah **dua variabel yang berbeda**. Mengubah salah satunya tidak memengaruhi yang lain.

<div markdown="1" style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">

Karena variabel lokal tidak bisa dilihat dari fungsi lain, cara untuk membagikan datanya adalah lewat **parameter** (data masuk) dan **`return`** (data keluar). Parameter juga termasuk variabel lokal milik fungsinya.

</div>

---

## 7. Array sebagai Parameter

Array juga bisa dikirim ke fungsi. Pada parameter, tulis nama array dengan kurung siku kosong `[]`. Biasanya kita juga mengirim **ukuran array** sebagai parameter terpisah, supaya fungsi tahu berapa kali harus mengulang.

```c
#include <stdio.h>

void cetak_array(int array[], int ukuran) {
    for (int i = 0; i < ukuran; i++) {
        printf("%d ", array[i]);
    }
    printf("\n");
}

int main() {
    int angka[] = {10, 20, 30, 40, 50, 60};
    int ukuran = sizeof(angka) / sizeof(angka[0]);

    cetak_array(angka, ukuran);
    return 0;
}
```

**Output:**

```
10 20 30 40 50 60 
```

<div markdown="1" style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">

**Kenapa ukuran dihitung di `main()`, bukan di dalam fungsi?**

Rumus `sizeof(angka) / sizeof(angka[0])` hanya benar di tempat array itu dibuat. Di dalam fungsi, `array[]` tidak lagi "membawa" informasi ukurannya, sehingga rumus itu memberi hasil yang salah. Karena itu, hitung ukuran di `main()` lalu kirim sebagai parameter.

</div>

### Fungsi Bisa Mengubah Isi Array

Berbeda dengan parameter biasa yang hanya disalin, **perubahan pada isi array di dalam fungsi ikut mengubah array aslinya**.

```c
void gandakan(int array[], int ukuran) {
    for (int i = 0; i < ukuran; i++) {
        array[i] = array[i] * 2;
    }
}
```

Jika `gandakan(angka, ukuran);` dipanggil pada array di atas, lalu dicetak dengan `cetak_array()`:

```
Sebelum: 10 20 30 40 50 60 
Sesudah: 20 40 60 80 100 120 
```

---

## 8. Contoh Program Lengkap: Kalkulator dengan Fungsi

Program kalkulator berikut memakai perulangan, percabangan, `break`, `continue`, dan **fungsi**. Setiap operasi (tambah, kurang, kali, bagi, pangkat) dibuat sebagai fungsi tersendiri.

```c
/* KALKULATOR MENU DENGAN FUNGSI */
#include <stdio.h>

// Deklarasi (Prototype) Fungsi
void tampilkanMenu();
double tambah(double a, double b);
double kurang(double a, double b);
double kali(double a, double b);
double bagi(double a, double b);
double pangkat(double basis, int eksponen);

int main() {
    int pilihan, n;
    double angka1, angka2, hasil;
    double hasilTerbesar = 0;
    int jumlahOperasi = 0;

    while (1) {
        tampilkanMenu();

        if (scanf("%d", &pilihan) != 1) {
            while (getchar() != '\n');
            printf("Masukkan angka saja!\n");
            continue;
        }

        if (pilihan == 0) {
            break;
        }
        if (pilihan < 1 || pilihan > 5) {
            printf("Pilihan tidak valid!\n");
            continue;
        }

        if (pilihan == 5) {
            printf("Masukkan basis: ");
            scanf("%lf", &angka1);
            printf("Masukkan pangkat (bilangan bulat >= 0): ");
            scanf("%d", &n);

            if (n < 0) {
                printf("Pangkat tidak boleh negatif!\n");
                continue;
            }
            hasil = pangkat(angka1, n);
        } else {
            printf("Masukkan angka 1: ");
            scanf("%lf", &angka1);
            printf("Masukkan angka 2: ");
            scanf("%lf", &angka2);

            if (pilihan == 1) {
                hasil = tambah(angka1, angka2);
            } else if (pilihan == 2) {
                hasil = kurang(angka1, angka2);
            } else if (pilihan == 3) {
                hasil = kali(angka1, angka2);
            } else {
                if (angka2 == 0) {
                    printf("Tidak bisa dibagi dengan 0!\n");
                    continue;
                }
                hasil = bagi(angka1, angka2);
            }
        }

        printf("Hasilnya adalah: %.2f\n", hasil);

        jumlahOperasi++;
        if (jumlahOperasi == 1 || hasil > hasilTerbesar) {
            hasilTerbesar = hasil;
        }
    }

    if (jumlahOperasi == 0) {
        printf("\nBelum ada perhitungan.\n");
    } else {
        printf("\nTerima kasih! Jumlah perhitungan: %d, hasil terbesar: %.2f\n",
               jumlahOperasi, hasilTerbesar);
    }
    return 0;
}

// Definisi Fungsi
void tampilkanMenu() {
    printf("\n=== KALKULATOR ===\n");
    printf("1. Penjumlahan\n");
    printf("2. Pengurangan\n");
    printf("3. Perkalian\n");
    printf("4. Pembagian\n");
    printf("5. Pangkat\n");
    printf("0. Keluar\n");
    printf("Pilih opsi (0-5): ");
}

double tambah(double a, double b) {
    return a + b;
}

double kurang(double a, double b) {
    return a - b;
}

double kali(double a, double b) {
    return a * b;
}

double bagi(double a, double b) {
    return a / b;
}

double pangkat(double basis, int eksponen) {
    double hasil = 1;
    for (int i = 1; i <= eksponen; i++) {
        hasil = hasil * basis;
    }
    return hasil;
}
```

**Contoh jalannya program** (menu yang tampil berulang disingkat agar lebih ringkas):

```
=== KALKULATOR ===
1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian
5. Pangkat
0. Keluar
Pilih opsi (0-5): 1
Masukkan angka 1: 8.5
Masukkan angka 2: 2
Hasilnya adalah: 10.50

(menu tampil lagi)
Pilih opsi (0-5): 5
Masukkan basis: 2
Masukkan pangkat (bilangan bulat >= 0): 10
Hasilnya adalah: 1024.00

(menu tampil lagi)
Pilih opsi (0-5): 4
Masukkan angka 1: 7
Masukkan angka 2: 0
Tidak bisa dibagi dengan 0!

(menu tampil lagi)
Pilih opsi (0-5): 9
Pilihan tidak valid!

(menu tampil lagi)
Pilih opsi (0-5): abc
Masukkan angka saja!

(menu tampil lagi)
Pilih opsi (0-5): 0

Terima kasih! Jumlah perhitungan: 2, hasil terbesar: 1024.00
```

Poin penting pada program ini:

<div markdown="1" style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">

- **Prototype di atas, definisi di bawah.** Semua fungsi dideklarasikan sebelum `main()`, lalu didefinisikan setelahnya.
- **`tampilkanMenu()` bertipe `void`.** Fungsi ini hanya menampilkan menu dan tidak mengembalikan apa pun.
- **Fungsi operasi bertipe `double`.** `tambah()`, `kurang()`, `kali()`, dan `bagi()` menerima dua bilangan desimal dan mengembalikan hasilnya. `double` adalah tipe bilangan desimal yang lebih teliti dari `float`. Untuk input dengan `scanf()` gunakan `%lf`.
- **Fungsi `pangkat()` memakai perulangan `for`.** Basisnya dikalikan dengan dirinya sendiri sebanyak `eksponen` kali. Variabel `hasil` di dalamnya adalah variabel lokal, terpisah dari `hasil` di `main()`.
- **`main()` lebih singkat.** Operasi cukup dipanggil dengan `hasil = tambah(angka1, angka2);`.
- **Validasi input.** Program menolak pilihan di luar menu, input yang bukan angka, pembagian dengan nol, dan pangkat negatif.

</div>

---

## 9. Rangkuman

- **Fungsi** adalah sekumpulan kode yang diberi nama dan baru dijalankan ketika **dipanggil**. Sekali dibuat, bisa dipakai berkali-kali.
- Bentuk umum: `tipe_kembalian nama_fungsi(parameter) { ... }`.
- Fungsi dipanggil dengan menulis **nama dan tanda kurung**, misalnya `apa_kabar();`.
- **Parameter** adalah variabel penerima data di definisi fungsi. **Argumen** adalah nilai yang dikirim saat memanggil fungsi.
- Fungsi bertipe **`void`** tidak mengembalikan nilai. Fungsi bertipe `int`, `float`, `double`, dan sebagainya mengembalikan nilai dengan **`return`**.
- `return` mengakhiri fungsi dan mengirim nilai kembali ke tempat pemanggilan.
- C membaca program dari atas ke bawah. Jika fungsi ditulis di bawah `main()`, buat **deklarasi (prototype)** di bagian atas.
- **Variabel lokal** hanya dikenal di dalam fungsinya. Data dibagikan antar fungsi lewat parameter dan `return`.
- **Array** bisa dikirim ke fungsi. Kirim juga ukurannya, dan ingat bahwa perubahan isi array di dalam fungsi memengaruhi array aslinya.

---

*Materi ini disusun untuk kebutuhan pembelajaran Pemrograman Dasar Kelas X PPLG.*
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

# Boolean, Operator Perbandingan, dan Operator Logika dalam Bahasa C

> Catatan materi Pemrograman Dasar — Kelas X RPL
> Pertemuan: Boolean, Operator Perbandingan, dan Operator Logika

---

## Daftar Isi

1. [Tipe Data Boolean](#1-tipe-data-boolean)
2. [Operator Perbandingan (Relasional)](#2-operator-perbandingan-relasional)
3. [Operator Logika](#3-operator-logika)
4. [Hubungan Boolean, Perbandingan, dan Logika](#4-hubungan-boolean-perbandingan-dan-logika)
5. [Rangkuman](#5-rangkuman)

---

## 1. Tipe Data Boolean

**Boolean (`bool`)** adalah tipe data yang hanya berisi 2 kemungkinan nilai, yaitu **`true`** dan **`false`**. Boolean adalah fondasi penting dari logika pemrograman, karena digunakan untuk memeriksa apakah suatu ekspresi atau kondisi bernilai benar atau salah.

**Dalam bahasa C, sebenarnya tidak ada tipe data khusus bernama Boolean** seperti di beberapa bahasa lain. Nilai boolean direpresentasikan sebagai bilangan (`integer`):

<div style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Nilai Integer</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Representasi Boolean</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">0</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">false</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;">Selain <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">0</code></td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">true</code></td>
</tr>
</tbody>
</table>
</div>

C menyediakan header standar **`<stdbool.h>`** yang mendefinisikan tipe `bool` beserta nilai `true` dan `false`, agar penulisan kode lebih mudah dibaca meskipun di baliknya tetap berupa angka.

### Contoh Program

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    int a = 1;
    int b = 0;

    bool hasil = a != b;

    printf("Nilai a adalah true: %d\n", a);
    printf("Nilai b adalah false: %d\n", b);
    printf("Hasil operator perbandingan: %d\n", hasil);

    return 0;
}
```

**Output:**

```
Nilai a adalah true: 1
Nilai b adalah false: 0
Hasil operator perbandingan: 1
```

### Contoh Penerapan Boolean

- Menyimpan status login pengguna
- Menandai apakah suatu tugas sudah selesai atau belum
- Menyimpan status ketersediaan stok barang (tersedia/habis)
- Memvalidasi apakah umur pengguna sudah mencukupi syarat atau belum
  
**Contoh program — validasi umur:**

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    int inputUmur;

    printf("Masukkan Umur Anda: ");
    scanf("%d", &inputUmur);

    bool umurValid = inputUmur >= 17;
    printf("Umur Lebih dari 17? %d", umurValid);
    return 0;
}
```

Jika pengguna memasukkan `20`:

**Output:**

```
Masukkan Umur Anda: 20
Umur Lebih dari 17? 1
```

---

## 2. Operator Perbandingan (Relasional)

**Operator Perbandingan/Relasional** adalah simbol yang digunakan untuk membandingkan dua nilai atau dua operand. Hasil dari operator ini selalu berupa nilai **boolean**, yang direpresentasikan sebagai:

- `1` → `true`
- `0` → `false`

<div style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Operator</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Nama</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">==</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Setara dengan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">a == b</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">!=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak setara dengan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">a != b</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&gt;</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lebih besar dari</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">a &gt; b</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&lt;</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lebih kecil dari</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">a &lt; b</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&gt;=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lebih besar sama dengan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">a &gt;= b</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&lt;=</code></td>
<td style="padding:8px 10px; font-size:0.9em;">Lebih kecil sama dengan</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">a &lt;= b</code></td>
</tr>
</tbody>
</table>
</div>

**Contoh perhitungan:**

| Operasi | Hasil |
|---|---|
| `5 == 7` | `0` (false) |
| `-12 == -12` | `1` (true) |

### Contoh Program

```c
#include <stdio.h>

int main() {
    int a = 10, b = -10;
    int hasil = a == b;

    printf("Hasil perbandingan adalah: %d\n", hasil);
    return 0;
}
```

**Output:**

```
Hasil perbandingan adalah: 0
```

### Contoh Penerapan Operator Perbandingan

- Memvalidasi apakah umur pengguna sudah memenuhi syarat, misalnya `umur >= 17`
- Mengecek apakah nilai ujian siswa sudah mencapai standar kelulusan (KKM)
- Mengecek kesesuaian password yang diinput pengguna dengan password yang tersimpan
- Mengecek apakah suatu angka termasuk bilangan positif atau bukan

**Contoh program — mengecek bilangan positif:**

```c
#include <stdio.h>
#include <stdbool.h>

int main () {
    int angka = 20;
    bool positif = angka > 0;

    printf("Positif? %d\n", positif);

    return 0;
}
```

**Output:**

```
Positif? 1
```

---

## 3. Operator Logika

**Operator Logika** adalah simbol yang digunakan untuk melakukan operasi yang menghasilkan nilai boolean (`1`/`true` atau `0`/`false`), dengan cara mengombinasikan atau membalik nilai-nilai boolean lain. **Operator ini sering dipakai berdampingan dengan operator perbandingan**.

| Operator | Nama | Contoh |
|---|---|---|
| `&&` | AND (DAN) | `a && b` |
| `\|\|` | OR (ATAU) | `a \|\| b` |
| `!` | NOT (BUKAN) | `!a` |

<div style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">
<strong>Operator AND (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&amp;&amp;</code>)</strong> — hasil <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">TRUE</code> hanya jika <em>kedua</em> kondisi terpenuhi.
<table style="width:100%; border-collapse:collapse; margin-top:8px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Kondisi A</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Kondisi B</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Hasil</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td></tr>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td></tr>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td></tr>
<tr><td style="padding:8px 10px; font-size:0.9em;">FALSE</td><td style="padding:8px 10px; font-size:0.9em;">FALSE</td><td style="padding:8px 10px; font-size:0.9em;">FALSE</td></tr>
</tbody>
</table>
</div>

<div style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">
<strong>Operator OR (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">||</code>)</strong> — hasil <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">TRUE</code> jika <em>salah satu atau kedua</em> kondisi terpenuhi.
<table style="width:100%; border-collapse:collapse; margin-top:8px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Kondisi A</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Kondisi B</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Hasil</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td></tr>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td></tr>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td></tr>
<tr><td style="padding:8px 10px; font-size:0.9em;">FALSE</td><td style="padding:8px 10px; font-size:0.9em;">FALSE</td><td style="padding:8px 10px; font-size:0.9em;">FALSE</td></tr>
</tbody>
</table>
</div>

<div style="background:#fff8c5; border-left:4px solid #9a6700; padding:14px 18px; border-radius:6px; margin:16px 0;">
<strong>Operator NOT (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">!</code>)</strong> — membalik nilai suatu kondisi.
<table style="width:100%; border-collapse:collapse; margin-top:8px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Kondisi A</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Hasil !A</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">FALSE</td><td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">TRUE</td></tr>
<tr><td style="padding:8px 10px; font-size:0.9em;">TRUE</td><td style="padding:8px 10px; font-size:0.9em;">FALSE</td></tr>
</tbody>
</table>
</div>

### Contoh Program

Program berikut mempraktikkan ketiga operator logika (`&&`, `||`, `!`) sekaligus dalam satu program.

```c
#include <stdio.h>

int main() {
    int a, b;
    int hasilAND, hasilOR, hasilNOT;

    // Melakukan Input Nilai Boolean Pertama
    printf("Masukkan Logika pertama: ");
    scanf("%d", &a);

    // Melakukan Input Nilai Boolean Kedua
    printf("Masukkan Logika kedua: ");
    scanf("%d", &b);

    // Melakukan Proses Operasi AND
    hasilAND = a && b;
    printf("Hasil Operasi AND adalah: %d\n", hasilAND);
  
    // Melakukan Proses Operasi OR
    hasilOR = a || b;
    printf("Hasil Operasi OR adalah: %d\n", hasilOR);

    // Melakukan Proses Operasi NOT
    a = !b;
    printf("Hasil Operasi NOT adalah: %d\n", a);
    return 0;
}
```

Jika pengguna memasukkan `1` (true) untuk logika pertama dan `0` (false) untuk logika kedua:

**Output:**

```
Masukkan Logika pertama: 1
Masukkan Logika kedua: 0
Hasil Operasi AND adalah: 0
Hasil Operasi OR adalah: 1
Hasil Operasi NOT adalah: 1
```

> Nilai `1` dianggap `TRUE` dan `0` dianggap `FALSE`. `AND` menghasilkan `0` karena tidak kedua nilai bernilai `TRUE`; `OR` menghasilkan `1` karena salah satu nilai bernilai `TRUE`; `NOT` membalik nilai `b` (yang `FALSE`) menjadi `TRUE` (`1`).

### Contoh Penerapan Operator Logika

- Seorang siswa dinyatakan lulus jika nilai ujian matematika ≥ 75 **DAN** nilai ujian bahasa ≥ 70.
- Seorang penonton dapat diskon jika usianya di bawah 12 tahun **ATAU** usianya di atas 60 tahun.
- Membeli makanan di kantin menggunakan metode pembayaran digital **ATAU** tunai.
- Menampilkan halaman situs hanya jika sistem **TIDAK** sedang dalam mode perbaikan.

---

## 4. Hubungan Boolean, Perbandingan, dan Logika

Ketiga materi ini saling berkaitan erat:

1. **Boolean** adalah konsep dasarnya — nilai yang hanya bisa `true` atau `false`.
2. **Operator Perbandingan** adalah cara paling umum untuk *menghasilkan* nilai boolean, dengan membandingkan dua nilai (misalnya `umur >= 17`).
3. **Operator Logika** digunakan untuk *mengombinasikan* beberapa nilai boolean (biasanya hasil dari beberapa operator perbandingan sekaligus) menjadi satu kesimpulan akhir.

**Contoh Penerapan Operator Perbandingan dan Logika — Studi Kasus Syarat Bayar TransJakarta:**

Aturan: penumpang dikenakan tarif TransJakarta jika **tinggi badan minimal 100 cm** DAN **umur minimal 5 tahun**.

```c
// Logika untuk bayar TJ
// Minimal Tinggi >= 100
// Minimal Umur >= 5

#include <stdio.h>
#include <stdbool.h>

int main(){
    // Deklarasi Variabel
    int tinggi;
    int umur;

    // Input Tinggi Badan
    printf("Masukkan Tinggi: ");
    scanf("%d", &tinggi);

    // Menggunakan Operator Perbandingan Untuk Cek Tinggi (True atau False)
    bool cekTinggi = tinggi >= 100;
    printf("Cek Tinggi: %d\n", cekTinggi);

    // Input Umur
    printf("Masukkan Umur: ");
    scanf("%d", &umur);

    // Menggunakan Operator Perbandingan untuk Cek Syarat Umur (True atau False)
    bool cekUmur = umur >= 5;
    printf("Cek Umur: %d\n", cekUmur);

    // Cek Syarat Bayar TJ, yaitu tinggi >= 100 DAN umur >= 5
    bool bayarTJ = cekTinggi && cekUmur;
    printf("Apkh bayar TJ? %d\n", bayarTJ);

    return 0;
}
```

Jika pengguna memasukkan tinggi `110` dan umur `6`:

**Output:**

```
Masukkan Tinggi: 110
Cek Tinggi: 1
Masukkan Umur: 6
Cek Umur: 1
Apkh bayar TJ? 1
```

Pada contoh di atas, `tinggi >= 100` dan `umur >= 5` masing-masing adalah operator perbandingan yang menghasilkan nilai **boolean** (`cekTinggi` dan `cekUmur`), lalu keduanya digabungkan dengan operator logika `&&` untuk mendapatkan kesimpulan akhir apakah penumpang tersebut dikenakan tarif. Jika salah satu saja tidak terpenuhi (misalnya tinggi kurang dari 100 cm), maka `bayarTJ` akan bernilai `0` (false).

> Konsep gabungan seperti ini akan sangat berguna nanti saat mempelajari **percabangan** (`if`/`else`), karena kondisi pada percabangan hampir selalu berupa gabungan operator perbandingan dan logika seperti contoh di atas.

---

## 5. Rangkuman

- **Boolean** adalah tipe data dengan 2 nilai: `true` dan `false`. Di bahasa C, direpresentasikan sebagai integer (`0` = false, selain `0` = true), dan bisa ditulis lebih rapi dengan bantuan header `<stdbool.h>`.
- **Operator Perbandingan** (`== != > < >= <=`) membandingkan dua nilai dan selalu menghasilkan nilai boolean.
- **Operator Logika** (`&& || !`) mengombinasikan atau membalik nilai-nilai boolean — `&&` (AND) butuh semua kondisi benar, `||` (OR) cukup salah satu kondisi benar, `!` (NOT) membalik nilai kondisi.
- Ketiganya saling berkaitan: operator perbandingan menghasilkan boolean, dan operator logika menggabungkan boolean-boolean tersebut menjadi satu kesimpulan — konsep ini menjadi dasar penting sebelum mempelajari percabangan (`if`/`else`).

---

*Materi ini disusun untuk kebutuhan pembelajaran Pemrograman Dasar Kelas X RPL.*

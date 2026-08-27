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


# Operator dalam Python

> Catatan materi Koding dan Kecerdasan Artifisial
> Pertemuan: Operator (Aritmatika, Penugasan, Perbandingan)

---

## Daftar Isi

1. [Mengenal Operator dan Operand](#1-mengenal-operator-dan-operand)
2. [Operator Aritmatika](#2-operator-aritmatika)
3. [Operator Penugasan](#3-operator-penugasan)
4. [Operator Perbandingan](#4-operator-perbandingan)
5. [Python vs C: Apa yang Berbeda?](#5-python-vs-c-apa-yang-berbeda)
6. [Rangkuman](#6-rangkuman)

---

## 1. Mengenal Operator dan Operand

**Operator** digunakan untuk melakukan operasi terhadap nilai, variabel, konstanta, atau ekspresi.

Sebagai contoh:

```python
print(10 + 5)
```

Pada kode di atas:
- `+` disebut **operator**
- `10` dan `5` disebut **operand** (nilai yang dioperasikan)

Python memiliki beberapa kelompok operator. Pertemuan ini akan membahas tiga kelompok yang paling sering dipakai: **Aritmatika**, **Penugasan**, dan **Perbandingan**.

---

## 2. Operator Aritmatika

Operator aritmatika digunakan pada nilai numerik untuk melakukan operasi matematika dasar.

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
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penjumlahan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x + y</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">-</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Pengurangan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x - y</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">*</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Perkalian</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x * y</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">/</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Pembagian</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x / y</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">%</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Modulus (sisa bagi)</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x % y</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">**</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Eksponen/Pangkat</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x ** y</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">//</code></td>
<td style="padding:8px 10px; font-size:0.9em;">Pembagian Bulat ke Bawah</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x // y</code></td>
</tr>
</tbody>
</table>
</div>

### Contoh Program

```python
x = 10
y = 3

print(x + y)    # Penjumlahan
print(x - y)    # Pengurangan
print(x * y)    # Perkalian
print(x / y)    # Pembagian
print(x % y)    # Modulus
print(x ** y)   # Eksponen/Pangkat
print(x // y)   # Pembagian Bulat ke Bawah
```

**Output:**

```
13
7
30
3.3333333333333335
1
1000
3
```

### Perbedaan Operator Pembagian

Python punya dua operator pembagian yang hasilnya berbeda:

- **`/`** — pembagian biasa, hasilnya selalu bertipe **`float`** (`10 / 3` menghasilkan `3.3333333333333335`)
- **`//`** — pembagian bulat ke bawah, hasilnya bertipe **`int`** (`10 // 3` menghasilkan `3`, bagian desimalnya dibuang)

### Catatan: Tidak Ada Increment dan Decrement

<div style="background:#ddf4ff; border-left:4px solid #218bff; padding:14px 18px; border-radius:6px; margin:16px 0;">
Berbeda dengan beberapa bahasa lain, Python <strong>tidak memiliki</strong> operator increment (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">++</code>) maupun decrement (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">--</code>). Untuk menambah atau mengurangi nilai sebanyak 1, gunakan operator penugasan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+= 1</code> atau <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">-= 1</code> (dibahas di bagian berikutnya).
<pre style="background:#0d1117; color:#c9d1d9; padding:12px 14px; border-radius:6px; overflow-x:auto; margin-top:10px;"><code>x = 5
x += 1   # sama seperti x = x + 1
print(x)</code></pre>
</div>

**Output:**

```
6
```

---

## 3. Operator Penugasan

Operator penugasan digunakan untuk memasukkan, memberikan, atau memperbarui suatu nilai ke dalam variabel.

<div style="background:#f2ebff; border-left:4px solid #8250df; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Operator</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Nama</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Contoh</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Sama dengan</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Pengisian Nilai</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = 5</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = 5</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penugasan Pertambahan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x += 5</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x + 5</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">-=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penugasan Pengurangan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x -= 5</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x - 5</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">*=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penugasan Perkalian</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x *= 5</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x * 5</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">/=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penugasan Pembagian</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x /= 3</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x / 3</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">%=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penugasan Modulus</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x %= 3</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x % 3</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">//=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Penugasan Pembagian ke Bawah</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x //= 3</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x // 3</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">**=</code></td>
<td style="padding:8px 10px; font-size:0.9em;">Penugasan Eksponen/Pangkat</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x **= 3</code></td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">x = x ** 3</code></td>
</tr>
</tbody>
</table>
</div>

### Contoh Program

```python
x = 5
print(x)      # nilai awal

x += 3
print(x)      # bertambah 3

x -= 2
print(x)      # berkurang 2

x *= 4
print(x)      # dikali 4

x /= 3
print(x)      # dibagi 3

x %= 5
print(x)      # sisa bagi 5

x **= 2
print(x)      # dipangkatkan 2

x //= 2
print(x)      # dibagi bulat ke bawah 2
```

**Output:**

```
5
8
6
24
8.0
3.0
9.0
4.0
```

> Perhatikan hasilnya berubah menjadi `float` (ada `.0`) setelah baris `x /= 3` — ini karena operator `/` selalu menghasilkan `float`, dan nilai tersebut terus terbawa di baris-baris berikutnya meskipun memakai operator lain seperti `%=` atau `**=`.

---

## 4. Operator Perbandingan

Operator aritmatika menghasilkan nilai baru berupa hasil perhitungan angka. Namun, dalam pemrograman kita juga sering ingin mengetahui apakah suatu kondisi itu **benar atau salah**, misalnya:

- Apakah seseorang sudah berusia lebih dari 17 tahun?
- Apakah nama pengguna dan password sudah sesuai?
- Apakah stok barang tersedia?
- Apakah saldo cukup untuk membayar?

**Operator perbandingan** adalah operator yang digunakan untuk membandingkan dua nilai. Berbeda dengan operator aritmatika dan penugasan, operator perbandingan **selalu menghasilkan nilai boolean** (`True` atau `False`).

<div style="background:#dafbe1; border-left:4px solid #1a7f37; padding:14px 18px; border-radius:6px; margin:16px 0;">
<table style="width:100%; border-collapse:collapse; margin-top:4px;">
<thead>
<tr>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Operator</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Nama</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Contoh</th>
<th style="text-align:left; padding:8px 10px; border-bottom:2px solid rgba(0,0,0,0.15); font-size:0.9em;">Hasil</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">==</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Setara dengan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">7 == 7</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">True</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">!=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak setara dengan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">7 != 7</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">False</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&gt;</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lebih besar</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">6 &gt; 7</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">False</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&lt;</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lebih kecil</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">6 &lt; 7</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">True</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&gt;=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lebih besar atau sama dengan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">27 &gt;= 25.5</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">True</code></td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&lt;=</code></td>
<td style="padding:8px 10px; font-size:0.9em;">Lebih kecil atau sama dengan</td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">27 &lt;= 13.5</code></td>
<td style="padding:8px 10px; font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">False</code></td>
</tr>
</tbody>
</table>
</div>

### Contoh Program

```python
umur = 20

print(umur == 20)   # setara dengan
print(umur != 20)   # tidak setara dengan
print(umur > 18)    # lebih besar
print(umur < 18)    # lebih kecil
print(umur >= 20)   # lebih besar atau sama dengan
print(umur <= 19)   # lebih kecil atau sama dengan
```

**Output:**

```
True
False
True
False
True
False
```

### Catatan: Perbandingan Tipe Data Berbeda

Membandingkan nilai dengan tipe data yang berbeda menggunakan `==` akan selalu menghasilkan `False`, meskipun nilainya terlihat "sama" secara tampilan.

```python
print(30 == 30)     # True, sama-sama int
print(30 == '30')   # False, int dibandingkan dengan str
```

**Output:**

```
True
False
```

> Ini menyambung ke materi casting yang sudah dibahas — kalau ingin nilai `input()` (yang selalu bertipe `str`) dibandingkan dengan angka, nilainya harus di-*casting* dulu ke `int` atau `float`.

---

## 5. Python vs C: Apa yang Berbeda?

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
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Operator pembagian</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">/</code> antar <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int</code> otomatis dibulatkan ke bawah (hasil <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int</code>)</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">/</code> selalu hasil <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">float</code>; pakai <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">//</code> untuk hasil <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int</code> dibulatkan ke bawah</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Operator pangkat</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak ada operator bawaan, pakai fungsi <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">pow()</code> dari <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">&lt;math.h&gt;</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Ada operator bawaan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">**</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Increment/Decrement</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Ada <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">++</code> dan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">--</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Tidak ada, gunakan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">+= 1</code> atau <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">-= 1</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Operator penugasan khusus</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Hanya sampai <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">%=</code> (tidak ada <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">**=</code> maupun <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">//=</code>)</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Lengkap sampai <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">**=</code> dan <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">//=</code></td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Simbol operator perbandingan</td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;"><code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">== != &gt; &lt; &gt;= &lt;=</code></td>
<td style="padding:8px 10px; border-bottom:1px solid rgba(0,0,0,0.1); font-size:0.9em;">Sama persis dengan C</td>
</tr>
<tr>
<td style="padding:8px 10px; font-size:0.9em;">Hasil operator perbandingan</td>
<td style="padding:8px 10px; font-size:0.9em;">Berupa <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">int</code> (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">1</code>/<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">0</code>), karena C tidak punya tipe <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">bool</code> bawaan sebelum C99</td>
<td style="padding:8px 10px; font-size:0.9em;">Berupa tipe <code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">bool</code> asli (<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">True</code>/<code style="background:rgba(0,0,0,0.06); padding:1px 5px; border-radius:4px;">False</code>)</td>
</tr>
</tbody>
</table>
</div>

> **Poin penting:** meskipun sebagian besar simbol operator terlihat identik antara C dan Python, Python punya beberapa operator tambahan yang tidak ada di C (`**`, `//`, `**=`, `//=`), sekaligus menghilangkan operator yang ada di C (`++`, `--`). Selalu perhatikan tipe hasil dari sebuah operasi — terutama pembagian — karena bisa berperilaku berbeda di antara kedua bahasa.

---

## 6. Rangkuman

- **Operator** dipakai untuk mengoperasikan **operand** (nilai, variabel, konstanta, atau ekspresi).
- **Operator aritmatika** (`+ - * / % ** //`) dipakai untuk perhitungan matematika. Perhatikan perbedaan `/` (hasil `float`) dan `//` (hasil `int`, dibulatkan ke bawah).
- Python **tidak punya** operator increment/decrement (`++`/`--`) — gunakan `+= 1` atau `-= 1` sebagai gantinya.
- **Operator penugasan** (`= += -= *= /= %= //= **=`) adalah cara singkat untuk memperbarui nilai variabel berdasarkan nilai sebelumnya.
- **Operator perbandingan** (`== != > < >= <=`) selalu menghasilkan nilai **boolean** (`True`/`False`), dan membandingkan tipe data yang berbeda dengan `==` akan selalu bernilai `False`.
- Python punya operator bawaan yang tidak dimiliki C (`**`, `//`), sementara C punya operator yang tidak dimiliki Python (`++`, `--`) — perbedaan ini penting diingat saat berpindah antara kedua bahasa.

---

*Materi ini disusun untuk kebutuhan pembelajaran Koding dan Kecerdasan Artifisial.*

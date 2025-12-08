# Materi 1 - Variabel, Const, & Template Literals

Panduan singkat untuk materi dasar JavaScript mengenai deklarasi variabel dan penggunaan template literals.

- **Tujuan**: Memahami cara deklarasi variabel (`var`, `let`, `const`), mengenal tipe data, serta menerapkan template literals untuk merangkai string dan HTML.
- **Struktur**:
  - `index.html`: Halaman demo yang merender biodata menggunakan template literal.
  - `script.js`: Contoh-contoh kode dasar dan penjelasan singkat lewat komentar.
  - `.env`: Menyediakan placeholder `BASE_URL` dan `APP_TITLE` jika ingin memisahkan konfigurasi dari kode.

## Menjalankan Demo
- Buka `materi/1-variabel-const-&-template-literals/index.html` langsung di browser (cukup klik dua kali atau seret ke tab baru).
- Lihat konsol browser (DevTools) untuk output contoh variabel di `script.js`.

## Poin Materi
- **Deklarasi variabel**: `var`, `let`, `const` dengan contoh perubahan nilai dan behavior konstanta.
- **Tipe data**: Perbedaan tipe primitif dan reference (objek/array/fungsi) serta mutasi objek.
- **Template literals**: Sintaks `` `${variabel}` `` untuk interpolasi string dan membangun markup HTML.

## Opsional: Konfigurasi .env
Jika ingin menjadikan konfigurasi dinamis, isi file `.env`:

```
BASE_URL=<alamat-api-atau-host>
APP_TITLE=Materi 1 - Variabel & Template Literal
```

Kemudian baca nilai ini di kode (mis. melalui bundler atau dotenv) untuk mengganti teks statis di `index.html` atau `script.js`.

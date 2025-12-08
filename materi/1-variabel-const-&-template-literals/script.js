/**
 * Declaration Variabel Const :
 * Const -> Constanta (Konstanta) : Tidak berubah
 */

/**
 * Aturan Dasar Variabel :
 * declaration_type variabel_name = value;
 *
 * declaration_type :
 * 1. var
 * 2. let
 * 3. const
 */

let umur;
console.log(umur);
umur = 20;
console.log(umur);

const nama = "Ucup";
console.log(nama);
// nama = "Renday";
// console.log(nama);

/**
 * Real Case :
 * const BASE_URL = "..."
 * const App = () => {}
 * ...
 */

/**
 * Tipe Data :
 * 1. Primitive :
 * -. number
 * -. string
 * -. boolean
 * -. undefined
 * -. null
 * -. ...
 *
 * 2. Reference (Object) :
 * -. Array
 * -. Object
 * -. function
 * -. class
 * -. ...
 */

const dataUser = {
  nama: "Renday",
};
console.log(dataUser);

dataUser.nama = "Ucup";
console.log(dataUser);

/**
 * Template Literals : Cara memanggil variabel di dalam string
 */

let kata1 = "Halo";
let kata2 = "Saya";
let kata3 = "Ucup";

// -. Concatnation (+)
console.log(kata1 + " " + kata2 + " " + kata3);
// -. Operator (,)
console.log(kata1, kata2, kata3);
// -. Template Literals (`${}`)
console.log(`${kata1} ${kata2} ${kata3}`);

// Contoh Real Case :
const htmlCode = `<h1> Nama : ${nama} </h1>`;
console.log(htmlCode);

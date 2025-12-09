/**
 * Arrow Function -> Fungsi Panah (() => {})
 */

// 1. Function Declaration
function sayHi() {
  console.log("hiiii....");
}
sayHi();

// 2. Function Expression : variabel + function declaration/anonymous
const sayHello = function sayHello2() {
  console.log("Hellooo.....");
};
sayHello();

const sayOla = function () {
  console.log("Olaaa....");
};
sayOla();

// 3. Arrow Function
const sayArigatou = () => {
  console.log("Arigatou....");
};
sayArigatou();

const sayPriviet = () => console.log("Privieet... Uraaa....");
sayPriviet();

/**
 * Keyword return : Untuk mengembalikan nilai ke pada fungsi
 */

const tambah = (a, b, c, d, e, f, apaAjaLah) => {
  return a + b;
};
const tambah2 = (a, b) => a + b;

const hasil1 = tambah(2, 5);
console.log(hasil1);

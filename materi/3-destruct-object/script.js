/**
 * Destructure Object -> Membongkar Object
 */

// Packing -> Structured Object
// Unpacking -> Destructured Object

// Packing/Structured Object
let objUser = {
  id: 1,
  nama: "Ucup",
};

console.log(objUser.id);
console.log(objUser.nama);

// Unpacking/Destructured Object
const { id: idBebas, nama: namaBebas, belumAda = "Belum ada" } = objUser;
console.log(idBebas);
console.log(namaBebas);
console.log(belumAda);

// Packing Array
let arrData = ["Makanan", "Minuman", "Baju"];

// Unpacking Array
const [lusi, aji, dicky] = arrData;
console.log(lusi);
console.log(aji);
console.log(dicky);

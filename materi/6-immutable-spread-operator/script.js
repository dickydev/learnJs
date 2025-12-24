/**
 * Immutable : Tidak bisa diubah (constant)
 */

const userList = ["Aji", "Renday", "Ucup"];

// Contoh yang salah
// console.log("Data Lama : ", userList);
userList.push("Lusi");
// console.log("Data Baru : ", userList);

// Contoh yang benar
const userListBaru = ["Lusi", ...userList];
// console.log("Data Baru : ", userListBaru);

const user = {
  nama: "Aji",
  role: "Staff",
  alamat: "Jl Baru",
};

console.log(user);
const updateUser = { ...user, alamat: "Jl Untung", role: "Manager" };
console.log(updateUser);

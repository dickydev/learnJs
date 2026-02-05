let objUser = {
  nama: "Renday",
  role: "Staff",
  alamat: "Jl Baru",
};

objUser.email = "renday@gmail.com";

console.log(objUser);

let key = "nickname";
let value = "Renday123";
let objUser2 = {
  [key]: value, // nickname: Renday123
};

console.log(objUser2);

// CONTOH PROJECT REAL CASE :

let formData = {
  title: "",
  date: "",
};

function updateData(name, value) {
  formData = {
    ...formData,
    [name]: value,
  };
}

updateData("title", "Belajar JavaScript");
updateData("date", "2026-01-01");
updateData("author", "Renday");
updateData("status", "Selesai");
updateData("title", "Belajar React");

console.log(formData);

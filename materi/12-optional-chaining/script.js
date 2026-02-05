// 1. Optional Chaining (?.)

// Object
let user = {};

console.log(user?.nama);
console.log(user?.address?.city);

// 2. Nullish Coalescing (??)
const lokasi = user?.address?.city ?? "Belum ditentukan";
console.log(lokasi);

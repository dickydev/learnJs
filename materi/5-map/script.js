/**
 * Map : Method array untuk looping
 */

let dataDummy = ["Dicky", "Aji", "Lusi", "Ucup", "Renday", "Henry"];
for (let i = 0; i < dataDummy.length; i++) {
  console.log(dataDummy[i]);
}

console.log("========");

const listUser = dataDummy.map((data) => {
  return data;
});
console.log(listUser);

console.log("========");

const listUserForEach = dataDummy.forEach((data) => {
  return data;
});

console.log(listUserForEach);

function sayHi() {
  console.log("HALO");
  return undefined;
}
const sayHiDariFungsi = sayHi();
console.log(sayHiDariFungsi);

function sayHello() {
  return "Hello";
}
const sayHelloDariFungsi = sayHello();
console.log(sayHelloDariFungsi);

const sayOla = () => {
  return "Olaa";
};
const sayOlaDariFungsi = sayOla();
console.log(sayOlaDariFungsi);

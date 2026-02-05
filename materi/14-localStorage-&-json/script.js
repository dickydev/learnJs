const dataUser = {
  nama: "ucup",
};

console.log(dataUser); // {nama: 'ucup'}nama: "ucup"[[Prototype]]: Object
localStorage.setItem("data_user", JSON.stringify(dataUser));

localStorage.getItem("data_user"); // '{"nama":"ucup"}'
alert(localStorage.getItem("data_user"));

const dataTeks = localStorage.getItem("data_user");
console.log(dataTeks); // '{"nama":"ucup"}'

const dataAsli = JSON.parse(dataTeks);
console.log(dataAsli); // {nama: 'ucup'}nama: "ucup"[[Prototype]]: Object

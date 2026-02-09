const tanggal = new Date("2026-02-08");
console.log(tanggal);
const opsi = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(tanggal.toLocaleDateString("id-ID", opsi));

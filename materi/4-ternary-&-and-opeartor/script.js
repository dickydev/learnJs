/**
 * Ternary Operator
 *
 * Pattern :
 * <condition> ? "true expression" : "false expression"
 */

let trafficLight = "hijau";
let banMeledak = true;

trafficLight === "merah"
  ? console.log("Stoppp donggss..")
  : banMeledak === true
  ? console.log("Stoppp donggss..")
  : console.log("Jalann donggss..");

if (trafficLight === "merah") {
  console.log("Stoppp donggss..");
} else {
  console.log("Jalann dongsss");
}

// Nested (bercabang) -> If Statement

/**
 * AND Operator For Conditional:
 *
 * truthy && truthy -> yang muncul adalah Truthy Paling kanan
 */

let sudahMakan = true;
let umur = 0;

console.log(umur && sudahMakan);

let isLogin = true;
// isLogin && <Profile />;

console.log(1 && true);
console.log(true && 1);

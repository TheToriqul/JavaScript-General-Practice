// ----------------------------  Just conditions ------------------------------------
// console.log(5 > 10)
// console.log(5 < 10)

// const onionPrice = 120;
// const eggPrice = 10;

// ------------------------if else conditions------------------------

// if (onionPrice > eggPrice){
//   console.log("Onion is more expensive than egg.");
// }
// else {
//   console.log("Egg is more expensive than onion.");
// }

// ----------------------------------------------------------------
// const age = 12;
// if (age >= 10) {
//   console.log("You are allowed to enter the park.");
// } else {
//   console.log("You are not allowed to enter the park.");
// }

// ----------------------------------------------------------------

// const age = 25;

// if (age >= 18) {
//   console.log("You are allowed to go to the Ride.");
// } else if (age >= 13) {
//   console.log("You are allowed to got few Rides only.");
// } else {
//   console.log("You are not allowed to go to the Ride.");
// }

// -----------------------------Multiple conditions-----------------------------------

let age = 20;
let withAdult = false;

if (age >= 12 || withAdult) {
  console.log("You are allowed to enter the park");
  if (age >= 20 && withAdult) {
    console.log("You can go tho the haunted house at the park");
  } else {
    console.log("You cannot go tho the haunted house at the park");
  }
} else {
  console.log("You are not allowed to enter the park");
}

// ----------------------------------------------------------------


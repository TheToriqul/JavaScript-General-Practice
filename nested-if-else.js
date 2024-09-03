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
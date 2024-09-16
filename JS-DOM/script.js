const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener("click", function (){
  document.body.style.backgroundColor = 'green';
});

function makeRed(){
  document.body.style.backgroundColor = 'red';
}
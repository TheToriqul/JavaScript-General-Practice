const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Option : 1
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener("click", function (){
  document.body.style.backgroundColor = 'green';
});

// Option : 2

function makeRed(){
  document.body.style.backgroundColor = 'red';
}

// Option : 3
const userEmail = document.getElementById('user-email');
userEmail.addEventListener("keyup", function(event){
  console.log(event.target.value);
})

// Option : 4

function toggleColor(){
  const body = document.body;
  const currentColor = body.style.backgroundColor;

  if (currentColor === 'red') {
    body.style.backgroundColor = 'green';
  } else {
    body.style.backgroundColor = 'red';
  }
}

// Option : 5

const form = document.getElementById('myForm');
form.addEventListener("submit", function(event){
  event.preventDefault();
  const name = document.getElementById('name').value;
  console.log(`Hello, ${name}!`);
})

// Option : 6

const input = document.getElementById('myInput');
input.addEventListener("input", function(event){
  console.log(event.target.value);
})
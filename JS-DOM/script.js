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

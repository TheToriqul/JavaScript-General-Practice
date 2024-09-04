/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// Your score and your friend's score
let yourScore = 85;
let friendScore = 75;

console.log(`Your score: ${yourScore}`);
console.log(`Friend's score: ${friendScore}`);

if (yourScore > 80) {
    console.log("You scored more than 80. Checking friend's score...");
    
    if (friendScore > 80) {
        console.log("We're going for lunch!");
    } else if (friendScore >= 60 && friendScore <= 80) {
        console.log("Good luck next time!");
    } else if (friendScore >= 40 && friendScore < 60) {
        console.log("Keeping their message unseen.");
    } else {
        console.log("Blocking my friend.");
    }
} else {
    console.log("Going home, sleeping, and acting sad.");
}

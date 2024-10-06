/*
Gamelet: a starting point for writing games
Author: Abdulsalam Umoru
Version: 1.0

Instructions:
Include gamelet.js in an HTML document containing
an element with an id of 'ball'.
The script will detect when the left or right arrow
key is pressed and will move the ball element
accordingly. */

const ball = document.getElementById("ball"); // get the ball
document.addEventListener("keydown", handlekeypress); // listen for keys
let position = 0; // set initial position

/* handlekeypress
respomds to certain keypress by updating position
*/
function handlekeypress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // reposition the ball
}
function refresh() {
  ball.style.left = position + "px";
}

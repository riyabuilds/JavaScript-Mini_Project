const num = document.querySelector("#number");
const result = document.getElementById("results");
// const turn = document.getElementById("turn");
const turns = document.getElementById("turn");
const previous = document.getElementById("previous");
const submit = document.getElementById("submit");
const random = Math.floor(Math.random() * 100 + 1);

let prvgues = []; // array store value
let turn = 10;

console.log(submit);

submit.addEventListener("click", function (e) {
  const nums = parseInt(num.value);

  // check condtition
  if (nums > random) {
    result.innerText = `${nums}, is too high.`;
  } else if (nums < random) {
    result.innerText = `${nums}, is too low .`;
  } else {
    result.innerText = "Your number is successfully guessed " + nums;
  }
  // reduce the turn
  --turn;
  turns.textContent = "You have " + turn + " guess remaining";

  // add element in array
  prvgues.push(nums);
  previous.innerText = "Previous guess " + prvgues.join(", ");

  // clear the input feild
  num.value = "";
  num.focus();

  // turn become 0 game over
  if (turn == 0) {
    turns.textContent = "Game Over !";
  }
});

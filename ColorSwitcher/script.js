const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(e.target.id);

    body.style.backgroundColor = e.target.id;
  });
});

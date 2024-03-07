// const btn1 = document.querySelectorAll("button")[0]; // []
// const btn2 = document.querySelectorAll("button")[1]; // []
// const btn1 = document.querySelector("#btn1"); // {}
// const btn2 = document.querySelector("#btn2");
const btn = document.querySelector("#btn");
const lamp = document.querySelector("#img");

// console.log(lamp.src);
// function clickFn() {
//   console.log("clicked");
// }

// btn1.addEventListener("click", clickFn);

// btn1.addEventListener("click", function () {
//   lamp.src =
//     "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
// });

// btn2.addEventListener("click", function () {
//   lamp.src =
//     "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
// });

// let isOn = false;
let isOn = "off";

btn.addEventListener("click", function () {
  //   if (!isOn) {
  if (isOn === "off") {
    // Absolute path: https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png
    // Relative path: ./images/on.png
    // lamp.src =
    //   "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
    lamp.src = "./images/on.png";
    // isOn = true;
    isOn = "on";
    btn.innerHTML = "OFF";
    btn.className = "off";
    // btn.classList.add("off");
    // btn.style.backgroundColor = "red";
    // btn.innerHTML = "<strong>Changed</strong>";
    // btn.innerText = "<strong>Changed</strong>";
  } else {
    // lamp.src =
    //   "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
    lamp.src = "./images/off.png";
    // isOn = false;
    isOn = "off";
    btn.innerHTML = "ON";
    btn.className = "on";
    // btn.classList.add("on");
    // btn.style.backgroundColor = "green";
  }
  //   lamp.src =
  //     "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png";
});

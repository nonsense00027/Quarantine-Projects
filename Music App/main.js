function createBubble(index) {
  const bubble = document.createElement("div");
  if (darkMode) {
    bubble.classList.add("dark");
  }
  const visual = document.querySelector(".animation");
  visual.appendChild(bubble);
  bubble.style.animation = "bubble 1.5s ease";
  bubble.style.background = `${colors[index]}`;
  bubble.addEventListener("animationend", function () {
    visual.removeChild(this);
  });
}

function changeTitleColor(index) {
  const title = document.querySelector(".title");
  title.style.color = `${colors[index]}`;
}

let darkMode = false;
const sounds = document.querySelectorAll("audio");
const pads = document.querySelectorAll(".pads div");
const colorSwitch = document.querySelector(".switch");
colorSwitch.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark");

  darkMode = !darkMode;
  if (darkMode) {
    colorSwitch.innerText = "Light Mode";
  } else {
    colorSwitch.innerText = "Dark Mode";
  }
  this.classList.toggle("dark");
});
const colors = [
  "#60d394",
  "#d36060",
  "#c060d3",
  "#d3d160",
  "#6860d3",
  "#60b2d3",
];
pads.forEach((pad, index) => {
  pad.addEventListener("click", function () {
    // stopSounds(sounds);
    changeTitleColor(index);
    sounds[index].currentTime = 0;
    sounds[index].play();
    createBubble(index);
  });
});

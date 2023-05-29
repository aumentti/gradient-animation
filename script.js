const textEl = document.getElementById("text");
const boxEl = document.getElementById("box");

let deg = 0;

const linearGradient = (angle = 0) =>
  `linear-gradient(${angle}deg,  #FC466B 0%, #3F5EFB 100%)`;

setInterval(() => {
  textEl.style.background = linearGradient(deg);
  boxEl.style.background = linearGradient(deg);
  deg = deg >= 360 ? 0 : deg + 1;
}, 15);

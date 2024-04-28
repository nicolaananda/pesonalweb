// Function di Email keluar Mbeledos
const inputEmail = document.getElementById("email");
const subsBtn = document.getElementById("subsBtn");
const confetti = require("canvas-confetti");

subsBtn.addEventListener("click", () => {
  //   const email = inputEmail.value;
  const myCanvas = document.createElement("canvas");
  myCanvas.style.width = "100vm";
  myCanvas.style.height = "100vh";
  myCanvas.style.position = "fixed";
  myCanvas.style.zIndex = "9999";
  myCanvas.style.inset = "0";
  document.body.append(myCanvas);
  const myConfetti = confetti.create(myCanvas, { resize: true });
  myConfetti({
location.reload();
    spread: 360,
    particleCount: 500,
  });
});

// Bagian Typed.js
const Typed = require("typed.js");
const element = new Typed("#typedTest", {
  strings: ["Hello!", "I am Nicola, from Kediri.", "I am a Web Developer."],
  typedSpeed: 10,
  loop: true,
});

// Blur Effect di kontainer
// ambil data html dari index.html
const allNav = document.getElementById("nav-all");
const aboutNav = document.getElementById("nav-about");
const projectNav = document.getElementById("nav-project");
const mediaNav = document.getElementById("nav-media");

function resetNav() {
    allNav.className = 'px-5 py-2'
    aboutNav.className = 'px-5 py-2'
    projectNav.className = 'px-5 py-2'
    mediaNav.className = 'px-5 py-2'
}
allNav.addEventListener('click', function() {
  resetNavStyles();
});
// Add an event listener to the About button
aboutNav.addEventListener('click', function() {
  resetNavStyles();
  // Add the active styles to the About button
  this.className = 'blur bg-white shadow-md shadow-neutral-200 px-5 py-2 rounded-full';
});
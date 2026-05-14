let currentInput = "";
const correctCode = "0517"; // Change to your 4-digit code

function press(num) {
  if (currentInput.length < 4) {
    currentInput += num;
    updateDots();
  }
  if (currentInput.length === 4) {
    setTimeout(checkCode, 300);
  }
}

function clearCode() {
  currentInput = "";
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dots span");
  dots.forEach((dot, index) => {
    index < currentInput.length ? dot.classList.add("filled") : dot.classList.remove("filled");
  });
}

function checkCode() {
  if (currentInput === correctCode) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startMusic();
  } else {
    alert("Incorrect Code 🍂");
    clearCode();
  }
}

function startMusic() {
  const container = document.getElementById("musicContainer");
  // Music starts only after successful unlock
  container.innerHTML = `
    <iframe width="0" height="0" 
    src="https://www.youtube.com/embed/4lqYdS-Ell8?start=160&autoplay=1" 
    frameborder="0" allow="autoplay"></iframe>`;
}

function openLetter() {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("navMenu").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("envelope").classList.remove("hidden");
  document.getElementById("navMenu").classList.remove("hidden");
}

function showSection(id) {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("navMenu").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function hideSections() {
  document.getElementById("memories").classList.add("hidden");
  document.getElementById("gift").classList.add("hidden");
  document.getElementById("envelope").classList.remove("hidden");
  document.getElementById("navMenu").classList.remove("hidden");
}

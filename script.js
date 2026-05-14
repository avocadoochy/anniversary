function checkCode() {
  const code = document.getElementById("codeInput").value;

  if (code === "05172024") {
    show("lockScreen", "openScreen");
  } else {
    alert("Wrong code 💔");
  }
}

function openYes() {
  show("openScreen", "mainContent");
}

function openNo() {
  document.getElementById("noPopup").classList.remove("hidden");
}

function closeNo() {
  document.getElementById("noPopup").classList.add("hidden");
}

function openLetter() {
  document.getElementById("letter").classList.toggle("hidden");
}

function showSecret() {
  document.getElementById("secretPage").classList.remove("hidden");
}

function show(hide, show) {
  document.getElementById(hide).classList.add("hidden");
  document.getElementById(show).classList.remove("hidden");
}

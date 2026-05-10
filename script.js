// 🖤 INTRO BUTTONS

function openYes() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("passwordScreen").classList.remove("hidden");
}

function openNo() {
  document.getElementById("noPopup").classList.remove("hidden");
}

function closeNo() {
  document.getElementById("noPopup").classList.add("hidden");
}

// 🔒 PASSWORD CHECK
function checkPassword() {
  let pass = document.getElementById("password").value;

  if (pass === "051724") {
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    startCounter();
  } else {
    document.getElementById("error").innerText = "Wrong password 🥺 Try again";
  }
}

// 📌 TABS SYSTEM
function showTab(tab) {
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.add("hidden"));

  document.getElementById(tab).classList.remove("hidden");
}

// ⏳ DAYS TOGETHER COUNTER
function startCounter() {
  const startDate = new Date("2024-05-17");

  setInterval(() => {
    let now = new Date();
    let diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById("counter").innerText =
      "Together for " + diff + " days 🖤";
  }, 1000);
                                               }

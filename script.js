let currentInput = "";
const correctCode = "0517"; // Anniversary code

// Quiz Configuration
const questions = [
    { q: "When was our exact anniversary?", a: ["05/17/2023", "07/01/2024", "05/17/24", "2024/05/17"], correct: 3 },
    { q: "Who said 'I love you' first?", a: ["Me", "You", "Both at same time"], correct: 1 },
    { q: "What's my favorite nickname for you?", a: ["Laloveee", "Palangga", "Babyy", "All of them"], correct: 3 },
    { q: "How many months since we met?", a: ["12", "24", "18", "30"], correct: 1 },
    { q: "Do you know how much I love you?", a: ["A little", "A lot", "To infinity", "Maybe?"], correct: 2 }
];

let currentQuestionIndex = 0;

function press(num) {
    if (currentInput.length < 4) {
        currentInput += num;
        updateDots();
    }
    if (currentInput.length === 4) setTimeout(checkCode, 300);
}

function updateDots() {
    const dots = document.querySelectorAll(".dots span");
    dots.forEach((dot, index) => index < currentInput.length ? dot.classList.add("filled") : dot.classList.remove("filled"));
}

function checkCode() {
    if (currentInput === correctCode) {
        document.getElementById("lockScreen").classList.add("hidden");
        startQuiz();
        startMusic();
    } else {
        alert("Wrong code 🍂");
        currentInput = "";
        updateDots();
    }
}

function startMusic() {
    const container = document.getElementById("musicContainer");
    // Updated with your new YouTube link
    container.innerHTML = `<iframe width="0" height="0" src="https://www.youtube.com/embed/n5c0NwB7Lp8?autoplay=1" allow="autoplay"></iframe>`;
}

function startQuiz() {
    document.getElementById("quizContainer").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("quizTitle").innerText = `Question ${currentQuestionIndex + 1}/5`;
    document.getElementById("questionText").innerText = q.q;
    
    const optionsGrid = document.getElementById("quizOptions");
    optionsGrid.innerHTML = "";
    
    q.a.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.innerText = option;
        btn.onclick = () => handleAnswer(index);
        optionsGrid.appendChild(btn);
    });
}

function handleAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    } else {
        alert("Try again, palangga! 🤎");
    }
}

function finishQuiz() {
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
}

function openLetter() {
    document.getElementById("envelope").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
}

function closeLetter() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("envelope").classList.remove("hidden");
}

// Question data
const mathsQuestions = [
    {
        question: "What is 3/4 of 280?",
        options: ["210", "180", "240", "200"],
        correct: 0
    },
    {
        question: "What is the area of a rectangle with length 12cm and width 8cm?",
        options: ["96cm²", "40cm²", "20cm²", "60cm²"],
        correct: 0
    },
    // Add more maths questions as needed...
];

const readingQuestions = [
    {
        question: "What is the main purpose of a non-fiction text?",
        options: ["To inform", "To entertain", "To persuade", "All of the above"],
        correct: 3
    },
    {
        question: "Which word is closest in meaning to 'ecstatic'?",
        options: ["Happy", "Overjoyed", "Content", "Pleased"],
        correct: 1
    },
    // Add more reading questions as needed...
];

const spagQuestions = [
    {
        question: "Which sentence uses the correct form of there/their/they're?",
        options: [
            "Their going to the park.",
            "They're going to the park.",
            "There going to the park.",
            "Theyre going to the park."
        ],
        correct: 1
    },
    {
        question: "Identify the adverb in: 'She quickly ran home.'",
        options: ["She", "Quickly", "Ran", "Home"],
        correct: 1
    },
    // Add more SPAG questions as needed...
];

// Quiz class implementation
class Quiz {
    constructor(questions, subject) {
        this.questions = questions;
        this.subject = subject;
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedQuestions = this.selectRandomQuestions(50);
    }

    selectRandomQuestions(count) {
        const shuffled = [...this.questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    getCurrentQuestion() {
        return this.selectedQuestions[this.currentQuestion];
    }

    checkAnswer(answer) {
        const current = this.getCurrentQuestion();
        const isCorrect = answer === current.correct;
        if (isCorrect) this.score++;
        return isCorrect;
    }

    hasNextQuestion() {
        return this.currentQuestion < this.selectedQuestions.length - 1;
    }

    nextQuestion() {
        if (this.hasNextQuestion()) {
            this.currentQuestion++;
            return true;
        }
        return false;
    }

    getScore() {
        return {
            score: this.score,
            total: this.selectedQuestions.length,
            percentage: Math.round((this.score / this.selectedQuestions.length) * 100)
        };
    }
}

let currentQuiz = null;

function startQuiz(subject) {
    let questions;
    switch(subject) {
        case 'maths':
            questions = mathsQuestions;
            break;
        case 'reading':
            questions = readingQuestions;
            break;
        case 'spag':
            questions = spagQuestions;
            break;
        default:
            console.error('Invalid subject');
            return;
    }

    currentQuiz = new Quiz(questions, subject);
    displayQuestion();

    // Hide other sections and show quiz
    document.getElementById('home').style.display = 'none';
    document.getElementById('subjects').style.display = 'none';
    document.getElementById('features').style.display = 'none';
    document.getElementById('quick-start').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
}

function displayQuestion() {
    if (!currentQuiz) return;
    
    const question = currentQuiz.getCurrentQuestion();
    const container = document.getElementById('quiz-container');

    container.innerHTML = `
        <div class="quiz-question">
            <h2>${currentQuiz.subject.toUpperCase()} Question ${currentQuiz.currentQuestion + 1}/50</h2>
            <div class="progress-bar">
                <div class="progress" style="width: ${(currentQuiz.currentQuestion + 1) * 2}%"></div>
            </div>
            <p class="question-text">${question.question}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="submitAnswer(${index})">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function submitAnswer(answer) {
    if (!currentQuiz) return;

    const isCorrect = currentQuiz.checkAnswer(answer);
    const options = document.querySelectorAll('.option-btn');

    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === currentQuiz.getCurrentQuestion().correct) {
            btn.classList.add('correct');
        } else if (index === answer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    setTimeout(() => {
        if (currentQuiz.hasNextQuestion()) {
            currentQuiz.nextQuestion();
            displayQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    if (!currentQuiz) return;

    const score = currentQuiz.getScore();
    const container = document.getElementById('quiz-container');

    container.innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="score-display">
                <p>Your Score: ${score.score}/${score.total}</p>
                <p>Percentage: ${score.percentage}%</p>
            </div>
            <div class="result-actions">
                <button onclick="restartQuiz()" class="neon-button">Try Again</button>
                <button onclick="returnToSubjects()" class="neon-button">Back to Subjects</button>
            </div>
        </div>
    `;
}

function restartQuiz() {
    if (!currentQuiz) return;
    startQuiz(currentQuiz.subject);
}

function returnToSubjects() {
    currentQuiz = null;
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('subjects').style.display = 'block';
    document.getElementById('features').style.display = 'block';
    document.getElementById('quick-start').style.display = 'block';
}
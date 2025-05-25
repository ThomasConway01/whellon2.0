// Question banks for each subject
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
    // Add more maths questions here...
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
    // Add more reading questions here...
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
    // Add more SPAG questions here...
];

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
        return shuffled.slice(0, count);
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

// Quiz UI handling
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
    }

    const quiz = new Quiz(questions, subject);
    displayQuestion(quiz);

    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('subjects').style.display = 'none';
}

function displayQuestion(quiz) {
    const question = quiz.getCurrentQuestion();
    const container = document.getElementById('quiz-container');
    
    container.innerHTML = `
        <div class="quiz-question">
            <h2>${quiz.subject.toUpperCase()} Question ${quiz.currentQuestion + 1}/50</h2>
            <div class="progress-bar">
                <div class="progress" style="width: ${(quiz.currentQuestion + 1) * 2}%"></div>
            </div>
            <p class="question-text">${question.question}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="submitAnswer(${index}, quiz)">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function submitAnswer(answer, quiz) {
    const isCorrect = quiz.checkAnswer(answer);
    const options = document.querySelectorAll('.option-btn');
    
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === quiz.getCurrentQuestion().correct) {
            btn.classList.add('correct');
        } else if (index === answer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    setTimeout(() => {
        if (quiz.hasNextQuestion()) {
            quiz.nextQuestion();
            displayQuestion(quiz);
        } else {
            showResults(quiz);
        }
    }, 1000);
}

function showResults(quiz) {
    const score = quiz.getScore();
    const container = document.getElementById('quiz-container');
    
    container.innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="score-display">
                <p>Your Score: ${score.score}/${score.total}</p>
                <p>Percentage: ${score.percentage}%</p>
            </div>
            <div class="result-actions">
                <button onclick="location.reload()" class="neon-button">Try Again</button>
                <button onclick="window.location.href='#subjects'" class="neon-button">Back to Subjects</button>
            </div>
        </div>
    `;
} 
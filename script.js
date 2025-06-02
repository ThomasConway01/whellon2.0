// Quiz state management
let currentQuiz = {
    subject: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 20 // Set total questions per quiz
};

// Function to get random questions from a pool
function getRandomQuestions(questions, count) {
    if (!questions || !Array.isArray(questions)) return [];
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to randomize options and correct index for each question
function randomizeOptions(questions) {
    return questions.map(q => {
        const optionPairs = q.options.map((opt, idx) => ({ opt, idx }));
        for (let i = optionPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionPairs[i], optionPairs[j]] = [optionPairs[j], optionPairs[i]];
        }
        const newOptions = optionPairs.map(pair => pair.opt);
        const newCorrect = optionPairs.findIndex(pair => pair.idx === q.correct);
        return {
            question: q.question,
            options: newOptions,
            correct: newCorrect
        };
    });
}

// Start the quiz for a specific subject
function startQuiz(subject) {
    // Hide other sections
    document.querySelectorAll('section:not(#quiz-container)').forEach(section => {
        section.style.display = 'none';
    });

    // Show quiz container
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display = 'flex';

    // Update active state in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[onclick=\"startQuiz('${subject}')\"]`)?.classList.add('active');

    // Get the correct question array
    let allQuestions = [];
    if (subject === 'maths') {
        allQuestions = window.mathsQuestions || [];
    } else if (subject === 'reading') {
        allQuestions = window.readingQuestions || [];
    } else if (subject === 'spag') {
        allQuestions = window.spagQuestions || [];
    }

    // Log for debugging
    console.log(`Loading ${subject} questions:`, allQuestions);

    if (!allQuestions || !allQuestions.length) {
        quizContainer.innerHTML = '<div class="quiz-question"><h2>Loading questions...</h2></div>';
        // Wait a moment and try again
        setTimeout(() => {
            if (subject === 'maths') {
                allQuestions = window.mathsQuestions || [];
            } else if (subject === 'reading') {
                allQuestions = window.readingQuestions || [];
            } else if (subject === 'spag') {
                allQuestions = window.spagQuestions || [];
            }
            
            // Log for debugging
            console.log(`Retrying ${subject} questions:`, allQuestions);
            
            if (!allQuestions || !allQuestions.length) {
                quizContainer.innerHTML = `
                    <div class="quiz-question">
                        <h2>Error Loading Questions</h2>
                        <p>No questions found for ${subject.toUpperCase()}. Please try again.</p>
                        <button class="neon-button" onclick="returnToHome()">Return to Home</button>
                    </div>
                `;
                return;
            }
            
            const selectedQuestions = getRandomQuestions(allQuestions, currentQuiz.totalQuestions);
            const randomizedQuestions = randomizeOptions(selectedQuestions);
            
            // Initialize quiz state
            currentQuiz = {
                subject: subject,
                questions: randomizedQuestions,
                currentQuestionIndex: 0,
                score: 0,
                totalQuestions: Math.min(20, selectedQuestions.length)
            };
            
            // Display the first question
            displayQuestion();
        }, 1000);
        return;
    }

    const selectedQuestions = getRandomQuestions(allQuestions, currentQuiz.totalQuestions);
    const randomizedQuestions = randomizeOptions(selectedQuestions);

    // Initialize quiz state
    currentQuiz = {
        subject: subject,
        questions: randomizedQuestions,
        currentQuestionIndex: 0,
        score: 0,
        totalQuestions: Math.min(20, selectedQuestions.length)
    };

    // Display the first question
    displayQuestion();
}

// Display the current question
function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];

    // Create question HTML
    const questionHTML = `
        <div class="quiz-question">
            <div class="progress-bar">
                <div class="progress" style="width: ${(currentQuiz.currentQuestionIndex / currentQuiz.totalQuestions) * 100}%"></div>
            </div>
            <h2>${currentQuiz.subject.toUpperCase()} Quiz</h2>
            <p class="question-number">Question ${currentQuiz.currentQuestionIndex + 1} of ${currentQuiz.totalQuestions}</p>
            <p class="question-text">${currentQuestion.question}</p>
            <div class="options">
                ${currentQuestion.options.map((option, index) => `
                    <button class="neon-button option-button" onclick="checkAnswer(${index})">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    quizContainer.innerHTML = questionHTML;
}

// Check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    
    // Disable all option buttons
    document.querySelectorAll('.option-button').forEach((button, idx) => {
        button.disabled = true;
        if (idx === selectedIndex) {
            button.classList.add(selectedIndex === currentQuestion.correct ? 'correct' : 'incorrect');
        }
        if (idx === currentQuestion.correct) {
            button.classList.add('correct');
        }
    });

    // Update score if correct
    if (selectedIndex === currentQuestion.correct) {
        currentQuiz.score++;
    }

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuiz.currentQuestionIndex++;
        if (currentQuiz.currentQuestionIndex < currentQuiz.totalQuestions) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Show quiz results
function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const percentage = (currentQuiz.score / currentQuiz.totalQuestions) * 100;
    let feedback = "";

    // Add feedback based on score
    if (percentage === 100) {
        feedback = "Perfect score! Amazing work! 🌟";
    } else if (percentage >= 80) {
        feedback = "Great job! You're doing really well! 🎉";
    } else if (percentage >= 60) {
        feedback = "Good effort! Keep practicing! 💪";
    } else {
        feedback = "Keep trying! You'll get better with practice! 📚";
    }

    const resultsHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <p class="score-display">
                You scored ${currentQuiz.score} out of ${currentQuiz.totalQuestions} (${percentage}%)
            </p>
            <p class="feedback">${feedback}</p>
            <div class="result-actions">
                <button class="neon-button" onclick="startQuiz('${currentQuiz.subject}')">Try Again</button>
                <button class="neon-button" onclick="returnToHome()">Back to Home</button>
            </div>
        </div>
    `;

    quizContainer.innerHTML = resultsHTML;
}

// Return to home page
function returnToHome() {
    // Show all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });

    // Hide quiz container
    document.getElementById('quiz-container').style.display = 'none';

    // Update active state in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('.nav-link[onclick="returnToHome()"]').classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for all quiz buttons
    document.querySelectorAll('[onclick^="startQuiz"]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
        });
    });

    // Add click handler for home button
    document.querySelector('[onclick="returnToHome()"]')?.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
    });
}); 
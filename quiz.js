... const mathsQuestions = [
...     {
...         question: "What is 3/4 of 280?",
...         options: ["210", "180", "240", "200"],
...         correct: 0
...     },
...     {
...         question: "What is the area of a rectangle with length 12cm and width 8cm?",
...         options: ["96cm²", "40cm²", "20cm²", "60cm²"],
...         correct: 0
...     },
...     // Add more maths questions here...
... ];
...
... const readingQuestions = [
...     {
...         question: "What is the main purpose of a non-fiction text?",
...         options: ["To inform", "To entertain", "To persuade", "All of the above"],
...         correct: 3
...     },
...     {
...         question: "Which word is closest in meaning to 'ecstatic'?",
...         options: ["Happy", "Overjoyed", "Content", "Pleased"],
...         correct: 1
...     },
...     // Add more reading questions here...
... ];
...
... const spagQuestions = [
...     {
...         question: "Which sentence uses the correct form of there/their/they're?",
...         options: [
...             "Their going to the park.",
...             "They're going to the park.",
...             "There going to the park.",
...             "Theyre going to the park."
...         ],
...         correct: 1
...     },
...     {
...         question: "Identify the adverb in: 'She quickly ran home.'",
...         options: ["She", "Quickly", "Ran", "Home"],
...         correct: 1
...     },
...     // Add more SPAG questions here...
... ];
...
... class Quiz {
...     constructor(questions, subject) {
...         this.questions = questions;
...         this.subject = subject;
...         this.currentQuestion = 0;
...         this.score = 0;
...         this.selectedQuestions = this.selectRandomQuestions(50);
...     }
...
...     selectRandomQuestions(count) {
...         const shuffled = [...this.questions].sort(() => 0.5 - Math.random());
...         return shuffled.slice(0, count);
...     }
...
...     getCurrentQuestion() {
...         return this.selectedQuestions[this.currentQuestion];
...     }
...
...     checkAnswer(answer) {
...         const current = this.getCurrentQuestion();
...         const isCorrect = answer === current.correct;
...         if (isCorrect) this.score++;
...         return isCorrect;
...     }
...
...     hasNextQuestion() {
...         return this.currentQuestion < this.selectedQuestions.length - 1;
...     }
...
...     nextQuestion() {
...         if (this.hasNextQuestion()) {
...             this.currentQuestion++;
...             return true;
...         }
...         return false;
...     }
...
...     getScore() {
...         return {
...             score: this.score,
...             total: this.selectedQuestions.length,
...             percentage: Math.round((this.score / this.selectedQuestions.length) * 100)
...         };
...     }
... }
...
... // Quiz UI handling
... function startQuiz(subject) {
...     let questions;
...     switch(subject) {
...         case 'maths':
...             questions = mathsQuestions;
...             break;
...         case 'reading':
...             questions = readingQuestions;
...             break;
...         case 'spag':
...             questions = spagQuestions;
...             break;
...     }
...
...     const quiz = new Quiz(questions, subject);
...     displayQuestion(quiz);
...
...     document.getElementById('quiz-container').style.display = 'block';
...     document.getElementById('subjects').style.display = 'none';
... }
...
... function displayQuestion(quiz) {
...     const question = quiz.getCurrentQuestion();
...     const container = document.getElementById('quiz-container');
...
...     container.innerHTML = `
...         <div class="quiz-question">
...             <h2>${quiz.subject.toUpperCase()} Question ${quiz.currentQuestion + 1}/50</h2>
...             <div class="progress-bar">
...                 <div class="progress" style="width: ${(quiz.currentQuestion + 1) * 2}%"></div>
...             </div>
...             <p class="question-text">${question.question}</p>
...             <div class="options">
...                 ${question.options.map((option, index) => `
...                     <button class="option-btn" onclick="submitAnswer(${index}, quiz)">
...                         ${option}
...                     </button>
...                 `).join('')}
...             </div>
...         </div>
...     `;
... }
...
... function submitAnswer(answer, quiz) {
...     const isCorrect = quiz.checkAnswer(answer);
...     const options = document.querySelectorAll('.option-btn');
...
...     options.forEach((btn, index) => {
...         btn.disabled = true;
...         if (index === quiz.getCurrentQuestion().correct) {
...             btn.classList.add('correct');
...         } else if (index === answer && !isCorrect) {
...             btn.classList.add('incorrect');
...         }
...     });
...
...     setTimeout(() => {
...         if (quiz.hasNextQuestion()) {
...             quiz.nextQuestion();
...             displayQuestion(quiz);
...         } else {
...             showResults(quiz);
...         }
...     }, 1000);
... }
...
... function showResults(quiz) {
...     const score = quiz.getScore();
...     const container = document.getElementById('quiz-container');
...
...     container.innerHTML = `
...         <div class="quiz-results">
...             <h2>Quiz Complete!</h2>
...             <div class="score-display">
...                 <p>Your Score: ${score.score}/${score.total}</p>
...                 <p>Percentage: ${score.percentage}%</p>
...             </div>
...             <div class="result-actions">
...                 <button onclick="location.reload()" class="neon-button">Try Again</button>
...                 <button onclick="window.location.href='#subjects'" class="neon-button">Back to Subjects</button>
...             </div>
...         </div>
...     `;
... }
```javascript
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
    {
        question: "Solve: 15 + 25 - 10",
        options: ["30", "20", "25", "35"],
        correct: 0
    },
    {
        question: "What is 7 multiplied by 8?",
        options: ["54", "56", "63", "70"],
        correct: 0
    },
    {
        question: "What is 20% of 150?",
        options: ["30", "35", "40", "45"],
        correct: 0
    },
    {
        question: "If a shirt costs $25 and is on sale for 20% off, what is the sale price?",
        options: ["$20", "$22.50", "$25", "$30"],
        correct: 0
    },
    {
        question: "What is 5 squared?",
        options: ["10", "15", "20", "25"],
        correct: 0
    },
    {
        question: "What is 12 x 6?",
        options: ["60", "72", "84", "96"],
        correct: 0
    },
    {
        question: "What is 100 - 35?",
        options: ["65", "70", "75", "80"],
        correct: 0
    },
    {
        question: "What is 2 + 3 * 4?",
        options: ["14", "16", "20", "24"],
        correct: 0
    },
    {
        question: "If a train travels at 60 miles per hour, how far will it travel in 2.5 hours?",
        options: ["120 miles", "150 miles", "180 miles", "200 miles"],
        correct: 0
    },
    {
        question: "What is the value of x if 3x + 5 = 14?",
        options: ["3", "4", "5", "6"],
        correct: 0
    },
    {
        question: "What is the perimeter of a square with side length 5cm?",
        options: ["10cm", "20cm", "25cm", "50cm"],
        correct: 0
    },
    {
        question: "What is the area of a triangle with a base of 10cm and a height of 6cm?",
        options: ["30cm²", "60cm²", "120cm²", "24cm²"],
        correct: 0
    },
    {
        question: "What is 1/2 + 1/4 + 1/8?",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 0
    },
    {
        question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
        options: ["9", "10", "11", "12"],
        correct: 0
    },
    {
        question: "What is the greatest common factor of 12 and 18?",
        options: ["2", "3", "6", "12"],
        correct: 0
    },
    {
        question: "What is 7 x 8 - 24?",
        options: ["32", "36", "40", "48"],
        correct: 0
    },
    {
        question: "What is 1000 - 678?",
        options: ["322", "332", "342", "352"],
        correct: 0
    },
    {
        question: "What is 5 + 5 + 5 + 5 + 5?",
        options: ["15", "20", "25", "30"],
        correct: 0
    },
    {
        question: "A rectangle has a length of 10m and a width of 5m. What is its area?",
        options: ["25m²", "50m²", "100m²", "15m²"],
        correct: 0
    },
    {
        question: "What is the sum of all the angles in a triangle?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        correct: 0
    },
    {
        question: "If a car travels 80 miles in 2 hours, what is its average speed?",
        options: ["40 mph", "60 mph", "80 mph", "100 mph"],
        correct: 0
    },
    {
        question: "What is 25 x 4?",
        options: ["80", "90", "100", "120"],
        correct: 0
    },
    {
        question: "What is 100 - 45 - 20?",
        options: ["35", "40", "45", "50"],
        correct: 0
    },
    {
        question: "What is 3 x 3 x 3?",
        options: ["9", "27", "81", "27"],
        correct: 0
    },
    {
        question: "What is 60 + 30 - 10?",
        options: ["80", "85", "90", "95"],
        correct: 0
    },
    {
        question: "A square has a side length of 7 cm. What is its perimeter?",
        options: ["7 cm", "14 cm", "21 cm", "49 cm"],
        correct: 0
    },
    {
        question: "What is 48 / 6?",
        options: ["6", "7", "8", "9"],
        correct: 0
    },
    {
        question: "What is the value of y if 2y + 1 = 11?",
        options: ["4", "5", "6", "7"],
        correct: 0
    },
    {
        question: "What is the area of a circle with a radius of 3cm?",
        options: ["9πcm²", "18πcm²", "27πcm²", "36πcm²"],
        correct: 0
    }
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
    {
        question: "Which of the following is an example of a factual statement?",
        options: ["The sky is blue.", "Dogs are friendly animals.", "Chocolate is delicious.", "Purple is my favorite color."],
        correct: 0
    },
    {
        question: "What is the definition of 'summarize'?",
        options: ["To tell a long story.", "To give a brief overview of something.", "To create a new story.", "To add details to a text."],
        correct: 1
    },
    {
        question: "What is the purpose of a headings in a text?",
        options: ["To make the text longer", "To help the reader understand the main ideas", "To decorate the page", "To confuse the reader"],
        correct: 1
    },
    {
        question: "What type of text is a biography?",
        options: ["Fiction", "Non-Fiction", "Poetry", "Drama"],
        correct: 1
    },
    {
        question: "Which of the following sentences demonstrates correct grammar?",
        options: ["Their going to the store.", "They're going to the store.", "There going to the store.", "They're going to the store."],
        correct: 1
    },
    {
        question: "What does 'interpret' mean?",
        options: ["To understand and explain something.", "To write a new story.", "To ignore something.", "To look at something."],
        correct: 1
    },
    {
        question: "What is the difference between a fact and an opinion?",
        options: ["A fact is a belief, an opinion is a truth.", "A fact can be proven, an opinion cannot.", "They are the same thing.", "Facts are always correct."],
        correct: 1
    },
    {
        question: "What is the purpose of using visuals (pictures, graphs) in a non-fiction text?",
        options: ["To make the text look pretty.", "To help readers understand information.", "To confuse the reader.", "To tell a story."],
        correct: 1
    },
    {
        question: "What does 'analyze' mean?",
        options: ["To look at something carefully.", "To ignore something.", "To create a new story.", "To add details to a text."],
        correct: 1
    },
    {
        question: "What is the best way to find the main idea of a paragraph?",
        options: ["Read only the first sentence.", "Look for repeated words or phrases.", "Read the last sentence.", "Read the whole paragraph"],
        correct: 1
    },
    {
        question: "Which of the following is an example of a primary source?",
        options: ["A textbook.", "A newspaper article.", "A diary entry from a soldier during World War I.", "A history book written in 2023."],
        correct: 1
    },
    {
        question: "What does 'evidence' mean in a text?",
        options: ["A story.", "Facts or information that supports an idea.", "A person's opinion.", "A picture."],
        correct: 1
    },
    {
        question: "What is a definition?",
        options: ["A way of explaining a word or concept.", "A type of story.", "A picture.", "A sound."],
        correct: 1
    },
    {
        question: "Which sentence demonstrates correct punctuation?",
        options: ["Lets go to the park.", "Let's go to the park.", "Lets' go to the park.", "Lets go to the park."],
        correct: 1
    },
    {
        question: "What type of text is a news report?",
        options: ["Fiction", "Non-Fiction", "Poetry", "Drama"],
        correct: 1
    },
    {
        question: "What does 'infer' mean?",
        options: ["To directly state something.", "To guess based on information in the text.", "To ignore something.", "To add details to a text."],
        correct: 1
    },
    {
        question: "Why is it important to understand the context of a text?",
        options: ["It helps you understand the meaning.", "It makes the text look pretty.", "It makes the text longer.", "It confuses the reader."],
        correct: 1
    },
    {
        question: "What is a conclusion?",
        options: ["The beginning of a story.", "A summary of the main points.", "A picture.", "A sound."],
        correct: 1
    },
    {
        question: "What is the purpose of a glossary?",
        options: ["To provide definitions of words.", "To tell a story.", "To decorate the page.", "To confuse the reader."],
        correct: 1
    },
    {
        question: "What does 'support' mean in the context of a text?",
        options: ["To ignore something.", "To provide evidence or information that strengthens an idea.", "To create a new story.", "To confuse the reader."],
        correct: 1
    },
    {
        question: "What is a theme?",
        options: ["The main idea or message of a story.", "A picture.", "A sound.", "A character."],
        correct: 1
    },
    {
        question: "What does 'summarize' mean in a text?",
        options: ["To tell a long story.", "To give a brief overview of something.", "To add details to a text.", "To confuse the reader."],
        correct: 1
    },
    {
        question: "Why is it important to read actively when reading a text?",
        options: ["To ensure you are taking notes.", "To help you understand the meaning.", "To make the text look pretty.", "To confuse the reader."],
        correct: 1
    },
    {
        question: "What is a heading?",
        options: ["A short overview of the text", "A decorative element", "The middle of the page", "The main story"],
        correct: 1
    },
    {
        question: "What is a footnote?",
        options: ["A note at the bottom of the page", "A main part of the text", "A short phrase", "A drawing"],
        correct: 1
    },
    {
        question: "Which of the following is a sign of a well-organized text?",
        options: ["Random sentences", "Clear headings and subheadings", "Difficult vocabulary", "No structure"],
        correct: 1
    },
    {
        question: "What is a thesis statement?",
        options: ["A short overview of the text.", "A main argument or point that the author is making.", "A decorative element.", "A question."],
        correct: 1
    },
    {
        question: "What is a hyperlink?",
        options: ["A word that is different from all others", "A connection between two pieces of information", "A drawing", "A sound."],
        correct: 1
    },
    {
        question: "What is the difference between fact and opinion?",
        options: ["Facts can be proven, opinions cannot.", "Facts are always correct, opinions are always wrong.", "There is no difference.", "They are both important."],
        correct: 1
    },
    {
        question: "What is a key?",
        options: ["A main topic.", "A small picture.", "A long sentence.", "A secret code."],
        correct: 1
    },
    {
        question: "What does 'interpret' mean?",
        options: ["To understand and explain something.", "To write a new story.", "To ignore something.", "To add details to a text."],
        correct: 1
    },
    {
        question: "Which of the following best describes a 'bias' in a text?",
        options: ["A fair and impartial perspective.", "A prejudice or tendency towards a particular viewpoint.", "An objective summary of facts.", "A detailed description of a topic."],
        correct: 1
    },
    {
        question: "What is the purpose of using visual aids (pictures, charts) in a text?",
        options: ["To distract the reader.", "To provide information and enhance understanding.", "To make the text longer.", "To confuse the reader."],
        correct: 1
    },
    {
        question: "Why is it important to consider the author's purpose when reading a text?",
        options: ["To know the author's point of view.", "To help you understand why the author wrote the text.", "To make the text look pretty.", "To confuse the reader."],
        correct: 1
    },
    {
        question: "What is 'evidence'?",
        options: ["A guess", "Facts or information that support an idea", "An opinion", "A picture"],
        correct: 1
    },
    {
        question: "What is a 'summary'?",
        options: ["A detailed description of a topic.", "A short version of the main points", "A long sentence", "A picture"],
        correct: 1
    },
    {
        question: "What is an 'inference'?",
        options: ["An opinion", "An assumption based on clues in the text", "A statement of fact", "A sound"],
        correct: 1
    },
    {
        question: "What is the purpose of a sidebar?",
        options: ["To tell a long story", "To add extra information related to the main text.", "To decorate the page.", "To confuse the reader."],
        correct: 1
    }
];
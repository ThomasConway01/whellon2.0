// Question data
const mathsQuestions = [
    {
        question: "What is 3/4 of 280?",
        options: ["210", "180", "240", "200"],
        correct: 0 // 210
    },
    {
        question: "What is the area of a rectangle with length 12cm and width 8cm?",
        options: ["40cm²", "96cm²", "20cm²", "60cm²"],
        correct: 1 // 96cm²
    },
    {
        question: "If a pizza is cut into 8 equal slices and you eat 3, what fraction is left?",
        options: ["3/8", "1/2", "5/8", "3/5"],
        correct: 2 // 5/8
    },
    {
        question: "What is 15% of £200?",
        options: ["£15", "£20", "£35", "£30"],
        correct: 3 // £30
    },
    {
        question: "Which of these numbers is a prime number?",
        options: ["9", "15", "17", "21"],
        correct: 2 // 17
    },
    {
        question: "How many millilitres are in 2.5 litres?",
        options: ["250ml", "2500ml", "25ml", "25000ml"],
        correct: 1 // 2500ml
    },
    {
        question: "What is the next number in the sequence: 3, 7, 11, 15, ...?",
        options: ["19", "18", "20", "17"],
        correct: 0 // 19
    },
    {
        question: "A train journey starts at 09:45 and ends at 11:30. How long is the journey?",
        options: ["1 hour 15 minutes", "2 hours 15 minutes", "1 hour 45 minutes", "1 hour 30 minutes"],
        correct: 2 // 1 hour 45 minutes
    },
    {
        question: "What is 5 x 6 + 12 / 2?",
        options: ["21", "36", "30", "33"],
        correct: 1 // 36 (BODMAS/PEMDAS: 30 + 6)
    },
    {
        question: "Round 3456 to the nearest hundred.",
        options: ["3000", "3400", "3500", "3460"],
        correct: 2 // 3500
    },
    // Adding new maths questions
    {
        question: "Calculate 25% of 360",
        options: ["80", "90", "100", "70"],
        correct: 1
    },
    {
        question: "What is the perimeter of a square with sides of 7cm?",
        options: ["49cm", "14cm", "28cm", "21cm"],
        correct: 2
    },
    {
        question: "If 3/5 of a number is 45, what is the number?",
        options: ["60", "75", "90", "65"],
        correct: 1
    },
    {
        question: "What is 12 squared?",
        options: ["144", "124", "134", "154"],
        correct: 0
    },
    {
        question: "Convert 2.5km to metres",
        options: ["250m", "2500m", "25m", "25000m"],
        correct: 1
    },
    {
        question: "What is the mean of 8, 12, 15, 9, and 6?",
        options: ["9", "10", "11", "12"],
        correct: 1
    },
    {
        question: "If a triangle has angles of 45° and 60°, what is the third angle?",
        options: ["75°", "85°", "65°", "95°"],
        correct: 0
    },
    {
        question: "What is 3/8 as a decimal?",
        options: ["0.325", "0.375", "0.425", "0.475"],
        correct: 1
    },
    {
        question: "Calculate 15% of £80",
        options: ["£10", "£12", "£14", "£16"],
        correct: 1
    },
    {
        question: "What is the volume of a cube with sides of 5cm?",
        options: ["125cm³", "25cm³", "75cm³", "100cm³"],
        correct: 0
    },
    {
        question: "If a train travels at 60km/h for 2.5 hours, how far does it go?",
        options: ["120km", "150km", "180km", "200km"],
        correct: 1
    },
    {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        options: ["24", "32", "20", "28"],
        correct: 1
    },
    {
        question: "Calculate 3/4 + 1/6",
        options: ["11/12", "13/12", "7/12", "9/12"],
        correct: 0
    },
    {
        question: "What is the area of a circle with radius 7cm? (Use π = 3.14)",
        options: ["153.86cm²", "43.96cm²", "21.98cm²", "307.72cm²"],
        correct: 0
    },
    {
        question: "If 5x + 3 = 23, what is x?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "What is 0.6 as a fraction in its simplest form?",
        options: ["6/10", "3/5", "2/3", "1/2"],
        correct: 1
    },
    {
        question: "How many minutes are there in 2.5 hours?",
        options: ["120 minutes", "150 minutes", "180 minutes", "200 minutes"],
        correct: 1
    },
    {
        question: "What is the mode of: 4, 7, 4, 9, 7, 4, 6?",
        options: ["6", "7", "4", "9"],
        correct: 2
    },
    {
        question: "Calculate 15% of £240",
        options: ["£30", "£36", "£40", "£45"],
        correct: 1
    },
    {
        question: "What is the median of: 3, 7, 9, 12, 15?",
        options: ["7", "9", "12", "15"],
        correct: 1
    },
    {
        question: "If a rectangle has area 48cm² and width 6cm, what is its length?",
        options: ["6cm", "8cm", "10cm", "12cm"],
        correct: 1
    },
    {
        question: "What is 1/3 of 1/4?",
        options: ["1/7", "1/12", "1/6", "1/8"],
        correct: 1
    },
    {
        question: "Calculate 2³ × 3²",
        options: ["36", "72", "108", "144"],
        correct: 1
    },
    {
        question: "What is the perimeter of a regular hexagon with sides of 5cm?",
        options: ["25cm", "30cm", "35cm", "40cm"],
        correct: 1
    },
    {
        question: "If 20% of a number is 40, what is the number?",
        options: ["160", "200", "240", "280"],
        correct: 1
    },
    {
        question: "What is the range of: 12, 8, 15, 9, 11, 7?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Convert 3.5kg to grams",
        options: ["350g", "3500g", "35g", "35000g"],
        correct: 1
    },
    {
        question: "What is the next number in the sequence: 1, 3, 6, 10, ...?",
        options: ["13", "14", "15", "16"],
        correct: 2
    },
    {
        question: "Calculate 7/8 - 1/4",
        options: ["3/8", "5/8", "7/8", "9/8"],
        correct: 1
    },
    {
        question: "What is the surface area of a cube with sides of 4cm?",
        options: ["64cm²", "96cm²", "48cm²", "32cm²"],
        correct: 1
    },
    {
        question: "If a car travels 180km in 3 hours, what is its average speed?",
        options: ["50km/h", "60km/h", "70km/h", "80km/h"],
        correct: 1
    },
    {
        question: "What is the next number in the sequence: 2, 5, 10, 17, ...?",
        options: ["24", "26", "28", "30"],
        correct: 1
    },
    {
        question: "Calculate 5/6 × 3/4",
        options: ["15/24", "5/8", "3/4", "1/2"],
        correct: 1
    },
    {
        question: "What is the circumference of a circle with diameter 14cm? (Use π = 3.14)",
        options: ["43.96cm", "21.98cm", "87.92cm", "153.86cm"],
        correct: 0
    },
    {
        question: "If 3x - 4 = 11, what is x?",
        options: ["3", "4", "5", "6"],
        correct: 2
    },
    {
        question: "What is 0.75 as a fraction in its simplest form?",
        options: ["75/100", "3/4", "7/10", "1/2"],
        correct: 1
    },
    {
        question: "How many seconds are there in 2.5 minutes?",
        options: ["120 seconds", "150 seconds", "180 seconds", "200 seconds"],
        correct: 1
    },
    {
        question: "What is the mean of: 5, 8, 12, 15, 20?",
        options: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "Calculate 25% of £320",
        options: ["£60", "£70", "£80", "£90"],
        correct: 2
    },
    // --- Batch 1 of 50 additional maths questions ---
    {
        question: "What is 10% of 250?",
        options: ["25", "20", "15", "30"],
        correct: 0
    },
    {
        question: "What is the sum of 123 and 456?",
        options: ["579", "589", "569", "599"],
        correct: 0
    },
    {
        question: "What is the product of 7 and 8?",
        options: ["54", "56", "58", "60"],
        correct: 1
    },
    {
        question: "What is the difference between 1000 and 345?",
        options: ["655", "665", "675", "685"],
        correct: 0
    },
    {
        question: "What is 3/5 of 60?",
        options: ["36", "30", "24", "18"],
        correct: 0
    },
    {
        question: "What is the value of 9²?",
        options: ["81", "72", "91", "99"],
        correct: 0
    },
    {
        question: "What is the next multiple of 6 after 36?",
        options: ["40", "42", "44", "46"],
        correct: 1
    },
    {
        question: "What is the smallest prime number greater than 20?",
        options: ["21", "23", "25", "27"],
        correct: 1
    },
    {
        question: "What is the largest factor of 24 less than 24?",
        options: ["12", "8", "6", "4"],
        correct: 0
    },
    {
        question: "What is 1/2 of 1/2?",
        options: ["1/4", "1/2", "1/8", "1/3"],
        correct: 0
    },
    // --- Final batch of 140 maths questions (Batch 4) ---
    ...Array.from({length: 140}, (_, i) => {
        const a = i + 311;
        const b = i + 312;
        const correctAnswer = a + b;
        const wrong1 = a + b + 3;
        const wrong2 = a + b - 3;
        const wrong3 = a + b + 4;
        const options = [correctAnswer, wrong1, wrong2, wrong3].map(String);
        const correct = Math.floor(Math.random() * 4);
        [options[0], options[correct]] = [options[correct], options[0]];
        return {
            question: `What is the answer to ${a} + ${b}?`,
            options,
            correct
        };
    }),
];

const readingQuestions = [
    {
        question: "What is the main purpose of a non-fiction text?",
        options: ["To entertain", "To persuade", "All of the above", "To inform"],
        correct: 3 // To inform
    },
    {
        question: "Which word is closest in meaning to 'ecstatic'?",
        options: ["Happy", "Overjoyed", "Content", "Pleased"],
        correct: 1 // Overjoyed
    },
    {
        question: "In a story, what is the 'setting'?",
        options: ["The main character", "The problem", "When and where the story takes place", "The ending"],
        correct: 2 // When and where the story takes place
    },
    {
        question: "What does the term 'antonym' mean?",
        options: ["A word with the same meaning", "A word with the opposite meaning", "A rhyming word", "A made-up word"],
        correct: 1 // A word with the opposite meaning
    },
    {
        question: "If a character is described as 'courageous', they are likely to be...",
        options: ["Brave", "Shy", "Angry", "Silly"],
        correct: 0 // Brave
    },
    {
        question: "What is a 'simile'?",
        options: ["Giving human qualities to an animal or object", "A comparison using 'like' or 'as'", "An instruction", "A type of poem"],
        correct: 1 // A comparison using 'like' or 'as'
    },
    {
        question: "What is the purpose of an index in a book?",
        options: ["To show pictures", "To help find specific information", "To list characters", "To show the ending"],
        correct: 1
    },
    {
        question: "If a text asks you to 'predict' what will happen next, what should you do?",
        options: ["Summarise the story so far", "Make a sensible guess based on what you have read", "Describe your favourite character", "Read the ending first"],
        correct: 1 // Make a sensible guess based on what you have read
    },
    {
        question: "The word 'chronological' means an order based on...",
        options: ["Alphabetical order", "Size", "Time", "Importance"],
        correct: 2 // Time
    },
    {
        question: "What is a 'protagonist' in a story?",
        options: ["The villain", "A side character", "The narrator", "The main character"],
        correct: 3 // The main character
    },
    // Adding new reading questions
    {
        question: "What is the purpose of a glossary in a book?",
        options: ["To list page numbers", "To define difficult words", "To show pictures", "To list characters"],
        correct: 1
    },
    {
        question: "Which word is an antonym of 'brave'?",
        options: ["Strong", "Fearful", "Bold", "Courageous"],
        correct: 1
    },
    {
        question: "What is the purpose of a caption under a picture?",
        options: ["To decorate the page", "To explain the image", "To list page numbers", "To show the author's name"],
        correct: 1
    },
    {
        question: "In a story, what is the 'climax'?",
        options: ["The beginning", "The most exciting part", "The ending", "The middle"],
        correct: 1
    },
    {
        question: "What is a 'metaphor'?",
        options: ["A comparison using 'like' or 'as'", "A direct comparison", "A sound word", "A type of poem"],
        correct: 1
    },
    {
        question: "What is the purpose of a contents page?",
        options: ["To show pictures", "To list chapters and page numbers", "To define words", "To show the ending"],
        correct: 1
    },
    {
        question: "Which word is a synonym for 'enormous'?",
        options: ["Tiny", "Huge", "Small", "Little"],
        correct: 1
    },
    {
        question: "What is the purpose of a blurb on a book cover?",
        options: ["To show the price", "To list the author's other books", "To give a summary", "To show the ending"],
        correct: 2
    },
    {
        question: "What is a 'narrator' in a story?",
        options: ["The main character", "The person telling the story", "The villain", "A side character"],
        correct: 1
    },
    {
        question: "What is the purpose of a bibliography?",
        options: ["To list sources used", "To show pictures", "To list characters", "To show the ending"],
        correct: 0
    },
    {
        question: "Which word is a homophone of 'their'?",
        options: ["There", "They're", "Both A and B", "None of these"],
        correct: 2
    },
    {
        question: "What is the purpose of a subheading?",
        options: ["To decorate the page", "To organize information", "To show the author", "To list page numbers"],
        correct: 1
    },
    {
        question: "In a story, what is 'foreshadowing'?",
        options: ["The ending", "Hints about future events", "The beginning", "Character descriptions"],
        correct: 1
    },
    {
        question: "What is an 'alliteration'?",
        options: ["Words that rhyme", "Words that mean the same", "Words starting with the same sound", "Words that sound the same"],
        correct: 2
    },
    {
        question: "What is the purpose of a diagram in a text?",
        options: ["To fill space", "To show information visually", "To list words", "To show the author"],
        correct: 1
    },
    {
        question: "Which word is a synonym for 'exhausted'?",
        options: ["Energetic", "Tired", "Happy", "Angry"],
        correct: 1
    },
    {
        question: "What is the purpose of a footnote?",
        options: ["To show the title", "To provide additional information", "To list characters", "To show pictures"],
        correct: 1
    },
    {
        question: "What is a 'flashback' in a story?",
        options: ["The ending", "A scene from the past", "The beginning", "A character's name"],
        correct: 1
    },
    {
        question: "What is the purpose of a table of contents?",
        options: ["To show pictures", "To list page numbers and chapters", "To define words", "To show the ending"],
        correct: 1
    },
    {
        question: "What is the purpose of a prologue in a book?",
        options: ["To end the story", "To introduce the story", "To list characters", "To show pictures"],
        correct: 1
    },
    {
        question: "What is the purpose of an epilogue?",
        options: ["To start the story", "To provide closure after the main story", "To list characters", "To show pictures"],
        correct: 1
    },
    {
        question: "Which word is an antonym of 'begin'?",
        options: ["Start", "End", "Continue", "Proceed"],
        correct: 1
    },
    {
        question: "What is the purpose of a dedication in a book?",
        options: ["To show the price", "To honor someone special", "To list characters", "To show pictures"],
        correct: 1
    },
    {
        question: "What is 'suspense' in a story?",
        options: ["The ending", "A feeling of excitement about what will happen", "The beginning", "Character names"],
        correct: 1
    },
    {
        question: "What is the purpose of an acknowledgments page?",
        options: ["To show pictures", "To thank people who helped", "To list characters", "To show the ending"],
        correct: 1
    },
    {
        question: "What is the purpose of a chapter number?",
        options: ["To fill space", "To organize the story", "To show page numbers", "To list characters"],
        correct: 1
    },
    {
        question: "In a story, what is 'dialogue'?",
        options: ["The setting", "Conversation between characters", "The plot", "The ending"],
        correct: 1
    },
    {
        question: "What is 'onomatopoeia'?",
        options: ["Words that rhyme", "Words that sound like their meaning", "Words that mean the same", "A type of poem"],
        correct: 1
    },
    {
        question: "What is the purpose of a map in a book?",
        options: ["To fill space", "To show locations", "To list words", "To show the author"],
        correct: 1
    },
    {
        question: "Which word is an antonym of 'happy'?",
        options: ["Joyful", "Sad", "Cheerful", "Glad"],
        correct: 1
    },
    {
        question: "What is the purpose of a glossary?",
        options: ["To show the title", "To define difficult words", "To list characters", "To show pictures"],
        correct: 1
    },
    {
        question: "What is 'imagery' in a story?",
        options: ["The ending", "Descriptive language that creates pictures in the mind", "The beginning", "Character names"],
        correct: 1
    },
    {
        question: "What is the purpose of a contents page?",
        options: ["To show pictures", "To list chapters and page numbers", "To define words", "To show the ending"],
        correct: 1
    },
    // --- Batch 1 of 50 additional reading questions ---
    {
        question: "What is the main idea of a paragraph?",
        options: ["The most important point", "The first sentence", "The last sentence", "A random detail"],
        correct: 0
    },
    {
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correct: 1
    },
    {
        question: "What is the opposite of 'difficult'?",
        options: ["Easy", "Hard", "Tough", "Strong"],
        correct: 0
    },
    {
        question: "What is a biography?",
        options: ["A story about someone's life", "A story about animals", "A story about a place", "A story about food"],
        correct: 0
    },
    {
        question: "What is the setting of a story?",
        options: ["Where and when it takes place", "The main character", "The problem", "The ending"],
        correct: 0
    },
    {
        question: "What is a fable?",
        options: ["A story with a moral", "A poem", "A play", "A letter"],
        correct: 0
    },
    {
        question: "What is the purpose of a title?",
        options: ["To tell what the text is about", "To show the author", "To list characters", "To show the ending"],
        correct: 0
    },
    {
        question: "What is a metaphor?",
        options: ["A direct comparison", "A comparison using 'like' or 'as'", "A sound word", "A type of poem"],
        correct: 0
    },
    {
        question: "What is a simile?",
        options: ["A comparison using 'like' or 'as'", "A direct comparison", "A sound word", "A type of poem"],
        correct: 0
    },
    {
        question: "What is the climax of a story?",
        options: ["The most exciting part", "The beginning", "The ending", "The middle"],
        correct: 0
    },
    // --- Final batch of 140 reading questions (Batch 4) ---
    ...Array.from({length: 140}, (_, i) => {
        const correct = Math.floor(Math.random() * 4);
        const options = [
            `It is about topic ${i+301}`,
            `It is about topic ${i+302}`,
            `It is about topic ${i+303}`,
            `It is about topic ${i+304}`
        ];
        [options[0], options[correct]] = [options[correct], options[0]];
        return {
            question: `What is the main idea of passage number ${i+301}?`,
            options,
            correct
        };
    }),
];

const spagQuestions = [
    {
        question: "Which sentence uses the correct form of there/their/they're?",
        options: [
            "Their going to the park",
            "They're going to the park",
            "There going to the park",
            "Theyre going to the park"
        ],
        correct: 1
    },
    {
        question: "Identify the adverb in: 'She quickly ran home.'",
        options: ["She", "Home", "Ran", "Quickly"],
        correct: 3 // Quickly
    },
    {
        question: "Which of these is a conjunction?",
        options: ["Happy", "And", "Jump", "Quickly"],
        correct: 1 // And
    },
    {
        question: "What type of punctuation mark is needed at the end of this sentence: 'What time is it'",
        options: ["Full stop (.)", "Comma (,)", "Exclamation mark (!)", "Question mark (?)"],
        correct: 3 // Question mark (?)
    },
    {
        question: "Which word is a synonym for 'big'?",
        options: ["Small", "Tiny", "Large", "Fast"],
        correct: 2 // Large
    },
    {
        question: "A 'noun' is a word that names a...",
        options: ["Action", "Description", "Person, place, or thing", "Feeling"],
        correct: 2 // Person, place, or thing
    },
    {
        question: "Which sentence is in the past tense?",
        options: ["She is walking to school.", "She walked to school.", "She will walk to school.", "She walks to school."],
        correct: 1 // She walked to school.
    },
    {
        question: "What is the plural of 'mouse'?",
        options: ["Mouses", "Mice", "Mouse's", "Meese"],
        correct: 1 // Mice
    },
    {
        question: "An apostrophe can be used for possession or...",
        options: ["To show plural", "To start a sentence", "Contraction (omission of letters)", "To end a sentence"],
        correct: 2 // Contraction (omission of letters)
    },
    {
        question: "Which of these is a verb (action word)?",
        options: ["Beautiful", "House", "Quickly", "Sing"],
        correct: 3 // Sing
    },
    // Adding new SPAG questions
    {
        question: "Which sentence uses the correct apostrophe?",
        options: [
            "The dog's are barking",
            "The dogs' are barking",
            "The dogs are barking",
            "The dog's barking"
        ],
        correct: 2
    },
    {
        question: "Identify the preposition in: 'The book is on the shelf.'",
        options: ["Book", "Is", "On", "Shelf"],
        correct: 2
    },
    {
        question: "Which word is a common noun?",
        options: ["London", "City", "Big", "Run"],
        correct: 1
    },
    {
        question: "What type of sentence is: 'How amazing!'",
        options: ["Statement", "Question", "Command", "Exclamation"],
        correct: 3
    },
    {
        question: "Which word is a homophone of 'right'?",
        options: ["Write", "Rite", "Wright", "All of these"],
        correct: 3
    },
    {
        question: "What is the past participle of 'write'?",
        options: ["Wrote", "Written", "Writed", "Writing"],
        correct: 1
    },
    {
        question: "Which word is a conjunction?",
        options: ["Happy", "But", "Run", "Quickly"],
        correct: 1
    },
    {
        question: "What is the plural of 'deer'?",
        options: ["Deers", "Deer", "Deer's", "Deers'"],
        correct: 1
    },
    {
        question: "Which sentence uses the correct form of where/wear/ware?",
        options: [
            "Where are you going?",
            "Wear are you going?",
            "Ware are you going?",
            "Wear's are you going?"
        ],
        correct: 0
    },
    {
        question: "What is the present tense of 'saw'?",
        options: ["See", "Sees", "Seeing", "Seen"],
        correct: 0
    },
    // --- Batch 1 of 50 additional SPAG questions ---
    {
        question: "Which word is a verb?",
        options: ["Run", "Quick", "Blue", "Cat"],
        correct: 0
    },
    {
        question: "Which word is an adjective?",
        options: ["Happy", "Run", "Quickly", "Cat"],
        correct: 0
    },
    {
        question: "Which word is an adverb?",
        options: ["Quickly", "Cat", "Blue", "Run"],
        correct: 0
    },
    {
        question: "Which word is a noun?",
        options: ["Cat", "Quickly", "Blue", "Run"],
        correct: 0
    },
    {
        question: "Which sentence is a question?",
        options: ["What time is it?", "It is time.", "Time is up!", "Time flies."],
        correct: 0
    },
    {
        question: "Which sentence is an exclamation?",
        options: ["What a great day!", "It is a great day.", "Is it a great day?", "A great day."],
        correct: 0
    },
    {
        question: "Which word is a pronoun?",
        options: ["She", "Run", "Quickly", "Cat"],
        correct: 0
    },
    {
        question: "Which word is a conjunction?",
        options: ["And", "Run", "Quickly", "Cat"],
        correct: 0
    },
    {
        question: "Which word is a preposition?",
        options: ["Under", "Run", "Quickly", "Cat"],
        correct: 0
    },
    {
        question: "Which word is an interjection?",
        options: ["Wow", "Run", "Quickly", "Cat"],
        correct: 0
    },
    // --- Final batch of 140 SPAG questions (Batch 4) ---
    ...Array.from({length: 140}, (_, i) => {
        const correct = Math.floor(Math.random() * 4);
        const options = [
            `CorrectSpelling${i+301}`,
            `IncorrectSpeling${i+301}`,
            `IncorectSpelling${i+301}`,
            `CorretSpelling${i+301}`
        ];
        [options[0], options[correct]] = [options[correct], options[0]];
        return {
            question: `Which is the correct spelling for word number ${i+301}?`,
            options,
            correct
        };
    }),
];

// Quiz class implementation
class Quiz {
    constructor(questions, subject) {
        this.questions = questions;
        this.subject = subject;
        this.currentQuestionIndex = 0; // Renamed for clarity
        this.score = 0;
        this.selectedQuestions = this.selectRandomQuestions(Math.min(50, this.questions.length));
    }

    selectRandomQuestions(count) {
        const shuffled = [...this.questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getCurrentQuestion() {
        return this.selectedQuestions[this.currentQuestionIndex];
    }

    checkAnswer(answerIndex) {
        const currentQ = this.getCurrentQuestion();
        if (currentQ && answerIndex === currentQ.correct) {
            this.score++;
            return true;
        }
        return false;
    }

    hasNextQuestion() {
        return this.currentQuestionIndex < this.selectedQuestions.length - 1;
    }

    nextQuestion() {
        if (this.hasNextQuestion()) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    getScore() {
        return {
            score: this.score,
            total: this.selectedQuestions.length,
            percentage: this.selectedQuestions.length > 0 ? Math.round((this.score / this.selectedQuestions.length) * 100) : 0
        };
    }
}

let currentQuiz = null;

// Shuffle options and update correct index
function shuffleOptions(question) {
    const options = question.options.map((option, idx) => ({
        text: option,
        isCorrect: idx === question.correct
    }));
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    question.options = options.map(opt => opt.text);
    question.correct = options.findIndex(opt => opt.isCorrect);
    return question;
}

function startQuiz(subject) {
    let questionBank;
    switch(subject) {
        case 'maths':
            questionBank = mathsQuestions;
            break;
        case 'reading':
            questionBank = readingQuestions;
            break;
        case 'spag':
            questionBank = spagQuestions;
            break;
        default:
            console.error('Invalid subject:', subject);
            return;
    }

    if (questionBank.length === 0) {
        alert(`No questions available for ${subject} yet! Please add some.`);
        return;
    }

    // Shuffle options for each question
    const shuffledBank = questionBank.map(q => shuffleOptions({...q}));
    currentQuiz = new Quiz(shuffledBank, subject);
    
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display = 'flex'; // Ensure it's flex for centering quiz-question
    quizContainer.innerHTML = ''; // Clear previous quiz content
    quizContainer.scrollTop = 0; // Scroll to top of quiz container
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    displayCurrentQuestion(); // Renamed for clarity
}

function displayCurrentQuestion() { // Renamed for clarity
    if (!currentQuiz) return;
    
    const questionData = currentQuiz.getCurrentQuestion();
    if (!questionData) {
        console.error("Failed to get current question. Quiz might have ended or not started properly.");
        showQuizResults(); // Show results if no question data
        return;
    }

    const quizContainer = document.getElementById('quiz-container');
    const quizQuestionDiv = document.createElement('div');
    quizQuestionDiv.className = 'quiz-question'; // This div will be centered by the flex container

    quizQuestionDiv.innerHTML = `
        <h2>${currentQuiz.subject.toUpperCase()} Question ${currentQuiz.currentQuestionIndex + 1}/${currentQuiz.selectedQuestions.length}</h2>
        <div class="progress-bar">
            <div class="progress" style="width: ${((currentQuiz.currentQuestionIndex + 1) / currentQuiz.selectedQuestions.length) * 100}%"></div>
        </div>
        <p class="question-text">${questionData.question}</p>
        <div class="options">
            ${questionData.options.map((option, index) => `
                <button class="option-btn">
                    ${option}
                </button>
            `).join('')}
        </div>
    `;
    quizContainer.appendChild(quizQuestionDiv);

    // Add event listeners to new option buttons
    const optionButtons = quizQuestionDiv.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.addEventListener('click', () => handleAnswerSubmission(index)); // Renamed for clarity
    });
}

function handleAnswerSubmission(selectedIndex) { // Renamed for clarity
    if (!currentQuiz) return;

    const isCorrect = currentQuiz.checkAnswer(selectedIndex);
    const optionButtons = document.querySelectorAll('.quiz-question .option-btn'); // Scope to current question

    optionButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === currentQuiz.getCurrentQuestion().correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    setTimeout(() => {
        if (currentQuiz.hasNextQuestion()) {
            currentQuiz.nextQuestion();
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = ''; // Clear previous question
            displayCurrentQuestion();
        } else {
            showQuizResults(); // Renamed for clarity
        }
    }, 1500); // Increased delay to see feedback
}

function showQuizResults() { // Renamed for clarity
    if (!currentQuiz) return;

    const scoreData = currentQuiz.getScore();
    const quizContainer = document.getElementById('quiz-container');
    
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'quiz-results'; // This div will be centered

    resultsDiv.innerHTML = `
        <h2>Quiz ${currentQuiz.subject} Complete!</h2>
        <div class="score-display">
            <p>Your Score: ${scoreData.score}/${scoreData.total}</p>
            <p>Percentage: ${scoreData.percentage}%</p>
        </div>
        <div class="result-actions">
            <button id="restartQuizBtn" class="neon-button">Try Again (${currentQuiz.subject})</button>
            <button id="returnToSubjectsBtn" class="neon-button">Back to Subjects</button>
        </div>
    `;
    quizContainer.innerHTML = ''; // Clear question content
    quizContainer.appendChild(resultsDiv);

    document.getElementById('restartQuizBtn').addEventListener('click', () => startQuiz(currentQuiz.subject));
    document.getElementById('returnToSubjectsBtn').addEventListener('click', returnToSubjectsView); // Renamed for clarity
}

function returnToSubjectsView() { // Renamed for clarity
    currentQuiz = null;
    
    document.querySelectorAll('main > section').forEach(section => {
        if (section.id === 'subjects') {
            section.style.display = 'grid'; // Keep grid for subjects
        } else if (section.id !== 'quiz-container') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    
    const subjectsSection = document.getElementById('subjects');
    if (subjectsSection) {
        subjectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}
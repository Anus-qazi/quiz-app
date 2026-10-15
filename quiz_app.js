//Is mein score her correct answer per update hoga 
let heading = document.getElementsByTagName("h1")
let questionNumber = document.getElementById("questionNumber")
let question = document.getElementById("question")
let options = document.getElementById("options")
let submit = document.getElementById("submit")
let scoreElement = document.getElementById("score");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let skip = document.getElementById("skip");
let result = document.getElementById("result");
let percentageElement = document.getElementById("percentage");
let quiz_content = document.querySelector(".quiz-content");
let restart = document.getElementById("restart")
const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Multan"],
        correctAnswer: "Islamabad"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "Which language is primarily used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        correctAnswer: "CSS"
    },
    {
        question: "How many days are there in a leap year?",
        options: ["364", "365", "366", "367"],
        correctAnswer: "366"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: "Lion"
    },
    {
        question: "What is 12 × 8?",
        options: ["86", "96", "108", "112"],
        correctAnswer: "96"
    },
    {
        question: "Which gas do humans need for respiration?",
        options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        correctAnswer: "Oxygen"
    },

    {
        question: "Which country is famous for the Great Wall?",
        options: ["Japan", "China", "India", "South Korea"],
        correctAnswer: "China"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which organ pumps blood throughout the human body?",
        options: ["Brain", "Liver", "Heart", "Lungs"],
        correctAnswer: "Heart"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "75°C", "100°C", "150°C"],
        correctAnswer: "100°C"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which device is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Speedometer", "Hygrometer"],
        correctAnswer: "Thermometer"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: "Mercury"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6"
    },

    {
        question: "Which country has the city of Istanbul?",
        options: ["Greece", "Turkey", "Egypt", "Iran"],
        correctAnswer: "Turkey"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which blood cells help fight infections?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        correctAnswer: "White blood cells"
    },
    {
        question: "What is 15 + 27?",
        options: ["40", "41", "42", "43"],
        correctAnswer: "42"
    },
    {
        question: "Which programming language is known for its use in data science?",
        options: ["Python", "HTML", "CSS", "XML"],
        correctAnswer: "Python"
    },
    {
        question: "Which is the longest river in Africa?",
        options: ["Amazon", "Nile", "Indus", "Yangtze"],
        correctAnswer: "Nile"
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "10°C", "32°C", "100°C"],
        correctAnswer: "0°C"
    },
    {
        question: "Which instrument is used to observe distant objects in space?",
        options: ["Microscope", "Telescope", "Periscope", "Stethoscope"],
        correctAnswer: "Telescope"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        correctAnswer: "Japan"
    },
    {
        question: "How many hours are there in one day?",
        options: ["12", "18", "24", "36"],
        correctAnswer: "24"
    },

    {
        question: "Which part of a plant absorbs water from the soil?",
        options: ["Leaf", "Stem", "Root", "Flower"],
        correctAnswer: "Root"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: ["Jeddah", "Mecca", "Riyadh", "Medina"],
        correctAnswer: "Riyadh"
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Copper", "Aluminum"],
        correctAnswer: "Mercury"
    },
    {
        question: "What is 100 ÷ 4?",
        options: ["20", "25", "30", "40"],
        correctAnswer: "25"
    },
    {
        question: "Which planet has prominent rings?",
        options: ["Mars", "Earth", "Saturn", "Mercury"],
        correctAnswer: "Saturn"
    },
    {
        question: "Which is the largest organ in the human body?",
        options: ["Heart", "Brain", "Skin", "Liver"],
        correctAnswer: "Skin"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "Which file extension is commonly used for JavaScript files?",
        options: [".html", ".css", ".js", ".java"],
        correctAnswer: ".js"
    },
    {
        question: "How many degrees are in a right angle?",
        options: ["45", "90", "180", "360"],
        correctAnswer: "90"
    },
    {
        question: "Which vitamin is mainly produced by the body through sunlight exposure?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin D"
    },

    {
        question: "What is the capital of Japan?",
        options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which data structure follows FIFO (First In, First Out)?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: "Queue"
    },
    {
        question: "Which data structure follows LIFO (Last In, First Out)?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: "Stack"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTransfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Which company developed the Android operating system?",
        options: ["Microsoft", "Google", "Apple", "IBM"],
        correctAnswer: "Google"
    },
    {
        question: "What is 9 × 9?",
        options: ["72", "81", "90", "99"],
        correctAnswer: "81"
    },
    {
        question: "Which planet is known for having life?",
        options: ["Mars", "Earth", "Venus", "Jupiter"],
        correctAnswer: "Earth"
    },
    {
        question: "How many colors are traditionally found in a rainbow?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "Which protocol is commonly used to transfer web pages?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        correctAnswer: "HTTP"
    },
    {
        question: "What is the main function of the brain?",
        options: [
            "Pump blood",
            "Control and coordinate body activities",
            "Digest food",
            "Produce oxygen"
        ],
        correctAnswer: "Control and coordinate body activities"
    }
];
console.log(questions.length)
console.log(questions[4].options)
console.log(questions[4].correctAnswer)
let curQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let submitted = [];
let answers = [];
function showFunction() {
     selectedAnswer = answers[curQuestionIndex] || null;  //answers[]→ answer ko save rakhta hai  ↓   selectedAnswer → current answer ko JS mein active rakhta hai ↓ is-selected → screen par selected dikhata hai
    let currQuestion = questions[curQuestionIndex];
    question.textContent = currQuestion.question;
    questionNumber.textContent = `Question ${curQuestionIndex + 1} of 50`;
    options.textContent = ""
//optionsButton = document.createElement("button"); //Is se her option ke liye new button create nhi hoga just button ka text her iteration mein change hoga last mein multan rah jaye ga.
    currQuestion.options.forEach(option => {
    let optionsButton = document.createElement("button"); 
    optionsButton.textContent = option;
    optionsButton.addEventListener("click", function() {
        selectedAnswer = option;             //selectedAnswer = abhi kis option ko select kiya hai
        answers[curQuestionIndex] = option;  //answers = har question mein kya select kiya tha
        options.querySelectorAll("button").forEach(button => button.classList.remove("is-selected"));//this line is added by vs code
        optionsButton.classList.add("is-selected");//this line is added by vs code
        //console.log(selectedAnswer);
        console.log(questions.length - 1); 
    })
    options.append(optionsButton);
    // Agar is question ka pehle se answer saved hai
    // to us option ko dobara selected dikhao
     if(answers[curQuestionIndex] === option) {
             optionsButton.classList.add("is-selected");//this line is added by vs code
        }
    if (submitted[curQuestionIndex]) {
    optionsButton.disabled = true;
}    
    if(curQuestionIndex === questions.length - 1) {
        next.textContent = "Finish Quiz..Congratulation"
    }else{
        next.textContent = "Next";
    };
})
};
showFunction();
submit.addEventListener("click", function() {
    const currQuestion = questions[curQuestionIndex]
    if(submitted[curQuestionIndex]){
        return;  //It means ager condition false ha tou next code chalao ager true ha tou further code mat chalao
    };
    if(selectedAnswer === null) {
        console.log("Please select any option")
        return  //Is function ko yahin stop kar do; neeche ka code mat chalao.
    };
    if(selectedAnswer === currQuestion.correctAnswer){
        score = score + 1;
        console.log("Submit")
        console.log(score)
    }else{
        console.log("Wrong")
    };
    submitted[curQuestionIndex] = true;
    let option = document.querySelectorAll("#options button");
    option.forEach(button => {  //It means jaise he submit button click ho button disabled hou jayein        
        button.disabled = true;  //NEW CONCEPT...OK
    })
    });
function nextQuestion() {
     for (let i = curQuestionIndex + 1; i < questions.length; i++) {
        if (!submitted[i]) {
            curQuestionIndex = i;
            selectedAnswer = answers[i] || null;
            showFunction();
            return;
        }
    }

    finishQuiz();
};
next.addEventListener("click", function() {
   // nextQuestion();
    if(curQuestionIndex === questions.length - 1) {
        finishQuiz();
    }else{
        nextQuestion();
    }
});   
previous.addEventListener("click", function() {
    if(curQuestionIndex > 0) {
        curQuestionIndex = curQuestionIndex - 1;
        questionNumber.textContent = "Question " + curQuestionIndex +  " of 50";
        showFunction();
    }
});
skip.addEventListener("click", function() {
    nextQuestion();
    selectedAnswer = null;
});
function finishQuiz() {
    let unanswered = 0;
for (let i = 0; i < questions.length; i++) {
    if (!submitted[i]) {
        unanswered++;
    }
};
console.log("Unanswered questions: " + unanswered);
console.log("Submitted array:", submitted);
console.log("Current question index:", curQuestionIndex);
let firstUnanswered = -1;
for (let i = 0; i < questions.length; i++) {
    if (!submitted[i]) {  //not submitted ha 
        firstUnanswered = i;
        break;  //loop ko yahin stop kar do
    }
}
    if (unanswered > 0) {  //Agar unanswered > 0 true hai, to finishQuiz() function yahin par stop ho jaye. return ka matlab “further code run karo” nahi, balki “function ko yahin se terminate/exit karo.”
        result.textContent = (`You have ${unanswered} unanswered questions.Please answer all questions before finishing.`);
        curQuestionIndex = firstUnanswered;
        showFunction();
        return;
    };
    function nextUnanswered() {
    for (let i = curQuestionIndex + 1; i < questions.length; i++) {
        if (!submitted[i]) {
            curQuestionIndex = i;
            showFunction();
            return;
        }
    }
}
    let percentage = (score / questions.length) * 100
    scoreElement.textContent = "Score : " + score;
    result.textContent = "Score :" + score + " / " +   questions.length;
    percentageElement.textContent = "Percentage : " + percentage + "%";
    quiz_content.style.display = "none";
    previous.style.display = "none";
    skip.style.display = "none";
    next.style.display = "none";
};
  restart.addEventListener("click", function() {
        curQuestionIndex = 0;
        selectedAnswer = null;
        score = 0;
        submitted = [];
        answers = [];
        scoreElement.textContent = "";
        result.textContent = "";
        percentageElement.textContent = "";
        quiz_content.style.display = "block";
        previous.style.display = "block";
        skip.style.display = "block";
        next.style.display = "block";
        showFunction();
    })
//System ko kaise pata chalega ke kaunse questions unanswered hain
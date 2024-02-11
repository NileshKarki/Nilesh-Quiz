const questions = [
  // Question 1
  {
    "question": "What is Python?",
    "answers": [
      { "text": "A snake species", "correct": false },
      { "text": "A programming language", "correct": true },
      { "text": "A board game", "correct": false },
      { "text": "A computer brand", "correct": false }
    ]
  },

  // Question 2
  {
    "question": "Which keyword is used to define a function in Python?",
    "answers": [
      { "text": "method", "correct": false },
      { "text": "def", "correct": true },
      { "text": "function", "correct": false },
      { "text": "define", "correct": false }
    ]
  },

  // Question 3
  {
    "question": "What is the output of the following code snippet?\n\nx = 10\ny = 5\nprint('x + y =', x + y)",
    "answers": [
      { "text": "x + y = 15", "correct": true },
      { "text": "x + y = 105", "correct": false },
      { "text": "x + y = '10 + 5'", "correct": false },
      { "text": "x + y = 'x + y'", "correct": false }
    ]
  },

  // Question 4
  {
    "question": "In Python, how do you create a single-line comment?",
    "answers": [
      { "text": "# This is a comment", "correct": true },
      { "text": "// This is a comment", "correct": false },
      { "text": "/* This is a comment */", "correct": false },
      { "text": "// This is a comment //", "correct": false }
    ]
  },

  // Question 5
  {
    "question": "What is the correct way to check if a key 'name' exists in a dictionary 'person'?",
    "answers": [
      { "text": "'name' in person", "correct": true },
      { "text": "person.exists('name')", "correct": false },
      { "text": "person.contains('name')", "correct": false },
      { "text": "person['name']", "correct": false }
    ]
  },

  // Question 6
  {
    "question": "Which Python module is used for working with dates and times?",
    "answers": [
      { "text": "time", "correct": false },
      { "text": "datetime", "correct": true },
      { "text": "dateutil", "correct": false },
      { "text": "timedelta", "correct": false }
    ]
  },

  // Question 7
  {
    "question": "What is the result of the following expression?\n\n5 + 3 * 2",
    "answers": [
      { "text": "16", "correct": false },
      { "text": "11", "correct": true },
      { "text": "13", "correct": false },
      { "text": "10", "correct": false }
    ]
  },

  // Question 8
  {
    "question": "Which method is used to remove the last element from a list in Python?",
    "answers": [
      { "text": "pop()", "correct": true },
      { "text": "remove()", "correct": false },
      { "text": "del()", "correct": false },
      { "text": "erase()", "correct": false }
    ]
  },

  // Question 9
  {
    "question": "What does the 'range()' function in Python do?",
    "answers": [
      { "text": "Generates a random number", "correct": false },
      { "text": "Creates a list of consecutive integers", "correct": true },
      { "text": "Finds the range of a dataset", "correct": false },
      { "text": "Rounds a floating-point number", "correct": false }
    ]
  },

  // Question 10
  {
    "question": "What does the 'len()' function in Python do?",
    "answers": [
      { "text": "Finds the length of a string", "correct": true },
      { "text": "Calculates the logarithm", "correct": false },
      { "text": "Finds the largest element in a list", "correct": false },
      { "text": "Counts the number of elements in a list", "correct": false }
    ]
  },

  // Question 11
  {
    "question": "What is the purpose of the 'if' statement in Python?",
    "answers": [
      { "text": "To define a function", "correct": false },
      { "text": "To loop over a sequence", "correct": false },
      { "text": "To perform arithmetic operations", "correct": false },
      { "text": "To make decisions based on conditions", "correct": true }
    ]
  },

  // Question 12
  {
    "question": "Which data type in Python is used to store an ordered collection of elements?",
    "answers": [
      { "text": "Dictionary", "correct": false },
      { "text": "Tuple", "correct": false },
      { "text": "List", "correct": true },
      { "text": "Set", "correct": false }
    ]
  },

  // Question 13
  {
    "question": "What is the output of the following code snippet?\n\nmy_string = 'Hello, World!'\nprint(my_string[7:])",
    "answers": [
      { "text": "World!", "correct": true },
      { "text": "Hello, ", "correct": false },
      { "text": "Hello", "correct": false },
      { "text": "Error: Index out of range", "correct": false }
    ]
  },

  // Question 14
  {
    "question": "Which Python function is used to read input from the user?",
    "answers": [
      { "text": "input()", "correct": true },
      { "text": "readline()", "correct": false },
      { "text": "get()", "correct": false },
      { "text": "user_input()", "correct": false }
    ]
  },

  // Question 15
  {
    "question": "What does the 'import' keyword do in Python?",
    "answers": [
      { "text": "Imports a function from another module", "correct": false },
      { "text": "Declares a new variable", "correct": false },
      { "text": "Includes a library or module for use in the program", "correct": true },
      { "text": "Defines a class", "correct": false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handalNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  // Display the final score or perform any desired action
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handalNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

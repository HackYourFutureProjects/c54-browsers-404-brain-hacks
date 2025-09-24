import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

let skipCounter = 0; //
let totalScore = 0; //

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  //M//  trying to get the key
  // const optionKey = currentQuestion.answers

  //
  document.getElementById(NEXT_QUESTION_BUTTON_ID).disabled = true; // disable Next Question at the start, before answering
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_BUTTON_ID)
    .addEventListener('click', skipQuestion);

  // Workin with options section
  document.querySelectorAll('.options-list').forEach((option) => {
    option.addEventListener('click', () => {
      //disable all the answers after chosing one
      document.getElementById(SKIP_BUTTON_ID).disabled = true;
      document.querySelectorAll('.options-list').forEach((i) => {
        i.style.pointerEvents = 'none';
        i.style.opacity = '0.5';
      });

      if (option.id === currentQuestion.correct) {
        // option.style.pointerEvents = "none";
        option.style.backgroundColor = 'green';
        option.style.opacity = '';
        totalScore += 1; // total Score to be added later to the last page
      } else {
        option.style.backgroundColor = 'red';
        option.style.opacity = '';
        document.getElementById(currentQuestion.correct).style.backgroundColor =
          'green';
      }

      document.getElementById(NEXT_QUESTION_BUTTON_ID).disabled = false; //enable Next question after answering
    });
  });
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    document.getElementById(NEXT_QUESTION_BUTTON_ID).innerText = 'Finish';
  }
};

//M//

const skipQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  skipCounter += 1;

  initQuestionPage();

  if (skipCounter === 3) {
    document.getElementById(SKIP_BUTTON_ID).disabled = true;

    //M// add here an action that after 3 skips the test fail and go to the last page
  }
};

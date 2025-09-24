import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.innerHTML = '';

  Object.entries(currentQuestion.answers).forEach(
    ([key, answerText], index) => {
      const li = document.createElement('li');
      li.className = 'w-full';
      li.innerHTML = `
      <button class="w-full py-4 px-6 
                     rounded-full 
                     border border-white 
                     bg-white/5 
                     text-white 
                     text-lg md:text-xl font-medium 
                     text-center 
                     hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 
                     hover:border-transparent 
                     transition-all duration-300">
        ${key}: ${answerText}
      </button>
    `;
      answersListElement.appendChild(li);
    }
  );

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex += 1;
  initQuestionPage();
};

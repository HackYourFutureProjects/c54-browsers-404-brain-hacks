import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  const savedData = localStorage.getItem('quizData');
  if (savedData) {
    const continueBtn = document.createElement('button');
    continueBtn.textContent = 'Continue Quiz';
    continueBtn.id = 'continue-quiz-btn';
    userInterface.appendChild(continueBtn);

    continueBtn.addEventListener('click', () => {
      initQuestionPage();
    });
  }
};

const startQuiz = () => {
  initQuestionPage();
};

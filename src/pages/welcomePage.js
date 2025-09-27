import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  USER_NAME_INPUT_ID,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

const soundstart = new Audio('../sounds/start.mp3');
export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  //  0 This code ensures that the Start button is disabled whenever the Name field is empty. for now it is disabled
  document.getElementById(START_QUIZ_BUTTON_ID).disabled = true;
  document.getElementById(USER_NAME_INPUT_ID).addEventListener('input', () => {
    if (document.getElementById(USER_NAME_INPUT_ID).value === '') {
      document.getElementById(START_QUIZ_BUTTON_ID).disabled = true;
    } else {
      document.getElementById(START_QUIZ_BUTTON_ID).disabled = false;
    }
  });

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  soundstart.play();
  setTimeout(initQuestionPage, 1000);
};

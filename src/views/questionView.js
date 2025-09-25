import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SKIP_BUTTON_ID } from '../constants.js';
import { COUNTDOWN_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  //M// takes a question object
  const element = document.createElement('div'); //M// creats a new div for the Q element

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question.text}</h1>
<p id="${COUNTDOWN_ID}"></p>
    <ul id="${ANSWERS_LIST_ID}">
     
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
           Next question
    </button>
    <button id="${SKIP_BUTTON_ID}"> Skip </button>
  `;

  return element;
};

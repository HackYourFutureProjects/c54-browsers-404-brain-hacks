  import {
    ANSWERS_LIST_ID,
    NEXT_QUESTION_BUTTON_ID,
    SKIP_QUESTION_BUTTON_ID,
    USER_INTERFACE_ID,
    SCORE_ID,
  } from '../constants.js';
  import { createQuestionElement } from '../views/questionView.js';
  import { quizData } from '../data.js';
  import { initResultsPage } from './resultsPage.js';

let uiBound = false;
function handleUIClick(e) {
  const ui = document.getElementById(USER_INTERFACE_ID);
  if (!ui.contains(e.target)) return;

  const nextBtn = e.target.closest(`#${NEXT_QUESTION_BUTTON_ID}`);
  const skipBtn = e.target.closest(`#${SKIP_QUESTION_BUTTON_ID}`);
  const answerBtn = e.target.closest('.answer-btn');

  // current question reference
  const idx = quizData.currentQuestionIndex;
  const current = quizData.questions[idx];
  if (!current) return;

  // Answer chosen
  if (answerBtn) {
    if (current.selected) return; // already answered/locked
    const chosenKey = answerBtn.dataset.key;
    current.selected = chosenKey;

    const answersList = document.getElementById(ANSWERS_LIST_ID);
    const buttons = [...answersList.querySelectorAll('.answer-btn')];

    if (chosenKey === current.correct) {
      answerBtn.classList.add('answer--correct');
      quizData.score += 1;
    } else {
      answerBtn.classList.add('answer--wrong');
      const correctBtn = buttons.find(b => b.dataset.key === current.correct);
      if (correctBtn) correctBtn.classList.add('answer--correct-hint');
    }

    // lock all answer buttons
    buttons.forEach(b => {
      b.classList.add('answer--locked');
      b.disabled = true;
    });

    // update live score
    const scoreEl = document.getElementById(SCORE_ID);
    if (scoreEl) {
      scoreEl.textContent = `Score: ${quizData.score}/${quizData.questions.length}`;
    }
    return;
  }

  // Next
  if (nextBtn) {
    quizData.currentQuestionIndex += 1;
    initQuestionPage();
    return;
  }

  // Skip (no score)
  if (skipBtn) {
    if (!current.selected) current.selected = 'skipped';
    quizData.currentQuestionIndex += 1;
    initQuestionPage();
    return;
  }
}

export const initQuestionPage = () => {
  const ui = document.getElementById(USER_INTERFACE_ID);
  ui.innerHTML = '';

  // final page?
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    initResultsPage();
    return;
  }

  const current = quizData.questions[quizData.currentQuestionIndex];

  // render question container
  const questionEl = createQuestionElement(
    current.text,
    quizData.currentQuestionIndex + 1,
    quizData.questions.length
  );
  ui.appendChild(questionEl);

  // render answers for current question
  const list = document.getElementById(ANSWERS_LIST_ID);
  Object.entries(current.answers).forEach(([key, text]) => {
    const li = document.createElement('li');
    li.className = 'w-full';
    li.innerHTML = `
      <button
        class="answer-btn w-full py-4 px-6 rounded-full border border-white bg-white/5 text-white text-lg md:text-xl font-medium text-center"
        type="button"
        data-key="${key}"
      >
        ${key}: ${text}
      </button>
    `;
    list.appendChild(li);
  });

  const scoreEl = document.getElementById(SCORE_ID);
  if (scoreEl) {
    scoreEl.textContent = `Score: ${quizData.score}/${quizData.questions.length}`;
  }

  if (!uiBound) {
    document.addEventListener('click', handleUIClick);
    uiBound = true;
  }
};

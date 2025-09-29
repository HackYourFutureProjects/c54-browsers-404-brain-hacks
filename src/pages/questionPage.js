import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_ID,
  COUNTDOWN_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { quizData } from '../data.js';
import { initResultsPage } from './resultsPage.js';
import { startTotalTimer } from './timer.js';

const soundCorrect = new Audio('../sounds/correct.mp3');
const soundNext = new Audio('../sounds/next.mp3');
const soundSkip = new Audio('../sounds/skip.mp3');
const soundTimer = new Audio('../sounds/timer.mp3');
const soundWrong = new Audio('../sounds/wrong.mp3');

let uiBound = false;
let skipCounter = 0; // counts how many times user skipped
let countdown = 15;
let timer;

const quizTimer = () => {
  countdown--;

  const timerEl = document.getElementById(COUNTDOWN_ID);
  if (timerEl) {
    timerEl.textContent = `Time left: ${countdown}`;
  }

  if (countdown <= 5 && countdown > 0) {
    soundTimer.play();
  }

  if (countdown <= 0) {
    clearInterval(timer);
    alert('Time is up');
    skipCounter++;
    quizData.currentQuestionIndex += 1;
    initQuestionPage();
  }
};

// End of timer

function handleUIClick(e) {
  const ui = document.getElementById(USER_INTERFACE_ID);
  if (!ui.contains(e.target)) return;

  const nextBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  const skipBtn = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  const answerBtn = e.target.closest('.answer-btn');

  const idx = quizData.currentQuestionIndex;
  const current = quizData.questions[idx];
  if (!current) return;

  // Answer chosen
  if (answerBtn) {
    if (current.selected) return; // already answered/locked
    const chosenKey = answerBtn.dataset.key;
    current.selected = chosenKey;
    // clearInterval(timer);
    // soundTimer.pause();

    const answersList = document.getElementById(ANSWERS_LIST_ID);
    const buttons = [...answersList.querySelectorAll('.answer-btn')];

    if (chosenKey === current.correct) {
      soundCorrect.play();
      answerBtn.classList.add('answer--correct');
      quizData.score += 1;
    } else {
      soundWrong.play();
      answerBtn.classList.add('answer--wrong');
      const correctBtn = buttons.find((b) => b.dataset.key === current.correct);
      if (correctBtn) correctBtn.classList.add('answer--correct-hint');
    }

    // lock all answer buttons
    buttons.forEach((b) => {
      b.disabled = true;
    });

    // enable Next button after choosing an answer
    if (nextBtn) nextBtn.disabled = false;

    // disable Skip after choosing an answer
    if (skipBtn) skipBtn.disabled = true;

    // update live score
    const scoreEl = document.getElementById(SCORE_ID);
    if (scoreEl) {
      scoreEl.textContent = `Score: ${quizData.score}/${quizData.questions.length}`;
    }

    localStorage.setItem(
      'quizData',
      JSON.stringify({
        questions: quizData.questions,
        score: quizData.score,
        currentQuestionIndex: quizData.currentQuestionIndex,
      })
    );

    return;
  }

  // Next
  if (nextBtn && e.target.closest(`#${NEXT_QUESTION_BUTTON_ID}`)) {
    if (!current.selected) {
      return;
    }
    soundNext.play(); // play Next sound effect
    quizData.currentQuestionIndex += 1;

    localStorage.setItem(
      'quizData',
      JSON.stringify({
        questions: quizData.questions,
        score: quizData.score,
        currentQuestionIndex: quizData.currentQuestionIndex,
      })
    );

    setTimeout(initQuestionPage, 500);

    return;
  }

  // Skip (no score)
  if (skipBtn && e.target.closest(`#${SKIP_QUESTION_BUTTON_ID}`)) {
    skipCounter += 1;
    soundSkip.play(); // play the skip sound effect
    if (skipCounter >= 3) {
      alert('You have skipped 3 times. Quiz is ended');
      initResultsPage();
      return;
    }

    if (!current.selected) current.selected = 'skipped';
    quizData.currentQuestionIndex += 1;

    localStorage.setItem(
      'quizData',
      JSON.stringify({
        questions: quizData.questions,
        score: quizData.score,
        currentQuestionIndex: quizData.currentQuestionIndex,
      })
    );

    setTimeout(initQuestionPage, 600); // short delay so the sound plays before moving to the next Q

    return;
  }
}

export const initQuestionPage = () => {
  // stop previous timer and reset countdown
  clearInterval(timer);
  countdown = 15;

  // start timer for current question
  timer = setInterval(quizTimer, 1000);

  // Reset skip counter at the beginning of the game
  if (quizData.currentQuestionIndex === 0) {
    skipCounter = 0;
  }

  const ui = document.getElementById(USER_INTERFACE_ID);
  ui.innerHTML = '';

  // final page
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    initResultsPage();
    return;
  }

  const current = quizData.questions[quizData.currentQuestionIndex];

  // render question container
  const questionEl = createQuestionElement(
    current.text,
    quizData.currentQuestionIndex + 1,
    quizData.questions.length,
    skipCounter,
    timer
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

  // live score text
  const scoreEl = document.getElementById(SCORE_ID);
  if (scoreEl) {
    scoreEl.textContent = `Score: ${quizData.score}/${quizData.questions.length}`;
  }

  startTotalTimer();
  // show initial timer value
  const timerEl = document.getElementById(COUNTDOWN_ID);
  if (timerEl) {
    timerEl.textContent = `Time left: ${countdown}`;
  }

  // disable Next button at the start
  const nextBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  if (nextBtn) nextBtn.disabled = true;

  // enable Skip button at start of question
  const skipBtn = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  if (skipBtn) skipBtn.disabled = false;

  // bind the delegated listener once
  if (!uiBound) {
    document.addEventListener('click', handleUIClick);
    uiBound = true;
  }
};

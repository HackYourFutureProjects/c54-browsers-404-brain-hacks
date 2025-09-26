import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { initQuestionPage } from './questionPage.js';

export const initResultsPage = () => {
  const container = document.getElementById(USER_INTERFACE_ID);

  const savedData = JSON.parse(localStorage.getItem('quizData'));
  const total = savedData
    ? savedData.questions.length
    : quizData.questions.length;
  const score = savedData ? savedData.score : quizData.score;

  container.innerHTML = `
    <div class="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Quiz Complete!</h2>
      <p class="text-white/90 mb-8 text-center">Your score: <span class="font-semibold">${score}</span> / ${total}</p>
      <button id="try-again" class="bg-gradient-to-r from-custom-green to-custom-green-dark text-black font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 min-w-[200px]">
          Try Again
      </button>
    </div>
  `;

  container.querySelector('#try-again').addEventListener('click', () => {
    localStorage.removeItem('quizData');
    quizData.reset();
    initQuestionPage();
  });
};

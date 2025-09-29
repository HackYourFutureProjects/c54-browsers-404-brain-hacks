import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { initQuestionPage } from './questionPage.js';
import { stopTotalTimer, totalStartTime } from './timer.js';
import { initWelcomePage } from './welcomePage.js';

export const initResultsPage = () => {
  const container = document.getElementById(USER_INTERFACE_ID);

  const savedData = JSON.parse(localStorage.getItem('quizData'));
  const total = savedData
    ? savedData.questions.length
    : quizData.questions.length;
  const score = savedData ? savedData.score : quizData.score;

  const totalElapsed = Math.floor((Date.now() - totalStartTime) / 1000);

  container.innerHTML = `
    <div class="flex flex-col items-center justify-center min-h-screen px-4">
    <h2 class="text-[24px] md:text-[28px] lg:text-[36px] font-bold text-white mb-4 text-center">
      Quiz Complete!
    </h2>
  
    <div class="w-full max-w-md mb-8">
      <canvas id="resultsChart" class="w-full h-60 sm:h-72 md:h-80 lg:h-96"></canvas>
    </div>

    <p class="text-white/90 mb-8 text-center">
      Your score: <span class="font-semibold">${score}</span> / ${total}
    </p>

  <p class="text-white/90 mb-4 text-center px-4 py-2 bg-bluur border border-gray-500 font-semibold rounded-full shadow-lg text-lg md:text-xl flex items-center justify-center gap-2">
    You completed the quiz in <span class="font-semibold">${totalElapsed}</span> seconds.
  </p>

  <button
    id="try-again"
    class="bg-gradient-to-r from-custom-green to-custom-green-dark text-black font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
  >
    Try Again
  </button>
</div>
  `;

  stopTotalTimer();

  const ctx = document.getElementById('resultsChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: savedData
        ? savedData.questions.map((_, i) => `Q${i + 1}`)
        : quizData.questions.map((_, i) => `Q${i + 1}`),
      datasets: [
        {
          label: 'Correct Answers',
          data: (savedData ? savedData.questions : quizData.questions).map(
            (q) => (q.selected === q.correct ? 1 : 0)
          ),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: { stepSize: 1 },
          min: 0,
          max: 1,
        },
        x: {
          ticks: { color: 'white' },
        },
      },
      plugins: {
        legend: {
          labels: { color: 'white' },
        },
      },
    },
  });
  container.querySelector('#try-again').addEventListener('click', () => {
    localStorage.removeItem('quizData');
    quizData.reset();
    initWelcomePage();
  });
};

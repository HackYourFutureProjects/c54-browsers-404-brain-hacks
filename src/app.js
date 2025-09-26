import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const saved = localStorage.getItem('quizData');
  if (saved) {
    const savedData = JSON.parse(saved);
    quizData.currentQuestionIndex = savedData.currentQuestionIndex;
    quizData.score = savedData.score;
    quizData.questions.forEach((q, i) => {
      q.selected = savedData.questions[i].selected;
    });
  } else {
    quizData.currentQuestionIndex = 0;
    quizData.score = 0;
    quizData.questions.forEach((q) => (q.selected = null));
  }

  initWelcomePage();

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'start-quiz-btn') {
      initQuestionPage();
    }
  });
};

window.addEventListener('load', loadApp);

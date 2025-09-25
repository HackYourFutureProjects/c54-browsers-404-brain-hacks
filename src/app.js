import {quizData} from './data.js';
import {initWelcomePage} from './pages/welcomePage.js';
import {initQuestionPage} from './pages/questionPage.js';

const loadApp = () => {
    quizData.currentQuestionIndex = 0;

    initWelcomePage();

    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'start-quiz-btn') {
            initQuestionPage();
        }
    });
};

window.addEventListener('load', loadApp);

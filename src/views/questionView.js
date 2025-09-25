import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_ID } from '../constants.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, index, total) => {
    const element = document.createElement('div');

    element.innerHTML = String.raw`
      <div class="flex flex-col items-center justify-center min-h-screen px-4">
  <div class="w-full max-w-3xl mb-6">
    <div class="flex items-center justify-between mb-2">
      <div id="${SCORE_ID}" class="text-white/90 font-semibold text-lg md:text-xl">Score: 0/${total}</div>
      <div class="text-white/70 text-lg md:text-xl">Q ${index} / ${total}</div>
    </div>
    <div class="w-full bg-white/20 rounded-full h-4">
      <div
        id="progress-bar"
        class="bg-gradient-to-r from-custom-green to-custom-green-dark  h-4 rounded-full transition-all duration-500"
        style="width: ${(index / total) * 100}%"
      ></div>
    </div>
  </div>

        <h1 class="text-white text-[18px] md:text-[22px] lg:text-[26px] font-bold mb-8 text-center">
          ${question}
        </h1>


        <ul id="${ANSWERS_LIST_ID}" class="w-full text-[12px] md:text-[14px] lg:text-[16px] space-y-4 mb-12">
      
        </ul>

        <div class="flex gap-4 flex-wrap justify-center">
        <button
          id="${SKIP_QUESTION_BUTTON_ID}"
          class="text-white border border-custom-green bg-transparent backdrop-blur-sm font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
        Skip
        </button>
          
          <button 
            id="${NEXT_QUESTION_BUTTON_ID}" 
            class="bg-gradient-to-r from-custom-green to-custom-green-dark text-black font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
              NEXT
            </button>
            
            </div>
            
        
        </div>
    `;

    return element;
};

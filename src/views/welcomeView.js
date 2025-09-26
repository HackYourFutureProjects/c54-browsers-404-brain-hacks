import { START_QUIZ_BUTTON_ID, USER_NAME_INPUT_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`

    <div class="flex justify-center mt-[5vh] md:mt-[10vh]">
  <img src="./public/images/logo.svg" alt="logo" class="h-24 sm:h-32 md:h-40 lg:h-50 w-auto animate-pulse-logo">
    </div>

      <h2 class="text-white text-lg hover:text-orange-500 font-medium mb-8 tracking-widest">404 BRAIN HACKS</h2>
      
     <h1 class="text-white text-[44px] md:text-[48px] lg:text-[72px] font-bold mb-6 tracking-wide text-center 
           transition-colors duration-500 ease-in-out hover:text-orange-600">
    QUIZ IQ PROGRAMMING
</h1>

<p class="text-white/90 text-[16px] md:text-[18px] lg:text-[20px] mb-12 max-w-md mx-auto 
          transition-colors duration-500 ease-in-out hover:text-orange-600">
    This project is an interactive quiz with 10 questions and four answer options for each.
</p>
      
      <button 
          id="${START_QUIZ_BUTTON_ID}"
          class="w-full max-w-md bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:scale-105 mb-6"
      >
          START
      </button>
      
      <input 
          type="text" 
          id="${USER_NAME_INPUT_ID}"
          placeholder="WRITE YOUR NAME"
        class="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 py-4 px-6 rounded-full text-center font-medium text-lg outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
    />
    
    <p class="text-white/70 hover:text-orange-500 text-[14px] md:text-[16px] lg:text-[18px] mt-8 max-w-md mx-auto">
        It helps users test their knowledge of the DOM and JavaScript in a fun way.
    </p>
    
    <p class="text-white/50 text-[12px] md:text-[14px] lg:text-[16px] mt-8">
        &copy; 2025 404 brain hacks. All rights reserved.<br>
    </p>
  `;
  return element;
};

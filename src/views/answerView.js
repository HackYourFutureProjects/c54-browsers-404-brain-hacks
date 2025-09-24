
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  // const optionKey = key;   it didnt work
  
  element.id=key;
  
  //  element.id=`option-${key}`;
   element.classList.add("options-list");
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');

  element.id = key;

  element.classList.add('options-list');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};

const buttonOpenAnswer = document.querySelectorAll('.questions__list-item-container');

buttonOpenAnswer.forEach((button) => {
  let answer = button.nextElementSibling;
  let icon = button.lastElementChild;

  button.addEventListener('click', () => {
    answer.classList.toggle('questions__list-item-answer_visible');
    icon.classList.toggle('questions__list-item-button_answer-visible');
  })
});
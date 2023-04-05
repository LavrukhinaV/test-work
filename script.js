const buttonOpenAnswer = document.querySelectorAll('.questions__list-item-container');

buttonOpenAnswer.forEach((button) => {
  let content = button.nextElementSibling;
  let icon = button.lastElementChild;

  button.addEventListener('click', () => {
    content.classList.toggle('questions__list-item-answer_visible');
    icon.classList.toggle('questions__list-item-button_content-visible');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
});
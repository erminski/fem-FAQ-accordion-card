const questions = document.querySelectorAll('.question-title');

questions.forEach(function (question) {
  question.addEventListener('click', function (e) {
    const questionTitle = e.currentTarget;
    const answer =
      questionTitle.nextElementSibling.querySelector('.answer-text');

    // collapsing other questions
    questions.forEach(function (otherQuestion) {
      if (otherQuestion !== question) {
        otherQuestion.classList.remove('active');
        console.log(otherQuestion.nextElementSibling);
        otherQuestion.nextElementSibling
          .querySelector('.answer-text')
          .classList.add('hidden');
      }
    });

    if (questionTitle && answer) {
      questionTitle.classList.toggle('active');
      answer.classList.toggle('hidden');
    }
  });
});

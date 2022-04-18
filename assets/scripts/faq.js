const faqQuestions = document.querySelectorAll('faq-question]');
const hideAnswer = document.querySelectorAll('[answer-hide]');
const revealAnswer = document.querySelectorAll('[answer-reveal]');
const faqAnswers = document.querySelectorAll('[faq-answer]');

const activeFAQ = new FAQ(faqQuestions,faqAnswers)

hideAnswer.forEach(button => {
  button.addEventListener('click', ()=>{
    hideAnswer.setAttribute('id', 'hideAnswerBtn');
    hideAnsweBtn.style.display = "block"

  })
});

revealAnswer.forEach(button => {
  button.addEventListener('click', ()=>{
    
  })
});

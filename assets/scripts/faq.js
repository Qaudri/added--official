const faqQuestions = document.querySelectorAll('[faq-question]');
const hideAnswer = document.querySelectorAll('[answer-hide]');
const revealAnswer = document.querySelectorAll('[answer-reveal]');
const faqAnswers = document.querySelectorAll('[faq-answer]');

// const activeFAQ = new FAQ(faqQuestions,faqAnswers)

hideAnswer.forEach(image => {
  image.addEventListener('click', ()=>{
    hideAnswer.setAttribute('id', 'hideAnswerBtn');
    hideAnswerBtn.style.display = "block"
    console.log("clicked")

  })
});

revealAnswer.forEach(button => {
  button.addEventListener('click', ()=>{
    
  })
});

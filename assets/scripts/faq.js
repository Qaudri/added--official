class FAQ{
  constructor(faqQuestions,faqAnswers){
    this.theFaqQuestions = faqQuestions;
    this.theFaqAnswers = faqAnswers;
    this.hideAnswerBtn = hideAnswer;
    this.revealAnswerBtn = revealAnswer;
  }
}

const faqQuestions = document.querySelectorAll('[faq-question]');
const hideAnswer = document.querySelectorAll('[answer-hide]');
const revealAnswer = document.querySelectorAll('[answer-reveal]');
const faqAnswers = document.querySelectorAll('[faq-answer]');

// const activeFAQ = new FAQ(faqQuestions,faqAnswers)

hideAnswer.forEach(button => {
  button.addEventListener('click', ()=>{
    hideAnswer.setAttribute('id', 'hideAnswerBtn');
    hideAnswerBtn.style.display = "block"
    console.log("clicked")

  })
});

revealAnswer.forEach(button => {
  button.addEventListener('click', ()=>{
    
  })
});

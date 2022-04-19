class FAQ{
  constructor(faqQuestions,faqAnswers){
    this.theFaqQuestions = faqQuestions
    this.theFaqAnswers = faqAnswers
    this.hideAnswerBtn = hideAnswer
    this.revealAnswerBtn = revealAnswer
  }
}

// NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;



const faqQuestions = document.querySelectorAll('[faq-question]');
const hideAnswer = document.querySelectorAll('[answer-hide]');
const revealAnswer = document.querySelectorAll('[answer-reveal]');
const faqAnswers = document.querySelectorAll('[faq-answer]');

// const activeFAQ = new FAQ(faqQuestions,faqAnswers)

revealAnswer.forEach(item => {
  item.addEventListener('click', ()=>{
  item.setAttribute("id","revealAnswerButton");
  this.revealAnswerButton.style.display = "none"
  console.log("clicked");
  })

  hideAnswer.forEach(button => {
    button.addEventListener('click', ()=>{
      button.setAttribute("id","hideAnswerButton");
      hideAnswerButton.style.display = "block"
      console.log("clicked")
    })
  });
});



class FAQ{
  constructor(faqQuestions,faqAnswers,hideAnswer,revealAnswer){
    this.theFaqQuestions = faqQuestions
    this.theFaqAnswers = faqAnswers
    this.hideAnswerBtn = hideAnswer
    this.revealAnswerBtn = revealAnswer
    this.answerRevealed = Boolean
  }

  // showAnswer(hideAnswerBtn,revealAnswerBtn){
  //   revealAnswerBtn
  // }
}

NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;


const faqQuestions = document.querySelectorAll('[faq-question]');
const hideAnswer = document.querySelectorAll('[answer-hide]');
const revealAnswer = document.querySelectorAll('[answer-reveal]');
const faqAnswers = document.querySelectorAll('[faq-answer]');

const activeFAQ = new FAQ(faqQuestions,faqAnswers)

function toggleButtons(revealAnswer,hideAnswer) {
  if (activeFAQ.answerRevealed == true) {
    revealAnswer.style.display = "none"

  }
}


answerRevealed = false;

revealAnswer.forEach(item => {
  item.addEventListener('click', ()=>{
  item.setAttribute("id","revealAnswerButton");
  activeFAQ.answerRevealed = true;
  console.log(activeFAQ.answerRevealed)

  })
});

hideAnswer.forEach(button => {
  button.addEventListener('click', ()=>{
    button.setAttribute("id","hideAnswerButton");
    // console.log("clicked")
    if (answerRevealed = true) {
      hideAnswerButton.style.display = "block";
    }
  })
});



function showAnswer(faqQuestions,faqAnswers,hideAnswer,revealAnswer){

    if (this.answerRevealed = true){
      console.log("answerRevealed")
    }
  
}
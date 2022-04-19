NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;


const faqQuestions = document.querySelectorAll('[faq-question]');
const hideAnswer = document.querySelectorAll('[answer-hide]');
const revealAnswer = document.querySelectorAll('[answer-reveal]');
const faqAnswers = document.querySelectorAll('[faq-answer]');

const activeFAQ = new FAQ(faqQuestions,faqAnswers)


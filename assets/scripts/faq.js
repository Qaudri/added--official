var faq = document.getElementsByClassName("faq");
var answer = document.getElementById("answer");
var revealBtn = document.getElementById("reveal");
var hideBtn = document.getElementById("hide");
var i;
var r;
var h;
var a;

for (i = 0; i < faq.length; i++) {
    faq = array[i];
}

revealBtn.addEventListener("click", function () {
    revealBtn.style.display = "none";
    hideBtn.style.display = "block";
    answer.classList.add("faq-slide-down");
    answer.style.display = "block"
});


hideBtn.addEventListener("click", function () {
    revealBtn.style.display = "block";
    hideBtn.style.display = "none";
    answer.classList.replace("faq-slide-down", "faq-slide-up");
    setTimeout(() => {
        answer.style.display = "none";
        answer.classList.remove("faq-slide-up");
    }, 250);
});
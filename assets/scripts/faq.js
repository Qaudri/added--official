var faq = document.getElementsByClassName("faq");
var i;

for (i = 0; i < faq.length; i++) {
    const answer = document.getElementById("answer");
    const revealBtn = document.getElementById("reveal");
    const hideBtn = document.getElementById("hide");

    revealBtn.addEventListener("click", function () {
        revealBtn.style.display = "none";
        hideBtn.style.display = "block";
        answer.style.display = "block"
    });

    hideBtn.addEventListener("click", function () {
        revealBtn.style.display = "block";
        hideBtn.style.display = "none";
        answer.style.display = "none"
    })
}
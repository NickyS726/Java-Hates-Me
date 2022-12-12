var score = 0;

var scoreText = document.getElementById("value");

function changeScore () {
    score = score+1;
    scoreText.innerText = score;
}
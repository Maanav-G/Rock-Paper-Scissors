let scoreUser = 0;
let scoreComp = 0;
const scoreUser_span = document.getElementById("scoreuser");
const scoreComp_span = document.getElementById("scorecomp");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const numberRandom = Math.floor(Math.random() * 3);
    return choices [numberRandom];
}

function convertWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const user_div = document.getElementById(userChoice);
    scoreUser++;
    scoreUser_span.innerHTML = scoreUser;
    scoreComp_span.innerHTML = scoreComp;
    result_p.innerHTML = `${convertWord(userChoice)}${smallUser} beats ${convertWord(compChoice)}${smallComp}. You win!`;
    user_div.classList.add('green');
    setTimeout(() => user_div.classList.remove('green'), 400)
}

function lose(userChoice, compChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const user_div = document.getElementById(userChoice);
    scoreComp++;
    scoreUser_span.innerHTML = scoreUser;
    scoreComp_span.innerHTML = scoreComp;
    result_p.innerHTML = `${convertWord(userChoice)}${smallUser} loses to ${convertWord(compChoice)}${smallComp}. You lose.`;
    user_div.classList.add('red');
    setTimeout(() => user_div.classList.remove('red'), 400)
}

function draw(userChoice, compChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const user_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertWord(userChoice)}${smallUser} clashes with ${convertWord(compChoice)}${smallComp}. It's a draw.`;
    user_div.classList.add('grey');
    setTimeout(() => user_div.classList.remove('grey'), 400)
}

function game(userChoice) {
    const compChoice = getCompChoice();

    console.log("user choice - " + userChoice);
    console.log("comp choice - " + compChoice);

    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();



let userScore = 0;
let compScore = 0;


let ourChoices = document.querySelectorAll(".choice");
let changeMessage = document.querySelector("#msg");
let UserData = document.querySelector("#user-score");
let compData = document.querySelector("#comp-score");

const computerChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return arr[randIdx];
}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        changeMessage.innerText = "You won";
        changeMessage.style.backgroundColor = "green";
        UserData.innerText = userScore;
        console.log("you win");
    }
    else {
        compScore++;
        compData.innerText = compScore;
        changeMessage.innerText = "You lose";
        changeMessage.style.backgroundColor = "red";
        console.log("you lose");
    }
}
const getWinner = (userChoice) => {
    const compChoice = computerChoice();
    let userWin;
    if (userChoice === compChoice) {
        changeMessage.innerText = "Play again it is a draw";
        changeMessage.style.backgroundColor = "yellow";
        console.log("it is a draw");
    }
    else {
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

ourChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice is clicked", choiceId);
        getWinner(choiceId);
    });
});
const rock = document.getElementById("rock");
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const resultDiv = document.getElementById("result")
const scoreDiv = document.getElementById("score")
 


let humanScore = 0;
let computerScore = 0;

//computer choice 

const getComputerChoice = ()=>{
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

//play round

function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
         result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    updateScore(result)
}

//human choice 

rock.addEventListener("click",()=>{
    playRound("rock",getComputerChoice())
})

paper.addEventListener("click",()=>{
    playRound("paper",getComputerChoice())
})

scissors.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice())
})




//computer choice 

const computerChoice = ()=>{
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

//human choice 

const humanChoice = () => {
    const choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
    return choice
}


let humanScore=0;
let computerScore=0;


/*
Randomly returns either "rock", "paper", or "scissors"
*/
function getComputerChoice()
{
    //come up with a random integer number either 0, 1, or 2
    //Math.random generates a float between 0 and 1.
    //floor rounds down
    const rand=(Math.floor(Math.random() * 3));

    if (rand===0)
    {
        return "rock";
    }
    else if (rand===1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

/*
Asks user to choose between rock, paper, and scissors. Then returns the user's input
*/
function getHumanChoice()
{
    let userChoice = prompt("rock, paper, or scissors: ");

    return userChoice;
}



/*
Displays who won the round and increments the correct score variable
*/
function playRound(humanChoice, computerChoice)
{
    const humanChoiceLower=humanChoice.toLowerCase();
    if (humanChoiceLower===computerChoice)
    {
        console.log("It was a tie! You each chose "+computerChoice);
    }
    //if human won
    else if ((humanChoiceLower==="rock" && computerChoice==="scissors") ||
    (humanChoiceLower==="paper" && computerChoice==="rock") ||
    (humanChoiceLower==="scissors" && computerChoice==="paper"))
    {
        console.log("You win! "+humanChoiceLower+" beats "+computerChoice);
        humanScore+=1;
    }
    else
    {
        console.log("You lose! "+computerChoice+" beats "+humanChoiceLower);
        computerScore+=1;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

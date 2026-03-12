playGame();

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
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function

Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/

function playGame()
{
    let humanScore=0;
    let computerScore=0;

        
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


    //play 5 rounds
    /*
    for (let i=0; i<5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
    */

    if (humanScore==computerScore)
    {
        console.log("The game was a tie! You each won "+humanScore+" rounds");
    }
    else if (humanScore>computerScore)
    {
        console.log("You win! You won "+humanScore+" rounds and computer won "+computerScore+" rounds.");
    }
    else
    {
        console.log("You lose! You won "+humanScore+" rounds and computer won "+computerScore+" rounds.");
    }
    

}
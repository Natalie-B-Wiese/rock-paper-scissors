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


function playGame()
{
    const POINTS_TO_WIN=5;
    let humanScore=0;
    let computerScore=0;

    updateScoreTextContent();
    
    //makes the text display the values of human score and computer score variables
    //called whenever score changes
    function updateScoreTextContent()
    {
        const humanScoreText=document.querySelector("#humanScore");
        const computerScoreText=document.querySelector("#computerScore");
        humanScoreText.textContent=humanScore;
        computerScoreText.textContent=computerScore;

        if (humanScore==POINTS_TO_WIN || computerScore==POINTS_TO_WIN)
        {
            displayGameWinner();

            //disable buttons
            choiceButtons.forEach((choiceButton) => {
                choiceButton.removeEventListener("click", handleChoice);
                choiceButton.disabled=true;
            });
        }
    }
    

    const resultsDiv=document.querySelector("#results");

    //make all 3 choice buttons (rock, paper, and scissors) call handleChoice function when clicked on
    const choiceButtons = document.querySelectorAll(".choiceBtn");
    choiceButtons.forEach((choiceButton) => {
        choiceButton.addEventListener("click", handleChoice);
    });


    function handleChoice(e)
    {
        //call playRound passing in the parameter of the clicked button's text (eg Rock, Paper, Scissors)
        const playerSelection=e.target.innerHTML;
        playRound(playerSelection);
    } 
        
    /*
    Displays who won the round and increments the correct score variable
    */
    function playRound(humanChoice)
    {
        const computerChoice=getComputerChoice();
        const humanChoiceLower=humanChoice.toLowerCase();

        let roundResultParagraph=document.createElement("p");

        if (humanChoiceLower===computerChoice)
        {
            roundResultParagraph.textContent = "It was a tie! You each chose "+computerChoice;
        }
        //if human won
        else if ((humanChoiceLower==="rock" && computerChoice==="scissors") ||
        (humanChoiceLower==="paper" && computerChoice==="rock") ||
        (humanChoiceLower==="scissors" && computerChoice==="paper"))
        {
            roundResultParagraph.textContent="You win! "+humanChoiceLower+" beats "+computerChoice;
            humanScore+=1;
        }
        else
        {
            roundResultParagraph.textContent="You lose! "+computerChoice+" beats "+humanChoiceLower;
            computerScore+=1;
        }

        resultsDiv.appendChild(roundResultParagraph);
        updateScoreTextContent();

    }


    function displayGameWinner()
    {
        let gameResultsParagraph=document.createElement("p");

        if (humanScore==computerScore)
        {
            gameResultsParagraph.textContent="The game was a tie! You each won "+humanScore+" rounds";
        }
        else if (humanScore>computerScore)
        {
            gameResultsParagraph.textContent="You win! You won "+humanScore+" rounds and computer won "+computerScore+" rounds.";
        }
        else
        {
            gameResultsParagraph.textContent="You lose! You won "+humanScore+" rounds and computer won "+computerScore+" rounds.";
        }

        resultsDiv.appendChild(gameResultsParagraph);
    }
    

}
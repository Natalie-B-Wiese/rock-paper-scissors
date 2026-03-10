console.log(getComputerChoice());

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
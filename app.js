let playerChoice;

    let choice;

    let keepGoing = true;

    let computerChoiceNumber;

    let computerChoice;

    function getComputerChoice()
    {
        computerChoiceNumber = Math.floor(Math.random() * 3) + 1;

        return computerChoiceNumber;
    }
    
    function getChoice(choice)
    {
        if (choice === 1)
        {
            return "rock";
        }    
        else if (choice === 2)
        {
            return "paper";
        }
        else if (choice === 3)
        {
            return "scissors";
        }
        return choice;
    }

    function getPlayerChoice()
    {
        while (keepGoing) 
        {
            choice = parseInt(prompt("1 for rock, 2 for paper , 3 for scissors"));

            if (choice === 1 || choice === 2 || choice === 3) {
                playerChoice = getChoice(choice);
                keepGoing = false;
            }
            else {
                alert("Wrong Choice! Try Again.");
            }

        }

        return playerChoice;
    }


    let computerScore = 0;
    let playerScore = 0;

    function playRound()
    {

        computerChoice = getChoice(getComputerChoice());
        playerChoice = getPlayerChoice();

        console.log(`You chose ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        if (computerChoice === "rock")
        {
            if (playerChoice === "paper")
            {
                playerScore++;
                console.log("You won! paper beats rock");
            }
            else if (playerChoice === "scissors")
            {
                computerScore++;
                console.log("You lose! rock beats scissors");
            }
            else
            {
                console.log("it's a tie!");
            }
        }
        
        else if (computerChoice === "paper")
        {
            if (playerChoice === "rock")
            {
                computerScore++;
                console.log("You lose! paper beats rock.")
            }
            else if(playerChoice === "scissors")
            {
                playerScore++;
                console.log("You won! scissors beats paper");
            }
            else
            {
                console.log("It's a tie.");
            }
        }
        else
        {
            if (playerChoice === "rock")
            {
                playerScore++;
                console.log("You won! rock beats scissors");
            }
            else if (playerChoice === "paper")
            {
                computerScore++;
                console.log("You lose! scissors beats paper.");
            }
            else
            {
                console.log("It's a tie");
            }
        }

        console.log(`Computer score = ${computerScore} ::: Player Score ${playerScore}`);
    }

    playRound();
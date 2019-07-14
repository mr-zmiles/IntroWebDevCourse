/*
    Name: Zach Miles
    Date Created: 7/13/2019
    Most recent revision: 7/14/19
*/



//Global variables to track total rolls before going broke, highest amount won, and roll count at highest amount won
var totalDiePairRolls = 0;
var highestAmountWon = 0;
var rollCountAtMax = 1;

/*
Purpose: Process contents of startingBet after player press "Play" submitButton. This includes:
validating player's startingBet, returning results of game, and resetting game.
Input- nothing
Output- output
*/
function processPlay(){
  //If user has played game before (submit button will read "Play Again") reset global variables
  if((document.getElementById("submitButton").innerText) == "Play")
  {

  //Check to make sure user has entered a starting bet greater than 0
  startingBet = (document.forms["luckySevens"]["startingBet"].value);
  if(startingBet == "" || isNaN(startingBet))
  {
    alert("Starting Bet must be filled in with a number greater than 0.");
    document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["luckySevens"]["startingBet"].focus();
    return false;
  }
  startingBet = Number(startingBet);
  highestAmountWon = startingBet;
  playLuckySevens(startingBet);
  //After player has run out of money to bet, display Results
  document.getElementById("gameResults").style.display = "block";
  document.getElementById("sBet").innerText = "$" + startingBet;
  document.getElementById("totalRolls").innerText = totalDiePairRolls;
  document.getElementById("highestAmount").innerText = "$" + highestAmountWon;
  document.getElementById("rollCount").innerText = rollCountAtMax;
  document.getElementById("submitButton").innerText = "Play Again";
  //Clear contents of startingBet and make it readonly so player will have to
  //select "Play Again" in order to play again
  document.getElementById("startingBet").value = "";
  document.getElementById("startingBet").readOnly = true;
  document.getElementById("inputField").style.display = "none";

  return false;
    }
}

/*
Purpose: Take player's starting bet and use it to play lucky sevens where player
rolls two die, and if the die sum to 7 they win else they lose their bet
Input- player's starting bet
Output- nothing
*/
function playLuckySevens(startingBet)
{
  var currentMoney = startingBet;
  var die1 = 0;
  var die2 = 0;
  var rollSum = 0;
  //While there is still money to bet keep rolling using startingBet as bet amount
  while(currentMoney > 0)
  {
    //Roll two 6-sided die
    die1 = rollDice(6);
    die2 = rollDice(6);
    //Sum total of roll
    rollSum = die1 + die2;
    //Increment number of Rolls
    totalDiePairRolls++;
    //if die totals equal 7 add 4 to currentMoney
    if(rollSum == 7)
    {
      currentMoney += 4;
    }
    //else decrement player's currentMoney by 1
    else {
      currentMoney -= 1;
    }
    //Check if currentMoney held is more than highestAmountWon
    if(currentMoney > highestAmountWon)
    {
      highestAmountWon = currentMoney;
      rollCountAtMax = totalDiePairRolls;
    }
  }
}


/*
Purpose: To get us a random value between 1 and 6
Input-number of sides of the dice
Output- Random number between 1 and six
*/
function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

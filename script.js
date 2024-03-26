
//get a random coputerchoice, rock, paper or siccors
// rock = 1 ,paper =  2 ,siccors = 3
//get random number 1-3
//create string variable ComputerChoice
//if random number = 1 set ComputerChoice = rock, else if random number = 2 set ComputerChoice = paper, else if random number = 3 set ComputerChoice = siccors
//return value of ComputerChoice

//let ComputerChoice

let winOrLose;
let winOrLoseOrDrawMessage;
let playerSelection = "scissors";
const ComputerSelection = getComputerChoice();
let scoreCounterPlayer = 0;
let scoreCounterComputer = 0;
let scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer;



function getComputerChoice(){
    let RandomNumber = (Math.floor(Math.random() * (4 - 1) + 1))
    //console.log(RandomNumber)
    let ComputerChoice
    if (RandomNumber === 1) {ComputerChoice = "rock"}
    
    else if (RandomNumber === 2) {ComputerChoice = "paper"}

    else if (RandomNumber === 3) {ComputerChoice = "scissors"}

    return ComputerChoice
   
   
}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const divScoreMessage = document.querySelector("#scoreMessage");

//divScoreMessage.append(scoreMessage)

buttonRock.addEventListener("click",() => {
   playerSelection = "rock"; game ();

});

buttonPaper.addEventListener("click",() => {
  playerSelection = "paper"; game ();

});

buttonScissors.addEventListener("click",() => {
  playerSelection = "scissors"; game ();

});

function playerSelectionFn (){
  if (playerSelection == "rock")  {return "rock"}
    else if (playerSelection == "paper") {return "paper"}
    else return "scissors"
}

//ComputerChoice = getComputerChoice()

//console.log(ComputerChoice)

//compare playerSelection with computerSelection and return a winOrLoseMessage:

//declare variable winOrLoseOrDrawMessage
//get playerselection with prompt, make it parameter case-insensitive and store it in variable
//define rules: rock beats scissors, siccors beats paper, paper beats rock,
//define rule: if playerSelection === computerSelection --> Restart Round
//else if winOrLose = true --> winOrLoseMessage = "You Win!" playerSelection "beats" computerSelection"
//else --> winOrLoseMessage = "You Lose!" computerSelection "beats" "playerSelection"




function playRound(playerSelection, ComputerSelection) {
    //let winOrLoseOrDrawMessage;
    //playerSelection = "rock";
    //playerSelection = playerSelection.toLowerCase()
    ComputerSelection = getComputerChoice();
    playerSelection = playerSelectionFn ();
   
    
    if (playerSelection === ComputerSelection) {winOrLoseOrDrawMessage = "Draw! You both choose " + ComputerSelection ;
                                                console.log(playerSelection);
                                                console.log(ComputerSelection);
                                                console.log(winOrLoseOrDrawMessage);
                                                playRound(playerSelection, ComputerSelection)}

    else if (playerSelection === "rock" && ComputerSelection === "scissors") {winOrLoseOrDrawMessage = "You Win! " + playerSelection +" beats " + ComputerSelection;
                                                                              console.log(playerSelection);
                                                                              console.log(ComputerSelection);
                                                                              console.log(winOrLoseOrDrawMessage);}

    else if (playerSelection === "scissors" && ComputerSelection === "paper") {winOrLoseOrDrawMessage = "You Win! " + playerSelection +" beats " + ComputerSelection
                                                                              console.log(playerSelection);
                                                                              console.log(ComputerSelection);
                                                                              console.log(winOrLoseOrDrawMessage);}

    else if (playerSelection === "paper" && ComputerSelection === "rock") {winOrLoseOrDrawMessage = "You Win! " + playerSelection +" beats " + ComputerSelection
                                                                              console.log(playerSelection);
                                                                              console.log(ComputerSelection);
                                                                              console.log(winOrLoseOrDrawMessage);}

    //else if (playerSelection === ComputerSelection) {winOrLoseOrDrawMessage = "Draw! You both choose " + ComputerSelection}
    
    else {winOrLoseOrDrawMessage = "You Lose! " + ComputerSelection + " beats " + playerSelection
                                                                              console.log(playerSelection)
                                                                              console.log(ComputerSelection)
                                                                              console.log(winOrLoseOrDrawMessage)};
    
    

    return winOrLoseOrDrawMessage

  }

function newGame() {
  if (scoreCounterPlayer > scoreCounterComputer) {
    divScoreMessage.textContent = ("");
    divScoreMessage.append("Congratulations, you won the game of five");
    scoreCounterComputer = 0; 
    scoreCounterPlayer = 0;
  }
  else {
    divScoreMessage.textContent = ("");
    divScoreMessage.append("You loose the game of five, try again");
    scoreCounterComputer = 0; 
    scoreCounterPlayer = 0;
  }

  }
  



//console.log(playRound(playerSelection, ComputerSelection));

//Create Best of five game:
//define varibles scoreCounterPlayer + scoreCounterComputer and set them to 0
//define variable scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer

//call function playRound

//print results after every game in console:
//if winOrLoseOrDrawMessage "You Win" set scoreCounterPlayer + 1 + print scoreMessage
//else winOrLoseOrDrawMessage "You Lose" set scoreCounterComputer + 1 + print scoreMessage



//print the endresult and the overall winner in the console
//scoreMessage = "And the final score is: Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer


function game (playerSelection, ComputerSelection) {

//let scoreCounterPlayer = 0
//let scoreCounterComputer = 0
//let scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer
//let winOrLoseOrDrawMessage
//let winOrLose


//console.log(scoreCounterPlayer)
//console.log(scoreCounterComputer)
console.log(scoreMessage)

/*if (scoreCounterComputer === 3) {scoreMessage = "Computer wins the best of five"; console.log(scoreMessage)}

else if (scoreCounterPlayer === 3) {scoreMessage = "Congratulations you win the best of five"; console.log(scoreMessage)}*/

/*else*/ {playRound(playerSelection, ComputerSelection)}

winOrLose = winOrLoseOrDrawMessage.slice(4,5)

//console.log(winOrLose)

if (winOrLose === "W") {scoreCounterPlayer = scoreCounterPlayer+1}
else {scoreCounterComputer = scoreCounterComputer +1}
scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer;
if (scoreCounterComputer == 5 || scoreCounterPlayer == 5) {
  newGame()
}
else {
divScoreMessage.textContent = ("");
divScoreMessage.append(scoreMessage);


//console.log(scoreCounterPlayer)
//console.log(scoreCounterComputer)
console.log(scoreMessage)
}

/*if (scoreCounterComputer === 3) {scoreMessage = "Computer wins the best of five"; console.log(scoreMessage)}

else if (scoreCounterPlayer === 3) {scoreMessage = "Congratulations you win the best of five"; console.log(scoreMessage)}

else {playRound(playerSelection, ComputerSelection)}

winOrLose = winOrLoseOrDrawMessage.slice(4,5)

//console.log(winOrLose)

if (winOrLose === "W") {scoreCounterPlayer = scoreCounterPlayer+1}
else {scoreCounterComputer = scoreCounterComputer +1}
scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer

console.log(scoreCounterPlayer)
console.log(scoreCounterComputer)
console.log(scoreMessage)

if (scoreCounterComputer === 3) {scoreMessage = "Computer wins the best of five"; console.log(scoreMessage);return}

else if (scoreCounterPlayer === 3) {scoreMessage = "Congratulations you win the best of five"; console.log(scoreMessage);return}

else {playRound(playerSelection, ComputerSelection) }

winOrLose = winOrLoseOrDrawMessage.slice(4,5)

//console.log(winOrLose)

if (winOrLose === "W") {scoreCounterPlayer = scoreCounterPlayer+1}
else {scoreCounterComputer = scoreCounterComputer +1}
scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer

console.log(scoreCounterPlayer)
console.log(scoreCounterComputer)
console.log(scoreMessage)

if (scoreCounterComputer === 3) {scoreMessage = "Computer wins the best of five"; console.log(scoreMessage);return}

else if (scoreCounterPlayer === 3) {scoreMessage = "Congratulations you win the best of five"; console.log(scoreMessage);return}

else {playRound(playerSelection, ComputerSelection) }

winOrLose = winOrLoseOrDrawMessage.slice(4,5)

//console.log(winOrLose)

if (winOrLose === "W") {scoreCounterPlayer = scoreCounterPlayer+1}
else {scoreCounterComputer = scoreCounterComputer +1}
scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer

console.log(scoreCounterPlayer)
console.log(scoreCounterComputer)
console.log(scoreMessage)

if (scoreCounterComputer === 3) {scoreMessage = "Computer wins the best of five"; console.log(scoreMessage);return}

else if (scoreCounterPlayer === 3) {scoreMessage = "Congratulations you win the best of five"; console.log(scoreMessage);return}

else {playRound(playerSelection, ComputerSelection) }

winOrLose = winOrLoseOrDrawMessage.slice(4,5)

//console.log(winOrLose)

if (winOrLose === "W") {scoreCounterPlayer = scoreCounterPlayer+1}
else {scoreCounterComputer = scoreCounterComputer +1}
scoreMessage = "Score Player: "+ scoreCounterPlayer+ ": Score Computer: "+ scoreCounterComputer

console.log(scoreCounterPlayer)
console.log(scoreCounterComputer)
console.log(scoreMessage)

if (scoreCounterComputer === 3) {scoreMessage = "Computer wins the best of five"; console.log(scoreMessage)}

else if (scoreCounterPlayer === 3) {scoreMessage = "Congratulations you win the best of five"; console.log(scoreMessage)}*/



}

//game (playerSelection, ComputerSelection)







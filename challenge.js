/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
/*/


// Global variable 


var scores, roundScore, activePlayer, gamePlaying, x;

init();





//set dice that rolled 

// Set Last Dice variable 
// var lastDice;
// set function to reload button 
function btn() {


    //check if game is started ?
    if (gamePlaying) {
        //1.Random number 
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result 
        // var diceDOM = document.querySelector('.dice');

        //show image 
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //3. Update the round score IF the rolled number not a 1 

        if (dice1 !== 1 && dice2 !== 1) {
            //Add Score
            roundScore += dice1 + dice2;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;


        } else {
            //Next Player
            nextPlayer();
        }
    }

}
//call function operator;

document.querySelector('.btn-roll').addEventListener('click', btn);

// set function to add the score 

function holdbtn() {

    if (gamePlaying) {
        //add Current score to Global Score 
        scores[activePlayer] += roundScore;

        //Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;

        //undefine 0 or null or '' are COERDS to false 

        if (input) {
            var winningScore = input;

        } else {
            winningScore = 100;
        }

        //Check if the player won the game

        if (scores[activePlayer] >= winning) {

            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // document.querySelector('.btn-roll').textContent = "New Game ?";

            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }

}



/**/
//holdbtn controller 
document.querySelector('.btn-hold').addEventListener('click', holdbtn)

// set function to nextPlayer activated
function nextPlayer() {

    //ternary operator  if function


    /*
        if (activePlayer === 0) {
            activePlayer = 1

        }else{
        acitvePlayer = 0;
        }

    */
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');


    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);




// set all the number to defualt 
function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;

    //set image dispear 
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';


    // set the content to 0 
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //reset the player name from winner to players name 
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //reset others 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




/*
1. A Player looses his ENTIRE score when he rolls two 6 in a row. After that, it's Just next Player's turn.
(Hint: Always save previous dice roll in a seperate variable.)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefine score of 100.
(Hint: you can read that value with the .value property in javascript. this is a good opptunities to use google to figure this out. )





3. Add another dice to the game, so that there is two dice now. the player looses his current score when one of them is 1 .
(Hint: you will need CSS to position the second score dice, so take a look a the CSS code for the first one.)




*/

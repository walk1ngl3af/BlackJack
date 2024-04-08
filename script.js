// region Constants
const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const dealButton = document.getElementById('deal');
//score and cards constants
let total;
let startingCard1 = Math.floor((Math.random() * 11) + 1);
let cardType1;
let startingCard2 = Math.floor((Math.random() * 11) + 1);
let cardType2;
let NCValue = [];
let newCard;
//Turn Number
let turn = 0;
//AI cards
let aiCard1 = Math.floor((Math.random() * 11) + 1);
let aiCard2 = Math.floor((Math.random() * 11) + 1);
let aiCardStartingTotal = aiCard1 + aiCard2
// endregion
// region Math
while(total > 21 && startingCard1 === 11 || startingCard2 === 11 && total > 21) {
    if(startingCard1 === 11) {
        +prompt("Do you want the ace to be 11 or 1");
    }
}
function hit() {
    newCard = Math.floor((Math.random() * 11) + 1);
    console.log("Hit");
    console.log(`${newCard}`);
    //todo end the game if the cards add to a value greater than 21
}

function stay() {
    console.log("Stay");
    //todo check if value is greater while =< 21
}

function deal() {
    console.log("Deal")
    console.log(`${startingCard1} and ${startingCard2}`);
    clearHidden();
    updateTotal();
    if (startingCard1 + startingCard2 === 21){
        //todo end the game
    }
}

function restart() {
    console.clear();
    console.log("Restarted");
    startingCard1 = Math.floor((Math.random() * 11) + 1);
    startingCard2 = Math.floor((Math.random() * 11) + 1);
    total = 0;
    newCard = 0;
    hitButton.classList.add('hidden');
    stayButton.classList.add('hidden');
    dealButton.classList.remove('hidden');
    NCValue = [];
}

function clearHidden() {
    hitButton.classList.remove('hidden');
    stayButton.classList.remove('hidden');
    dealButton.classList.add('hidden');
}

function updateTotal(){
    const totalElement = document.querySelector('.total');
    if(newCard > 0){
        total = startingCard1 + startingCard2 + newCard;
    }
    else {
        total = startingCard1 + startingCard2;
    }
    totalElement.textContent = `Total: ${total}`;
    console.log(total);
}
// endregion //
// region drawingCards //
function addStartingHand(){
    if(startingCard1 === 1) {
        //random number 1-4 for different types of cards
        //if cardType = x card ≠ x again
    } else if(startingCard1 === 2) {
        //random number 1-(variable for amount of cards left) for different types of cards
    } else if(startingCard1 === 3) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 4) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 5) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 6) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 7) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 8) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 9) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 10) {
        //random number 1-4 for different types of cards
    } else if(startingCard1 === 11) {
        //random number 1-4 for different types of cards
    }

    if(startingCard2 === 1) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
        //if cardType = x card ≠ x again
    } else if(startingCard2 === 2) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 3) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 4) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 5) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 6) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 7) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 8) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 9) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 10) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    } else if(startingCard2 === 11) {
        cardType2 = Math.floor((Math.random() * 11) + 1);
    }
}
// region Constants
const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const dealButton = document.getElementById('deal');
// endregion
let total;
let startingCard1 = Math.floor((Math.random() * 11) + 1);
let startingCard2 = Math.floor((Math.random() * 11) + 1);
let newCard;

//Made by Ricardo and Thomas
// region Math //
while(total > 21 && startingCard1 === 11 || startingCard2 === 11 && total > 21) {
    +prompt("Do you want the ace to be a 1 or 11?");
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
        //random number 1-4 for different types of cards
        //if cardType = x card ≠ x again
    } else if(startingCard2 === 2) {
        //random number 1-(variable for amount of cards left) for different types of cards
    } else if(startingCard2 === 3) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 4) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 5) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 6) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 7) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 8) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 9) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 10) {
        //random number 1-4 for different types of cards
    } else if(startingCard2 === 11) {
        //random number 1-4 for different types of cards
    }
}
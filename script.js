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
let src1;
let src2;
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
    cardType1 = Math.floor((Math.random() * 4) + 1);
    if(startingCard1 === 1) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 2) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 3) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 4) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 5) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 6) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 7) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 8) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 9) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 10) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    } else if(startingCard1 === 11) {
        if(cardType1 === 1) {

        } else if(cardType1 === 2) {

        } else if(cardType1 === 3) {

        } else {
            //todo change img src1
        }
    }

    //Second Card
    cardType2 = Math.floor((Math.random() * 4) + 1);
    if(startingCard2 === 1) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 2) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 3) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 4) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 5) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 6) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 7) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 8) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 9) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 10) {
        if(cardType2 === 1) {

        } else if(cardType2 === 2) {

        } else if(cardType2 === 3) {

        } else {
            //todo change img src2
        }
    } else if(startingCard2 === 11) {

    }
}
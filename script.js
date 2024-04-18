// region Constants
const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const dealButton = document.getElementById('deal');
const startingCard1Image = document.querySelector('img[src="src1"]');
const startingCard2Image = document.querySelector('img[src="src2"]');
const cardArea = document.getElementById('cardArea');
const aiCardArea = document.getElementById('aiCardArea');
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
//AI cards
const aiStartingCard1 = document.getElementById('aiStartingCard1');
const aiStartingCard2 = document.getElementById('aiStartingCard2');
let aiCard1 = Math.floor((Math.random() * 11) + 1);
let aiCard2 = Math.floor((Math.random() * 11) + 1);
let aiCardStartingTotal = aiCard1 + aiCard2
// endregion
// region Math
function aceChanger() {
    if (startingCard1 === 11 || startingCard2 === 11) {
        if (startingCard1 === 11) {
            let aceValue = +prompt("Do you want the ace to be 11 or 1");
            while (aceValue !== 1 && aceValue !== 11) {
                aceValue = +prompt("Do you want the ace to be 11 or 1");
            }
            if (aceValue === 11) {
                startingCard1 = 11;
            } else if (aceValue === 1) {
                startingCard1 = 1;
            }
        }
        if (startingCard2 === 11) {
            let aceValue2 = +prompt("Do you want the ace to be 11 or 1");
            while (aceValue2 !== 1 && aceValue2 !== 11) {
                aceValue2 = +prompt("Do you want the ace to be 11 or 1");
            }
            if (aceValue2 === 11) {
                startingCard2 = 11;
            } else if (aceValue2 === 1) {
                startingCard2 = 1;
            }
        }
    }
}
function hit() {
    newCard = Math.floor((Math.random() * 11) + 1);
    console.log("Hit");
    console.log(`${newCard}`);
    //todo end the game if the cards add to a value greater than 21
}

function stand() {
    console.log("Stay");
    //todo check if value is greater while =< 21
}

function deal() {
    console.log("Deal")
    console.log(`${startingCard1} and ${startingCard2}`);
    clearHidden();
    updateTotal();
    aceChanger();
    addStartingHand()
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
            console.log("Card 1 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${spadesAce}`;
        } else if(cardType1 === 2) {
            console.log("Card 1 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${heartsAce}`;
        } else if(cardType1 === 3) {
            console.log("Card 1 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${clubsAce}`;
        } else {
            console.log("Card 1 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${diamondsAce}`;
        }
    } else if(startingCard1 === 2) {
        if(cardType1 === 1) {
            console.log("Card 2 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${spades2}`;
        } else if(cardType1 === 2) {
            console.log("Card 2 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${hearts2}`;
        } else if(cardType1 === 3) {
            console.log("Card 2 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${clubs2}`;
        } else {
            console.log("Card 2 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${diamonds2}`;
        }
    } else if(startingCard1 === 3) {
        if(cardType1 === 1) {
            console.log("Card 3 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${spades3}`;
        } else if(cardType1 === 2) {
            console.log("Card 3 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${hearts3}`;
        } else if(cardType1 === 3) {
            console.log("Card 3 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${clubs3}`;
        } else {
            console.log("Card 3 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${diamonds3}`;
        }
    } else if(startingCard1 === 4) {
        if(cardType1 === 1) {
            console.log("Card 4 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${spades4}`;
        } else if(cardType1 === 2) {
            console.log("Card 4 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${hearts4}`;
        } else if(cardType1 === 3) {
            console.log("Card 4 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${clubs4}`;
        } else {
            console.log("Card 4 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${diamonds4}`;
        }
    } else if(startingCard1 === 5) {
        if(cardType1 === 1) {
            console.log("Card 5 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${spades5}`;
        } else if(cardType1 === 2) {
            console.log("Card 5 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${hearts5}`;
        } else if(cardType1 === 3) {
            console.log("Card 5 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${clubs5}`;
        } else {
            console.log("Card 5 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${diamonds5}`;
        }
    } else if(startingCard1 === 6) {
        if(cardType1 === 1) {
            console.log("Card 6 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${spades6}`;
        } else if(cardType1 === 2) {
            console.log("Card 6 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${hearts6}`;
        } else if(cardType1 === 3) {
            console.log("Card 6 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${clubs6}`;
        } else {
            console.log("Card 6 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src  = `${diamonds6}`;
        }
    } else if(startingCard1 === 7) {
        if(cardType1 === 1) {
            console.log("Card 7 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${spades7}`;
        } else if(cardType1 === 2) {
            console.log("Card 7 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${hearts7}`;
        } else if(cardType1 === 3) {
            console.log("Card 7 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${clubs7}`;
        } else {
            console.log("Card 7 - Type 4");
            startingCard1Image.src = 'src1';
            src1 = `${diamonds7}`;
        }
    } else if(startingCard1 === 8) {
        if(cardType1 === 1) {
            console.log("Card 8 - Type 1");
            startingCard1Image.src = 'src1';
            src1 = `${spades8}`;
        } else if(cardType1 === 2) {
            console.log("Card 8 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${hearts8}`;
        } else if(cardType1 === 3) {
            console.log("Card 8 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${clubs8}`;
        } else {
            console.log("Card 8 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${diamonds8}`;
        }
    } else if(startingCard1 === 9) {
        if(cardType1 === 1) {
            console.log("Card 9 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${spades9}`;
        } else if(cardType1 === 2) {
            console.log("Card 9 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${hearts9}`;
        } else if(cardType1 === 3) {
            console.log("Card 9 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${clubs9}`;
        } else {
            console.log("Card 9 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${diamonds9}`;
        }
    } else if(startingCard1 === 10) {
        if(cardType1 === 1) {
            console.log("Card 10 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${spades10}`;
        } else if(cardType1 === 2) {
            console.log("Card 10 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${hearts10}`;
        } else if(cardType1 === 3) {
            console.log("Card 10 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${clubs10}`;
        } else {
            console.log("Card 10 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${diamonds10}`;
        }
    } else if(startingCard1 === 11) {
        if(cardType1 === 1) {
            console.log("Card 11 - Type 1");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${spadesAce}`;
        } else if(cardType1 === 2) {
            console.log("Card 11 - Type 2");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${heartsAce}`;
        } else if(cardType1 === 3) {
            console.log("Card 11 - Type 3");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${clubsAce}`;
        } else {
            console.log("Card 11 - Type 4");
            startingCard1Image.src = 'src1';
            startingCard1Image.src = `${diamondsAce}`;
        }
    }

    //Second Card
    cardType2 = Math.floor((Math.random() * 4) + 1);
    if(startingCard2 === 1) {
        if(cardType2 === 1) {
            console.log("#2 Card 1 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 1 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 1 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 1 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 2) {
        if(cardType2 === 1) {
            console.log("#2 Card 2 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 2 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 2 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 2 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 3) {
        if(cardType2 === 1) {
            console.log("#2 Card 3 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 3 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 3 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 3 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 4) {
        if(cardType2 === 1) {
            console.log("#2 Card 4 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 4 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 4 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 4 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 5) {
        if(cardType2 === 1) {
            console.log("#2 Card 5 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 5 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 5 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 5 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 6) {
        if(cardType2 === 1) {
            console.log("#2 Card 6 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 6 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 6 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 6 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 7) {
        if(cardType2 === 1) {
            console.log("#2 Card 7 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 7 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 7 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 7 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 8) {
        if(cardType2 === 1) {
            console.log("#2 Card 8 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 8 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 8 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 8 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 9) {
        if(cardType2 === 1) {
            console.log("#2 Card 9 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 9 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 9 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 9 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 10) {
        if(cardType2 === 1) {
            console.log("#2 Card 10 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 10 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 10 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 10 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    } else if(startingCard2 === 11) {
        if(cardType2 === 1) {
            console.log("#2 Card 11 - Type 1");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 2) {
            console.log("#2 Card 11 - Type 2");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else if(cardType2 === 3) {
            console.log("#2 Card 11 - Type 3");
            startingCard2Image.src = 'src2'
            src2 = ""
        } else {
            console.log("#2 Card 11 - Type 4");
            startingCard2Image.src = 'src2'
            src2 = ""
        }
    }
}
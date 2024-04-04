const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const dealButton = document.getElementById('deal');

//Made by Ricardo and Thomas

function addCard() {
    let newCard = Math.floor((Math.random() * 11) + 1);
    console.log("Hit");
    console.log(`${newCard}`);
    //todo end the game if the cards add to a value greater than 21
}

function stay() {
    console.log("Stay");
    //todo check if value is greater while =< 21
}

function deal() {
    let startingCard1 = Math.floor((Math.random() * 11) + 1);
    let startingCard2 = Math.floor((Math.random() * 11) + 1);
    console.log("Deal")
    console.log(`${startingCard1} and ${startingCard2}`);

    if (startingCard1 + startingCard2 === 21){
        //todo end the game
    }
}

function restart() {
    console.log("restart");
}
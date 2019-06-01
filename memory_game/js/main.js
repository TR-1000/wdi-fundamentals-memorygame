window.alert("JS up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
//cardsInPlay.push(cardOne);

var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);

var cardThree = cards[1];
cardsInPlay.push(cardThree);

var cardFour = cards[3];
//cardsInPlay.push(cardFour);

//console.log("Player flipped "+cardOne)
//console.log("Player flipped "+cardTwo)

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}
else {
	alert("Please pick 2 cards.")
}


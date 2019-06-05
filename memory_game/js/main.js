//window.alert("JS up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "image/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "image/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	image: "image/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
			console.log("Sorry, try again.");
		}
	}
}


function flipCard(cardId) {
	console.log("Player flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}


flipCard(0);
flipCard(2);
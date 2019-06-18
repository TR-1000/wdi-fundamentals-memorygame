//window.alert("JS up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var usedCards = [];
var cardsInPlay = [];
var matches = 0

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			cardsInPlay = [];
			matches++;
			if (matches===2) {
				clearBoard();
			}
		}
		else {
			alert("Sorry, try again.");
			var cardBacks = document.getElementsByTagName("img");
			for (i=0;i<cardBacks.length;i++){
				cardBacks[i].setAttribute("src", "images/back.png");
			}
			cardsInPlay = [];
		}
	}
};

function flipCard() {
	var cardId = this.getAttribute("data-id");
	console.log("Player flipped " + usedCards[cardId].rank);
	cardsInPlay.push(usedCards[cardId].rank);
	this.setAttribute("src", usedCards[cardId].cardImage)
	window.setTimeout(checkForMatch, 1000);
};

function createBoard() {
	for(i=0;i<usedCards.length;i++) {
		const cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

function clearBoard() {
	var gameBoard = document.getElementById("game-board");
	gameBoard.innerHTML = "";
	cardsInPlay = [];
	usedCards = [];
	matches = 0
	randomizeBoard()
	createBoard();
};

function randomizeBoard() {
	while (usedCards.length < 4 === true ) {
  		var i = Math.floor(Math.random() * 4);
  		if (usedCards.includes(cards[i]) === false) {
    	usedCards.push(cards[i]);
  		console.log(usedCards);  
  		}
  	}
};
randomizeBoard();
createBoard();
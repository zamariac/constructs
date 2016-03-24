//1

//var suit = [ 'spades', 'hearts', 'clover', 'diamonds'];
//var value =[ 'ace', 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10, 'jack', 'queen','king'];

function PlayingCard (suit, value){
	this.suit = suit;
	this.value = value;

	//input: suit and a value
	//output: number and a string

}

var PlayingCard1 = new PlayingCard();

//2

// function diceRoll(value){
// 	this.value = [ 1 , 2 , 3 , 4 , 5 , 6];
// }

// var dice = new diceRoll();

	//input: roll the die
	//keep track of the current number 1-6 

	//output :

function Die(){
	this.faceValue = Math.ceil(Math.random()*6);
	this.roll =function(){
		this.faceValue = Math.ceil(Math.random()*6);
		return this.faceValue;
	};

}

var exampleDie = new Die();
console.log(exampleDie)





//3

//make two dice
//rolls two dice 1000x each
//adds the sum of each roll together
//keeps track of sum occurences
//returns a list of the occurences

var exampleDie = new Die();
console.log(exampleDie)


function getProbabilities(){
	var die1 = new Die();
	var die2 = new Die();

	var probs = {};
	for(var i = 0; i < 1000; i++){
		var rollResult1 = die1.roll();
		var rollResult2 = die2.roll();

		var sum = rollResult2 + rollResult1;
		if (sum in probs) {
			probs[sum]++
		}else{
			probs[sum] = 1;
		}
	}

	console.log(probs);
 return probs;

}

getProbabilities();


'use strict';
var score = 0;

alert('Welcome to Pavel\'s guessing game!');
var username = prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);


var toGame = prompt('Would you like to start guessing?').toLowerCase();
if (toGame === 'yes' || toGame === 'y') {
  alert('Great let\'s begin!');
} else {
  alert('Please exit this page.');
}
console.log('Does ' + username + 'want to play?' + toGame);


alert('Question Number 1');
var answerOne = prompt('yes or no questions\: Is Pavel 18 years old?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert('Correct!');
} else {
  alert('Wrong! Pavel is 18 years old.');
  score++;
}
console.log(answerOne);

alert('Question Number 2');
var answerTwo = prompt ('yes or no questions\: Was Pavel born in USA?').toLowerCase();
if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Correct! Pavel was born in Ukraine.');
} else {
  alert('Wrong! Pavel was born is Ukraine.');
  score++;
}
console.log(answerTwo);

alert('Question Number 3');
var answerThree = prompt('yes or no questions\: Pavel takes the bus to school?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  alert('Correct!');
} else {
  alert('Wrong! Pavel does take the bus to school every morning at 7\:00am.');
  score++;
}
console.log(answerThree);

alert('Question Number 4');
var answerFour = prompt('yes or no questions\: Pavel has green eyes?').toLowerCase();
if (answerFour === 'no' || answerFour === 'n') {
  alert('Pavel has brown eyes.');
} else {
  alert('Wrong! Pavel does not have green eyes.');
  score++;
}
console.log(answerFour);

alert('Question Number 5');
var answerFive = prompt('yes or no questions\: Does Pavel go to gym?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  alert('Correct!');
} else {
  alert('Wrong! Pavel does go to gym.');
  score++;
}
console.log(answerFive);

alert('Question Number 6');
for(var i = 0; i < 5; i++){
  var numAns = 0;
  var favNum = 7;
  if(i === 1){
    numAns = parseInt(prompt('What is my favorite number?'));
    if(favNum === numAns){
      alert('You Got it!');
      break;
    }
  } else if (i > 1 && i < 5) {
    numAns = parseInt(prompt ('You didn\' guess my number, guess again'));
    console.log(favNum);
    if(favNum === numAns) {
      alert('You Got It!');
      break;
    }
  }
}

alert('Question Number 7');
var guesses = 0;
var guessing = true;
var city = ['Kent','Federal Way','Auburn','Santa Barbara'];
while(guessing && guesses < 6){
  var userInput = prompt('Guess a city other than seattle that I have lived in?');
  for(var j = 0; j <= city.length; j++){
    if (city[j] === userInput){
      alert ('You got it!!!');
      guessing = false;
      break;
    }
  }
  if (city[j] !== userInput){
    alert ('Sorry you didn\'t get it');
  }
  guesses += 1;
}
alert('Thank you for playing Pavel\'s game.');

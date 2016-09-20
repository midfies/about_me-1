'use strict';
alert('Welcome to Pavel\'s guessing game!');
var username= prompt('What is your name?');
    alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);
var toGame = prompt('Would you like to start guessing?');
toGame.toLowerCase();
  if (toGame == 'yes') {
    alert('Great let\'s begin!');
  }
  else {
    alert('Please exit this page.');
  }
    alert('Question Number 1');
var questionNumber1 = prompt('yes or no questions\: Is Pavel 18 years old?');
questionNumber1.toLowerCase();
  if (questionNumber1 == 'yes') {
      alert('Correct!');
    }
  else {
      alert('Wrong! Pavel is 18 years old.');
    }
    document.write('<p> <strong>' + questionNumber1 + '</p> </strong> <br>');
      alert('Question Number 2');
var questionNumber2 = prompt ('yes or no questions\: Was Pavel bord in USA?');
questionNumber2.toLowerCase();
  if (questionNumber2 == 'no') {
      alert('Correct! Pavel was born in Ukraine.');
  }
  else {
      alert('Wrong! Pavel was born is Ukraine.');
  }
    document.write('<p> <strong>' + questionNumber2 + '</p> </strong> <br>');
    alert('Question Number 3');
var questionNumber3 = prompt('yes or no questions\: Pavel takes the bus to school?');
questionNumber3.toLowerCase();
  if(questionNumber3 == 'yes') {
      alert('Correct!');
  }
  else {
    alert('Wrong! Pavel does take the bus to school every morning at 7\:00am.');
  }
    document.write('<p> <strong>' + questionNumber3 + '</p> </strong> <br>');
    alert('Question Number 4');
var questionNumber4 = prompt ('yes or no questions\: Pavel has green eyes?');
questionNumber4.toLowerCase();
  if (questionNumber4 == 'no') {
    alert('Pavel has brown eyes.');
  }
  else {
    alert('Wrong! Pavel does not have green eyes.');
  }
  document.write('<p> <strong>' + questionNumber4 + '</p> </strong> <br>');
  alert('Question Number 5');
var questionNumber5 = prompt ('yes or no questions\: Does Pavel go to gym?');
questionNumber5.toLowerCase();
  if (questionNumber5 == 'yes') {
    alert('Correct!');
  }
  else {
    alert('Wrong! Pavel does go to gym.');
  }
    document.write('<p> <strong>' + questionNumber5 + '</p> </strong> <br>');
    alert('Thank you for playing Pavel\'s game.');

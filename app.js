var username= prompt('What is your name?');
alert('Welcome, ' + username + '!');
console.log('The user\'s name is ' + username);
var Mt= prompt("Would you like to go ski to Whistler this weekend?");
if (Mt == 'yes') {
  console.log( 'Great! ' + username + ', I\'ll call you Friday night.');
}
else {
  console.log('I guess next time.');
}
var Car= prompt('Can we take your car this weekend to Whistler?');
if (Car == 'sure') {
  console.log('Awesome! I\'ll be at your place at 9:00am.');
}
else {
  console.log('Alright we can take my car...');
}
var Gas= prompt('Do you want me to fill up your car before we go?');
if (Gas == 'yes') {
  console.log('Alright we can stop by the gas station near your place.');
}
else {
  console.log('I guess im buying lunch then!');
}

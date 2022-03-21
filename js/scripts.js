$(document).ready(function() {
  
let sentenceOne = prompt("Enter a sentence");

const firstLetter = sentenceOne.charAt(0);

const lastLetter = sentenceOne.charAt(sentenceOne.length -1);

let cipherOne =  lastLetter + firstLetter;

let sentenceTwo = sentenceOne + cipherOne;

let cipherTwo = sentenceOne.charAt(sentenceOne.length/2);

let sentenceThree = cipherTwo + sentenceTwo;

function reverseString(str) {
  return str.split("").reverse().join("");
}

$(".unlocked").click(function() {
  alert(sentenceOne);
});

$(".locked").click(function() {
  alert(reverseString(sentenceThree));
});


});




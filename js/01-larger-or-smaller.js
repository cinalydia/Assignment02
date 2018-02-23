/*eslint-env browser*/

//LARGER OR SMALLER
var roundOne = parseInt(window.prompt("Round One: Enter a number..."), 10);
var roundTwo = parseInt(window.prompt("Round Two: Enter a second number..."), 10);
if (roundOne > roundTwo) {
    document.write(roundOne + " is larger!");
} else if (roundOne < roundTwo) {
    document.write(roundTwo + " is larger!");
} else if (roundOne === roundTwo) {
    window.confirm("HEY! Pick different numbers!");
}
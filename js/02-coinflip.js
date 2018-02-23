/*eslint-env browser*/
//COINFLIP
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails?");
if (coinFlip === 0) {
    document.write("Heads!");
} else {
    document.write("Tails!");
}
if (coinFlip === 0 && choice === "heads") {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip === 0 && choice === "tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip === 1 && choice === "heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip === 1 && choice === "tails") {
    window.alert("The flip was tails and you chose tails...you win!");
}
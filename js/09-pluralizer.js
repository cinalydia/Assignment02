/*eslint-env browser*/

//PLURALIZER
var noun = window.prompt("Pick a noun.");
var number = parseInt(window.prompt("Pick a number."), 10);

if (noun.includes("y") === true && number > 1) {
    var newNoun_y = noun.substr(0, noun.length - 1).concat("ies");
    window.console.log(number + " " + newNoun_y);
} else if (noun.includes("t") === true && number > 1) {
    var newNoun_s = noun.concat("s");
    window.console.log(number + " " + newNoun_s);
} else if (noun.includes("le") === true && number > 1) {
    var newNoun_ss = noun.concat("s");
    window.console.log(number + " " + newNoun_ss);
} else if (noun.includes("og") === true && number > 1) {
    var newNoun_sss = noun.concat("s");
    window.console.log(number + " " + newNoun_sss);
} else if (noun.includes("ee") === true && number > 1) {
    var newNoun_e = noun;
    window.console.log(number + " " + newNoun_e);
} else if (noun.includes("y") === true && number === 1 || number === 0) {
    window.alert("Hey...this is a plural game! Pick a singular noun and a number greater than 1.");
} else if (noun.includes("t") === true && number === 1 || number === 0) {
    window.alert("Hey...this is a plural game! Pick a singular noun and a number greater than 1.");
} else if (noun.includes("le") === true && number === 1 || number === 0) {
    window.alert("Hey...this is a plural game! Pick a singular noun and a number greater than 1.");
} else if (noun.includes("og") === true && number === 1 || number === 0) {
    window.alert("Hey...this is a plural game! Pick a singular noun and a number greater than 1.");
} else if (noun.includes("ee") === true && number === 1 || number === 0) {
    window.alert("Hey...this is a plural game! Pick a singular noun and a number greater than 1.");
}
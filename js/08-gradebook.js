/*eslint-env browser*/

//GRADEBOOK
var grade1 = parseInt(window.prompt("Enter points for Ursula."), 10);
var grade2 = parseInt(window.prompt("Enter points for Paul."), 10);
var grade3 = parseInt(window.prompt("Enter points for Henry."), 10);
var grade4 = parseInt(window.prompt("Enter points for Tabitha."), 10);
var grade5 = parseInt(window.prompt("Enter points for Lucy."), 10);

var total = grade1 + grade2 + grade3 + grade4 + grade5;
var average = parseInt((total / 5), 10);

window.console.log("Student(s) " + " Grades" + "\n----------------------");

if (grade1 < 60) {
    window.console.log("Ursula: " + "\t" + "F");
} else if (grade1 < 70) {
    window.console.log("Ursula: " + "\t" + "D");
} else if (grade1 < 80) {
    window.console.log("Ursula: " + "\t" + "C");
} else if (grade1 < 90) {
    window.console.log("Ursula: " + "\t" + "B");
} else if (grade1 <= 100) {
    window.console.log("Ursula: " + "\t" + "A");
} 

if (grade2 < 60) {"Paul " + 
    window.console.log("Paul: " + "\t" + "F");
} else if (grade2 < 70) {
    window.console.log("Paul: " + "\t" + "D");
} else if (grade2 < 80) {
    window.console.log("Paul: " + "\t" + "C");
} else if (grade2 < 90) {
    window.console.log("Paul: " + "\t" + "B");
} else if (grade2 <= 100) {
    window.console.log("Paul: " + "\t" + "A");
} 

if (grade3 < 60) {
    window.console.log("Henry: " + "\t" + "F");
} else if (grade3 < 70) {
    window.console.log("Henry: " + "\t" + "D");
} else if (grade3 < 80) {
    window.console.log("Henry: " + "\t" + "C");
} else if (grade3 < 90) {
    window.console.log("Henry: " + "\t" + "B");
} else if (grade3 <= 100) {
    window.console.log("Henry: " + "\t" + "A");
} 

if (grade4 < 60) {
    window.console.log("Tabitha: " + "\t" + "F");
} else if (grade4 < 70) {
    window.console.log("Tabitha: " + "\t" + "D");
} else if (grade4 < 80) {
    window.console.log("Tabitha: " + "\t" + "C");
} else if (grade4 < 90) {
    window.console.log("Tabitha: " + "\t" + "B");
} else if (grade4 <= 100) {
    window.console.log("Tabitha: " + "\t" + "A");
}

if (grade5 < 60) {
    window.console.log("Lucy: " + "\t" + "F");
} else if (grade5 < 70) {
    window.console.log("Lucy: " + "\t" + "D");
} else if (grade5 < 80) {
    window.console.log("Lucy: " + "\t" + "C");
} else if (grade5 < 90) {
    window.console.log("Lucy: " + "\t" + "B");
} else if (grade5 <= 100) {
    window.console.log("Lucy: " + "\t" + "A");
}
window.console.log("----------------------\n" + "Average Points: " + average);
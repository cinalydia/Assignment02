/*eslint-env browser*/

//COUNTDOWN TO ZERO
var i = 0;
var countDown = parseInt(window.prompt("Pick a number"), 10);
for (i = countDown; i > -1; i--) {
    document.write(i + "<br>");
}
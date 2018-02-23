/*eslint-env browser*/

//ODD OR EVEN
var i = -1;
do {
    i += 1;
    if (Number.isInteger(i / 2)) {
        window.console.log(i + " is even!");
    } else {
        window.console.log(i + " is odd...");
    }
} while (i < 15);
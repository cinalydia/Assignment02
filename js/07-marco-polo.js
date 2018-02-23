/*eslint-env browser*/

//MARCO POLO
var i;
for (i = 1; i <= 100; i+= 1) {
    if (i % 3 && i % 5) {
        document.write(i);
    } else {
        if (i % 3 === 0) {
            document.write("Marco ");
        }
        if (i % 5 === 0) {
            document.write("Polo");
        }
    }
    document.write("<br>");
}
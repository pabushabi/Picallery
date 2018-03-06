document.write("Hello!" + "<br/>");
document.write("Hi^^" + "<br/>");
//alert("Hello World!");

for (var i = 0; i < 10; i++)
{
    if (i % 10 == 1) {
        document.write(i + "st element." + "<br/>");
    }
    else if (i % 10 == 2) {
        document.write(i + "nd element." + "<br/>");
    }
    else if (i % 10 == 3) {
        document.write(i + "rd element." + "<br/>");
    }
    else document.write(i + "th element." + "<br/>")
}


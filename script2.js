// Select H3
var css = document.querySelector("h3");

// Select Colors & Store them in Cache Selectors
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Select the body's Id
var body = document.getElementById("gradient");


// Checking or Testing
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// body.style.background = "red";


// Change colors by applying some event & CSS Styles
color1.addEventListener("input", function () {
    console.log(color1.value);
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

color2.addEventListener("input", function () {
    console.log(color2.value);
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})

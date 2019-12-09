window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let canvas1 = document.getElementById("student-canvas-1");
  let context1 = canvas1.getContext("2d");
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  let message = ("");
  do {
    message = window.prompt("Message:");
    if (message.length > 50) {
      window.alert("Your message is too long. Keep it under 50 characters.")
    }
  } while (message.length > 50);
  context1.font = "48px sans-serif"
  context1.strokeText(message, 30, 70);
    // write your exercise 1 code here
};

/*
 * Exercise 2
 */

const drawRectangle = function() {
  let canvas2 = document.getElementById("student-canvas-2");
  let context2 = canvas2.getContext("2d");
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  let width = 0;
  let height = 0;
  let x = 0;
  let y = 0;
  let status;
  let cancel;
  do {
    status = true;
    width = window.prompt("Width:");
    height = window.prompt("Height:");
    x = window.prompt("X:");
    y = window.prompt("Y:");
    if (width == null && height == null && x == null && y == null) {
      cancel = true;
      status = "stop";
    }
    if (status == true) {
      cancel = false;

      if ((width < 1 && status == true) || (width > canvas2.width && status == true)) {
        window.alert("Your width must be between 1 and 1024.");
        status = false;
      } else if ((height < 1 && status == true) || (height > canvas2.height && status == true)) {
        window.alert("Your height must be between 1 and 512.");
        status == false;
      } else if ((x < 1 && status == true) || (x > canvas2.width && status == true)) {
        window.alert("Your x-coordinate must be between 1 and 1024.");
        status = false;
      } else if ((y < 1 && status == true) || (y > canvas2.height && status == true)) {
        window.alert("Your y-coordinate must be between 1 and 512.");
        status == false
      }
    } else {
      cancel = true;
    }
  } while (cancel !== true || status == false || status !== "stop" || width < 1 || width > canvas2.width || height < 1 || height > canvas2.height || x < 1 || y < 1);

  if (cancel == true) {
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
  } else {
    context2.strokeRect(x, y, width, height);
  }
    // write your exercise 2 code here
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas3 = document.getElementById("student-canvas-3");
  let context3 = canvas3.getContext("2d");
  context3.clearRect(0, 0, canvas3.width, canvas3.height);
  let color = "";
  let input = "";
  let fill;
  do {
    input = window.prompt("Color:");
    color = input.toLowerCase();
    switch (color) {
      case "black":
        fill = "black";
        break;
      case "blue":
        fill = "blue";
        break;
      case "green":
        fill = "green";
        break;
      case "orange":
        fill = "orange";
        break;
      case "purple":
        fill = "purple";
        break;
      case "red":
        fill = "red";
        break;
      case "yellow":
        fill = "yellow";
        break;
      default:
        window.alert(input + " is not a supported color.");
        fill = false;
        break;
    }
  } while (fill == false);
  context3.fillStyle = fill;
  context3.fillRect(10, 10, 100, 50);
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  let canvas4 = document.getElementById("student-canvas-4");
  let context4 = canvas4.getContext("2d");
  context4.clearRect(0, 0, canvas4.width, canvas4.height);
  let side1 = 0;
  let side2 = 0;
  let side3 = 0;
  let height = 0;
  let hypotenuse = 0;
  let base = 0;
  let check = 0;
  let status;
  do {
    side1 = Number(window.prompt("Side 1:"));
    side2 = Number(window.prompt("Side 2:"));
    side3 = Number(window.prompt("Side 3:"));
    status = true;
    if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
      window.alert("One of your sides is not a number.");
      status = false;
    }
    hypotenuse = Math.max(side1, side2, side3);
    height = Math.min(side1, side2, side3);
    if ((side1 == hypotenuse && side2 == height) || (side1 == height && side2 == hypotenuse)) {
      base = side3
    }
    if ((side2 == hypotenuse && side3 == height) || (side2 == height && side3 == hypotenuse)) {
      base = side1
    }
    if ((side1 == hypotenuse && side3 == height) || (side1 == height && side3 == hypotenuse)) {
      base = side2
    }
    check = Math.hypot(height, base);
    if (check !== hypotenuse && status == true) {
      window.alert("That's not a valid right triangle.");
      status = false;
    }
    if (height > canvas4.height || base > canvas4.width && status == true) {
      window.alert("Your triangle won't fit on the canvas.")
    }
  } while (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3) || check !== hypotenuse || height > canvas4.height || base > canvas4.width || status == false);
  let heightPoint = height + 25;
  let basePoint = base + 25;
  context4.moveTo(25, 25);
  context4.lineTo(25, heightPoint);
  context4.lineTo(basePoint, heightPoint);
  context4.closePath();
  context4.stroke();
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  let canvas5 = document.getElementById("student-canvas-5");
  let context5 = canvas5.getContext("2d");
  context5.clearRect(0, 0, canvas5.width, canvas5.height);
  let radius = 0;
  let status;
  do {
    radius = Number(window.prompt("Radius:"));
    status = true;
    let half = canvas5.height / 2;
    if (Number.isNaN(radius)) {
      window.prompt("Your radius is not a number.")
      status = false;
    }
    if ((Number.isInteger(radius) && radius < 32) || (Number.isInteger(radius) && radius < half)) {
      window.prompt("Your smiley face won't fit on the canvas.")
    }
  } while (Number.isNaN(radius) || radius < 32 || radius < half || status == false)
    // write your exercise 5 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
};

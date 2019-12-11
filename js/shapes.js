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
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let canvas = document.getElementById("student-canvas-1");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let message = ("");
  do {
    message = window.prompt("Message:");
    if (message.length > 50) {
      window.alert("Your message is too long. Keep it under 50 characters.")
    }
  } while (message.length > 50);
  context.font = "48px sans-serif"
  context.strokeText(message, 30, 70);
    // write your exercise 1 code here
};

/*
 * Exercise 2
 */

const drawRectangle = function() {
  let canvas = document.getElementById("student-canvas-2");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let width = 0;
  let height = 0;
  let x = 0;
  let y = 0;
  let status;
  do {
    status = true;
    width = Number(window.prompt("Width:"));
    height = Number(window.prompt("Height:"));
    x = Number(window.prompt("X:"));
    y = Number(window.prompt("Y:"));
    let test1 = Boolean(width);
    let test2 = Boolean(height);
    let test3 = Boolean(x);
    let test4 = Boolean(y)
    if (test1 == false && test2 == false && test3 == false && test4 == false) {
      status = true;
    } else if ((!Number.NaN && width < 1) || (!Number.NaN && width > canvas.width)) {
      window.alert("Your width must be between 1 and 1024.");
      status = false;
    } else if ((!Number.isNaN && !(height >= 1)) || (!Number.isNaN && !(height <= canvas.height))) {
      window.alert("Your height must be between 1 and 512.");
      status = false;
    } else if ((!Number.isNaN && !(x >= 1)) || (!Number.isNaN && !(x <= canvas.width))) {
      window.alert("Your x coordinate must be between 1 and 1024.");
      status = false;
    } else if ((!Number.isNaN && !(y >= 1)) || (!Number.isNaN && !(y <= canvas.height))) {
      window.alert("Your y coordinate must be between 1 and 512.");
      status = false;
    } else {
      status = true;
    }
  } while (status == false);
  let test1 = Boolean(width);
  let test2 = Boolean(height);
  let test3 = Boolean(x);
  let test4 = Boolean(y);
  if (test1 == false && test2 == false && test3 == false && test4 == false) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    context.strokeRect(x, y, width, height);
  }
    // write your exercise 2 code here
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas = document.getElementById("student-canvas-3");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let color = "";
  let input = "";
  let fill;
  let status;
  let test;
  do {
    input = window.prompt("Color:");
    status;
    test = Boolean(input);
    if (test == false) {
      status = false;
    } else {
      color = input.toLowerCase();
      switch (color) {
        case "black":
          fill = "black";
          status = false;
          break;
        case "blue":
          fill = "blue";
          status = false;
          break;
        case "green":
          fill = "green";
          status = false;
          break;
        case "orange":
          fill = "orange";
          status = false;
          break;
        case "purple":
          fill = "purple";
          status = false;
          break;
        case "red":
          fill = "red";
          status = false;
          break;
        case "yellow":
          fill = "yellow";
          status = false;
          break;
        default:
          window.alert(input + " is not a supported color.");
          fill = false;
          status = true;
          break;
      }
    }
  } while (status == true);
  if (test == false) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    context.fillStyle = fill;
    context.fillRect(10, 10, 100, 50);
  }
      // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  let canvas = document.getElementById("student-canvas-4");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
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
    if (height > canvas.height || base > canvas.width && status == true) {
      window.alert("Your triangle won't fit on the canvas.")
    }
  } while (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3) || check !== hypotenuse || height > canvas.height || base > canvas.width || status == false);
  let heightPoint = height + 25;
  let basePoint = base + 25;
  context.moveTo(25, 25);
  context.lineTo(25, heightPoint);
  context.lineTo(basePoint, heightPoint);
  context.closePath();
  context.stroke();
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  let canvas = document.getElementById("student-canvas-5");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let radiusHead = 0;
  let status;
  do {
    radiusHead = window.prompt("Radius:");
    status = true;
    let half = canvas.height / 2;
    if (Number.isNaN(radiusHead)) {
      window.alert("Your radius is not a number.")
      status = false;
    } else if (radiusHead < 32) {
      window.alert("Your radius must be at least 32.")
      status = false;
    } else if (radiusHead > half) {
      window.alert("Your smiley face won't fit on the canvas.")
      status = false;
    } else {
      status = true;
    }
  } while (Number.isNaN(radiusHead) || radiusHead < 32 || radiusHead < half || status == false);
  let radiusEye = radiusHead * 0.15;
  let radiusMouth = radiusHead * 0.7;
  window.alert(radiusHead + radiusEye + radiusMouth)
  context.beginPath();
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.arc(canvas.width / 2, canvas.height / 2, 70, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();

    // write your exercise 5 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  let canvas = document.getElementById("student-canvas-6");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let sideLength;
  let status = true;
  do {
    status = true;
    sideLength = Number(window.prompt("Side:"));
    let test = Boolean(sideLength);
    if (test == false) {
      status = true;
    } else if (Number.isNaN(sideLength)) {
      window.alert("Your block size is not a number.");;
      status = false;
    } else if (sideLength < 1) {
      window.alert("Your block size must be at least 1.");
      status = false;
    } else if (sideLength > 100) {
      window.alert("Your pyramid won't fit on the canvas.");
      status = false;
    } else {
      status = true;
    }
  } while (status == false || test == true || sideLength < 1 || sideLength > 100);

    // write your exercise 6 code here
};

window.onload = () => {
  let canvas = document.getElementById("tshirtCanvas");
  let context = canvas.getContext("2d");
  Draw_Triangle(canvas, context);
  Draw_Circle(canvas, context);
}

function Draw_Triangle(canvas, context) {
  /* Path */
  context.beginPath();
  context.moveTo(100, 150);
  context.lineTo(250, 75);
  context.lineTo(125, 30);
  context.closePath();
  /* Draw */
  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = "red";
  context.fill();
}
/**
 * context.arc(x, y, radius, startAngle, endAngle, direction);
 * 
 * x & y: CENTER of the circle.
 * radius: 1/2 the WIDTH of the circle.
 * startAngle: ANGLE between the x-axis and the starting point of the arc.
 * endAngle: ANGLE between the x-axis and the stop point of the arc.
 * direction:
 *   true: counter-clockwise
 *   false: clockwise
 */
function Draw_Circle(canvas, context) {
  context.beginPath();
  context.arc(300, 150, 50, 0, 2 * Math.PI, true);

  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = "blue";
  context.fill();
}
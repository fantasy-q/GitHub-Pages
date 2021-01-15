window.onload = () => {
  drawSmileyFace()
}

function drawSmileyFace() {
  let canvas = document.getElementById("smiley");
  let context = canvas.getContext("2d");

  /* face circle */
  context.beginPath();
  context.arc(300, 300, 200, 0, degreeToRadians(360), true);
  context.fillStyle = "#ffffcc";
  context.fill();
  // 边框
  context.stroke();
  /* left eye */
  context.beginPath();
  context.arc(200, 250, 25, 0, degreeToRadians(360), true);
  context.stroke();
  /* right eye */
  context.beginPath();
  context.arc(400, 250, 25, 0, degreeToRadians(360), true);
  context.stroke();
  /* nose */
  context.beginPath();
  context.moveTo(300, 300);
  context.lineTo(300, 350);
  context.stroke();
  /* mouth */
  context.beginPath();
  context.arc(300, 350, 75, degreeToRadians(20), degreeToRadians(180-20), false);
  context.stroke();

}
// 度转弧度
function degreeToRadians(degree) {
  return (degree * Math.PI) / 180;
}
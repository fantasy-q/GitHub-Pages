let x = 20;
let y = 50;

const BASELINE = {
  TOP___: "top",
  BOTTOM: "bottom",
  MIDDLE: "middle",
  ALPHAB: "alphabeta",
  IDEOGR: "ideographic",
}

window.onload = () => {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  fill_and_stroke(canvas, context);
  x = x + 100;
  font(canvas, context);
  x = x + 100;
  baseline(canvas, context);
}

function fill_and_stroke(canvas, context) {
  context.font = "bold 2em sans-serif"
  context.fillText("Dog", x, y, 200);
  context.strokeText("Cat", x, y + 50, 200);
}

function font(canvas, context) {
  // 建议使用矢量字体
  context.font = "2em Lucida Granda";
  context.fillText("Tea", x, y);
  context.font = "italic bold 1.5em times, serif";
  context.fillText("coffee", x, y + 50);
}

function baseline(canvas, context) {
  context.font = "2em sans-serif";

  context.beginPath();

  console.log('Column 3');
  draw_baseline(context, BASELINE.ALPHAB, BASELINE.ALPHAB);
  draw_baseline(context, BASELINE.TOP___, BASELINE.TOP___);
  draw_baseline(context, BASELINE.MIDDLE, BASELINE.MIDDLE);
  draw_baseline(context, BASELINE.BOTTOM, BASELINE.BOTTOM);
  /**Q：ideographic 是什么 */
  draw_baseline(context, BASELINE.IDEOGR, BASELINE.IDEOGR);

  y = 50;
  x = x + 200;
  /**Q：第一个 baseline 怎么没设置成功 */
  console.log('Column 4');
  console.log(BASELINE.ALPHAB);
  draw_baseline(context, BASELINE.ALPHAB, 'alphabeta');
  draw_baseline(context, BASELINE.TOP___, 'alphabeta');
  draw_baseline(context, BASELINE.MIDDLE, 'alphabeta');
  draw_baseline(context, BASELINE.BOTTOM, 'alphabeta');
  draw_baseline(context, BASELINE.IDEOGR, 'alphabeta');

  context.closePath();
}

function draw_baseline(context, textBaseline, text) {
  context.moveTo(x, y);
  context.lineTo(x + 160, y);
  context.stroke();
  context.textBaseline = textBaseline;
  console.log(x, y, context.textBaseline);
  context.fillText(capitalizeFirstLetter(text), x, y);
  y = y + 50;
}

/**
 * 首字母大写 
 * https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 * */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
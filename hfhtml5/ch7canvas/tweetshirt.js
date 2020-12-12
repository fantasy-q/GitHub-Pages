/* tweetshirt.js */

window.onload = init;
// 初始化
function init() {
  console.log("init");

  let button = document.getElementById("previewButton");
  button.onclick = previewHandler;
}
// 预览按钮处理
function previewHandler() {
  // console.log("previewHandler");
  let canvas = document.getElementById("tshirtCanvas");
  let context = canvas.getContext("2d");
  fillBackgoundColor(canvas, context);

  let shape = get_seleted_value_by_id("shape")
  if (shape == "squares") {
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape == "circles") {
    for (let circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  }
}
// 画方形
function drawSquare(canvas, context) {
  let w = Math.floor(Math.random() * 40);
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}
// 画圆形
function drawCircle(canvas, context) {
  let r = Math.floor(Math.random() * 40);
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, r, 0, degreeToRadians(360), true);

  context.fillStyle = "lightblue";
  context.fill();
}
// 度转弧度
function degreeToRadians(degree) {
  return (degree * Math.PI) / 180;
}
// 刷新画布
function fillBackgoundColor(canvas, context) {
  let bgColor = get_seleted_value_by_id("backgroundColor");
  // console.log(bgColor);
  /* 用 White 填充整个画布 */
  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}
// 获得 Twitter
function updateTweets(tweets) {
  let tweetsSelection = document.getElementById("tweets");

  for (let i = 0; i < tweets.length; i++) {
    tweet = tweets[i];
    let option = document.createElement("option");
    option.text = tweet.text;
    option.value = tweet.text.replace("\"", "'");

    tweetsSelection.option.add(option);
  }

  tweetsSelection.selectedIndex = 0;
}

/* * * * * * * * * * * * * 自定义函数 * * * * * * * * * *  */
function get_seleted_value_by_id(id) {
  let selectObj = document.getElementById(id);
  /* selectedIndex 返回所选项的编号，从 0 开始  */
  let index = selectObj.selectedIndex;
  let value = selectObj[index].value;
  return value;
}
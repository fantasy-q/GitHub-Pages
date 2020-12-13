/* tweetshirt.js */

window.onload = init;

// 初始化
function init() {
  console.log("init");
  set_Tweet_Select_Width();

  let button = document.getElementById("previewButton");
  button.onclick = previewHandler;

  // Easter Egg
  makeImage();
}
// 预览按钮处理
function previewHandler() {
  // console.log("previewHandler");
  let canvas = document.getElementById("tshirtCanvas");
  let context = canvas.getContext("2d");

  fillBackgoundColor(canvas, context);

  let shape = get_Seleted_Value_By_Id("shape")
  if (shape == "squares") {
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if (shape == "circles") {
    for (let circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  }
  drawText(canvas, context);
  drawBird(canvas, context);
}

// 刷新画布
function fillBackgoundColor(canvas, context) {
  let bgColor = get_Seleted_Value_By_Id("backgroundColor");
  // console.log(bgColor);

  /* 用 White 填充整个画布 */
  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
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

// 绘制文字
function drawText(canvas, context) {
  let fgColor = get_Seleted_Value_By_Id("foregroundColor");
  let textAlign_Left = "left";
  let textAlign_Right = "right";
  let font_setting = "bold 1em sans-serif";

  font_setting = "bold 1em sans-serif";
  fillText_Setting(context, fgColor, font_setting, textAlign_Left);
  context.fillText("I saw this tweet", 20, 40);

  // Get the selected tweet from the tweets menu 
  let tweet = get_Seleted_Value_By_Id("tweets");
  // Draw the tweet
  font_setting = "italic 1.2em serif";
  fillText_Setting(context, fgColor, font_setting, textAlign_Left);

  // context.fillText(tweet, 30, 100);

  // If you want to try splitIntoLines to 
  // handle longer tweets, uncomment this code
  // and replace the context.fillText line above

  if (tweet.length > 60) {
    var tweetLines = splitIntoLines(tweet);
    for (var i = 0; i < tweetLines.length; i++) {
      context.fillText(tweetLines[i], 30, 70 + (i * 25));
    }
  }
  else {
    context.fillText(tweet, 30, 100);
  }
  //-------------------------------------------------

  font_setting = "bold 1em sans-serif";
  fillText_Setting(context, fgColor, font_setting, textAlign_Right);
  context.fillText("and all I got was this lousy t-shirt!",
    canvas.width - 20, canvas.height - 40);
}

// 绘制图片
function drawBird(canvas, context) {
  let twitterBird = new Image();
  twitterBird.src = "./twitterBird.png";
  twitterBird.onload = function () {
    context.drawImage(twitterBird, 20, 120, 70, 70);
  }
}

// 度转弧度
function degreeToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// 获得 Twitter
function updateTweets(tweets) {
  let tweetsSelection = document.getElementById("tweets");
  for (let i = 0; i < tweets.length; i++) {
    tweet = tweets[i];
    let option = document.createElement("option");
    option.text = tweet.text;
    option.value = tweet.text.replace("\"", "'");
    tweetsSelection.options.add(option);
  }
  tweetsSelection.selectedIndex = 0;
}

// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
  var strs = new Array();
  var space = str.indexOf(' ', 60);
  strs[0] = str.substring(0, space);
  strs[1] = str.substring(space + 1);
  if (strs[1].length > 60) {
    space = strs[1].indexOf(' ', 60);
    strs[2] = strs[1].substring(space + 1);
    strs[1] = strs[1].substring(0, space);
  }
  return strs;
}

// Easter Egg
function makeImage() {
  var canvas = document.getElementById("tshirtCanvas");
  canvas.onclick = function () {
    // 将画布转换为 base64 图片
    // chrome 禁止这种方式
    window.location = canvas.toDataURL('image/png');
    console.log('canvas.onclick');
  };
}

/* * * * * * * * * * * * * 自定义函数 * * * * * * * * * * * */
// 获取指定 id 的 Select 标签中选中的值
function get_Seleted_Value_By_Id(id) {
  let selectObj = document.getElementById(id);
  /* selectedIndex 返回所选项的编号，从 0 开始  */
  let index = selectObj.selectedIndex;
  return selectObj[index].value;

}
// fillText 配置
function fillText_Setting(context, fillStyle, font, textAlign) {
  context.fillStyle = fillStyle;
  context.font = font;
  context.textAlign = textAlign;
}
// 根据 Label 的宽度设置 Select 的宽度
function set_Tweet_Select_Width() {
  let Label = document.getElementById('tweetsLabel');
  let Label_Width = Label.offsetWidth
  let Select = document.getElementById('tweets')
  let Select_Width = `width: calc(600px - ${Label_Width}px);`;
  Select.setAttribute("style", Select_Width);
}
/* * * * * * * * * * * * * 自定义函数 * * * * * * * * * * * */
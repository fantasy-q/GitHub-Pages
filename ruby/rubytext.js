/* rubytext.js */

window.onload = init;

// 初始化
function init() {
  test()

  setLayout();
  let generateBtn = document.getElementById("generateBtn");
  let testButton = document.getElementById("testButton");

  generateBtn.onclick = generateButtonHandler;
  testButton.onclick = testButtonHandler;

}

// 生成按钮处理函数
function generateButtonHandler() {
  let BaseText = getTextAreaContent('textArea');
  let RubyText = getTextAreaContent('rubyArea');
  BaseText = BaseText.split("");
  RubyText = RubyText.split(/\s/);
  // logDebug(BaseText);
  // logDebug(RubyText);
  if (BaseText[0] && RubyText[0]) {
    let RubyMarkup = makeRubyMarkup(BaseText, RubyText);
    setTextAreaContent('outputArea', RubyMarkup);
  } else {
    // console.log('长度不一致或未输入文本');
  }
}
// 测试按钮处理函数
function testButtonHandler() {
  let BaseText = '测试用例\n\n这是一个测试用例';
  let RubyText = 'ce shi yong li\n\nzhe shi yi ge ce shi yong li';
  setTextAreaContent('textArea', BaseText);
  setTextAreaContent('rubyArea', RubyText);
}

// 合成 Ruby Markup
function makeRubyMarkup(base, ruby) {
  let RubyMarkup = "";
  for (let index = 0; index < base.length; index++) {
    if (base[index] == '\n') {
      ruby.splice(index, 0, " ")
      RubyMarkup += "<br>\n";
    } else {
      RubyMarkup += `<ruby><rb>${base[index]}</rb><rt>${ruby[index]}</rt></ruby>`;
    }
  }
  return RubyMarkup;
}

// 获取 <textarea> 的文本 
function getTextAreaContent(id) {
  let TextArea = document.getElementById(id);
  return TextArea.value;
}

// 设置 <textarea> 的文本 
function setTextAreaContent(id, content) {
  let TextArea = document.getElementById(id);
  return TextArea.innerHTML = content;
}

// 设置布局 
function setLayout() {
  let textArea = document.getElementById('textArea');
  let rubyArea = document.getElementById('rubyArea');
  let outputArea = document.getElementById('outputArea');
  let wrapArea = document.getElementById('mainSection');

  let textAreaWidth = textArea.offsetWidth;
  let rubyAreaWidth = rubyArea.offsetWidth;
  let inputAreaWidth = textAreaWidth + rubyAreaWidth;

  let outputAreaWidth = inputAreaWidth + (TEXTAREA.margin - TEXTAREA.border - TEXTAREA.padding) * 2;
  // let wrapAreaWidth = inputAreaWidth + TEXTAREA.getOneSide() * 4;
  let wrapAreaWidth = outputAreaWidth + TEXTAREA.getOneSide() * 2 + 4;

  outputArea.setAttribute("style", setStyleWidth(outputAreaWidth));
  // wrapArea.setAttribute("style", setStyleWidth(wrapAreaWidth - (TEXTAREA.border + TEXTAREA.margin) * 2));
  wrapArea.setAttribute("style", setStyleWidth(wrapAreaWidth));

  let inputStyle = document.createElement("style");
  inputStyle.innerHTML = (
    "input {" +
    `  margin: 0px ${TEXTAREA.margin}px;` +
    "}"
  );
  document.head.appendChild(inputStyle);
}


function setStyleWidth(width) {
  return `width: ${width}px;`;
}

function logDebug(debug) {
  console.log(debug, typeof (debug));
}

function test() {
  // let string = "1、2、3";
  // logDebug(string.split("、"));
  // logDebug(string.split(/(、)/g));
  // logDebug(string.split(/(?=、)/g));
  // logDebug(string.split(/(?!、)/g));
  // logDebug(string.split(/(.*?、)/g));
}

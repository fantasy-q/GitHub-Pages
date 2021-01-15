// 确保DOM创建后再执行代码
window.onload = init;
// ----------------------
function init() {
  var button = document.getElementById("addButton");
  // console.log(button);
  button.onclick = handlerButtonClick;
  // test();
}
function handlerButtonClick() {
  // alert("Button was clicked!");
  var textInput = document.getElementById("songTextInput");
  var songName = textInput.value;
  // 没有输入，input的值是长度为0的字符串
  // console.log(songName, typeof (songName), songName.length);
  if (songName == "") {
    alert("Please enter a song!")
  } else {
    alert("Adding " + songName)
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    // test();
  }
}

// function test() {
//   // console.log('test');
//   var array_list_item = document.getElementsByTagName("li");
//   console.log(array_list_item);
// }



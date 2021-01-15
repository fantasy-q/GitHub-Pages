/* main.js */

var videos = {
  video1: "../video/demovideo1",
  video2: "../video/demovideo2",
}

var effectFunction = null;

window.onload = init;

// 初始化
function init() {
  let video = document.getElementById("video");
  video.src = videos.video1 + getFormatExtension();
  video.load();
  /* querySelectorAll() CSS 选择器 */
  let controlLinks = document.querySelectorAll("a.control");
  for (let index = 0; index < controlLinks.length; index++) {
    // console.log(controlLinks[index]);
    controlLinks[index].onclick = handleControl;
  }
  let effectLinks = document.querySelectorAll("a.effect");
  for (let index = 0; index < effectLinks.length; index++) {
    // console.log(controlLinks[index]);
    effectLinks[index].onclick = setEffect;
  }
  let videoLinks = document.querySelectorAll("a.videoSelection");
  for (let index = 0; index < videoLinks.length; index++) {
    videoLinks[index].onclick = setVideo;
  }

  pushUnpushButtons("video1", []);
  pushUnpushButtons("normal", []);

  video.addEventListener("ended", endedHandler, false);
  video.addEventListener("play", processFrame, false);
}

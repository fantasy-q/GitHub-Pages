/* webvilletv.js */

var position = 0;
var playlist;
var video;

window.onload = init;

// 初始化
function init() {
  playlist = [
    "../video/preroll",
    "../video/areyoupopular",
    "../video/destinationearth",
  ];
  video = document.getElementById("video");

  video.addEventListener("ended", nextVideo, false);
  video.addEventListener("error", errorHandler, false);
  video.src = playlist[position] + getFormatExtension();

  video.load();
  video.play();

}

// 播放下一个视频
function nextVideo() {
  position++;
  // 放完了，从头开始
  if (position >= playlist.length) {
    position = 0;
  }
  video.src = playlist[position] + getFormatExtension();
  video.load();
  video.play();
}

// 获取格式扩展名
function getFormatExtension() {
  if (video.canPlayType("video/mp4") != "") {
    return ".mp4";
  } else if (video.canPlayType("video/webm") != "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") != "") {
    return ".ogv";
  }
}

// 错误处理
function errorHandler() {
  let video = document.getElementById("video");
  if (video.error) {
    video.poster = "../images/technicaldifficulties.jpg";
    alert(video.error.code)
  }

}
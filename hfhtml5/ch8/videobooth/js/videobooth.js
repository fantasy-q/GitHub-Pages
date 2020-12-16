/* videobooth.js */

// 按钮处理
function handleControl(e) {
  // console.log("handleControl");
  // console.log("e.target", e.target.id);
  let id = e.target.getAttribute("id");

  if (id == "play") {
    pushUnpushButtons("play", ["pause"]);
    if (video.ended) {
      video.load();
    }
    video.play();
  } else if (id == "pause") {
    pushUnpushButtons("pause", ["play"]);
    video.pause();
  } else if (id == "loop") {
    if (isButtonPushed("loop")) {
      pushUnpushButtons("", ["loop"])
    } else {
      pushUnpushButtons("loop", [])
    }
    video.loop = !video.loop;
  } else if (id == "mute") {
    if (isButtonPushed("mute")) {
      pushUnpushButtons("", ["mute"])
    } else {
      pushUnpushButtons("mute", [])
    }
    video.muted = !video.muted;
  }
}

// 设置效果
function setEffect(e) {
  let id = e.target.getAttribute("id");
  console.log("setEffects");
  if (id == "normal") {
    pushUnpushButtons("normal", ["western", "noir", "scifi"])
    effectFunction = null;
  } else if (id == "western") {
    pushUnpushButtons("western", ["normal", "noir", "scifi"])
    effectFunction = western;
  } else if (id == "noir") {
    pushUnpushButtons("noir", ["normal", "western", "scifi"])
    effectFunction = noir;
  } else if (id == "scifi") {
    pushUnpushButtons("scifi", ["normal", "western", "noir"])
    effectFunction = scifi;
  }
}

// 设置视频
function setVideo(e) {
  let id = e.target.getAttribute("id");
  if (id == "video1") {
    pushUnpushButtons("video1", ["video2"]);
  } else if (id == "video2") {
    pushUnpushButtons("video2", ["video1"])
  }
  // 切换视频
  video.src = videos[id] + getFormatExtension();
  video.load();
  video.play();

  pushUnpushButtons("play", ["pause"]);
}

// 按下弹起
function pushUnpushButtons(idToPush, idArrayToUnpush) {
  // console.log("pushUnpushButtons");
  /* 按下按钮 */
  if (idToPush != "") {
    let anchor = document.getElementById(idToPush);
    // console.log("Push", anchor);
    /* 设置按下类 */
    let theClass = anchor.getAttribute("class");
    if (!theClass.indexOf("selected") >= 0) {
      /* 添加空格，否则变成一个类 */
      theClass = theClass + " " + "selected";
      anchor.setAttribute("class", theClass);
      let newImage = "url(../images/" + idToPush + "pressed.png";
      anchor.style.backgroundImage = newImage;
    }
  }

  /* 谈起按钮 */
  for (let index = 0; index < idArrayToUnpush.length; index++) {
    let anchor = document.getElementById(idArrayToUnpush[index]);
    // console.log("Unpush", anchor);
    /* 设置弹起类 */
    let theClass = anchor.getAttribute("class");
    if (!theClass.indexOf("selected") >= 0) {
      theClass = theClass.replace("selected", "");
      // console.log(theClass);
      anchor.setAttribute("class", theClass);
      anchor.style.backgroundImage = "";
    }
  }
}

// 是否按下
function isButtonPushed(id) {
  let anchor = document.getElementById(id);
  let theClass = anchor.getAttribute("class");
  return (theClass.indexOf("selected") >= 0);
}

// 获取格式扩展名
function getFormatExtension() {
  // console.log(video);
  if (video.canPlayType("video/mp4") != "") {
    return ".mp4";
  } else if (video.canPlayType("video/webm") != "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") != "") {
    return ".ogv";
  }
}

// 
function endedHandler() {
  pushUnpushButtons("", ["play"]);
}

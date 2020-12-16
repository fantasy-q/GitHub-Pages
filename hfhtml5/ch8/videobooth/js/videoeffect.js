/* videoeffect.js */

// 处理视频帧
function processFrame() {
  if (videos.paused || videos.ended) {
    return;
  }
  let bufferCanvas = document.getElementById("buffer");
  let displayCanvas = document.getElementById("display");
  let buffer = bufferCanvas.getContext("2d");
  let display = displayCanvas.getContext("2d");

  buffer.drawImage(video, 0, 0, bufferCanvas.width, bufferCanvas.height);
  let frame = buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);

  /* RGBA */
  let length = frame.data.length / 4;
  for (let index = 0; index < length; index++) {
    let r = frame.data[index * 4 + 0];
    let g = frame.data[index * 4 + 1];
    let b = frame.data[index * 4 + 2];
    // let a = frame.data[index * 4 + 3];
    if (effectFunction) {
      effectFunction(index, r, g, b, frame.data);
    }
  }
  display.putImageData(frame, 0, 0);
  setTimeout(processFrame, 0);
}

/** 特效
 * 1. (3r + 4g + b) >>> 3 是什么？
 * 
 *
 */
function western(pos, r, g, b, data) {
  let brightness = (3 * r + 4 * g + b) >>> 3;
  data[pos * 4 + 0] = brightness + 40;
  data[pos * 4 + 1] = brightness + 20;
  data[pos * 4 + 2] = brightness - 20;
}

function scifi(pos, r, g, b, data) {
  let offset = pos * 4;
  data[offset + 0] = Math.round(255 - r);
  data[offset + 1] = Math.round(255 - g);
  data[offset + 2] = Math.round(255 - b);
}

function noir(pos, r, g, b, data) {
  let brightness = (3 * r + 4 * g + b) >>> 3;
  if (brightness < 0) brightness = 0;
  data[pos * 4 + 0] = brightness;
  data[pos * 4 + 1] = brightness;
  data[pos * 4 + 2] = brightness;
}

// function bwcartoon(pos, r, g, b, outputData) {
function normal(pos, r, g, b, outputData) {
  let offset = pos * 4;
  if (outputData[offset] < 120) {
    outputData[offset] = 80;
    outputData[offset++] = 80;
    outputData[offset++] = 80;
  } else {
    outputData[offset] = 255;
    outputData[offset++] = 255;
    outputData[offset++] = 255;
  }
  outputData[++offset] = 255;
  ++offset;
}
/* notetoself.js */

window.onload = init;
function init() {
  let button = document.getElementById("add_button");
  button.onclick = createSticky;
  // for loop goes here

  for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index);
    if (key.substring(0, 6) == "sticky") {
      let value = localStorage.getItem(key);
      addStickyToDOM(value);
    }
  }
}

function addStickyToDOM(value) {
  let stickies = document.getElementById("stickies");
  let sticky = document.createElement("li");
  let span = document.createElement("span");

  span.setAttribute("class", "sticky");
  span.innerHTML = value;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
}

function createSticky() {
  let value = document.getElementById("note_text").value;
  let key = "sticky_" + localStorage.length;
  localStorage.setItem(key, value);

  addStickyToDOM(value);
}
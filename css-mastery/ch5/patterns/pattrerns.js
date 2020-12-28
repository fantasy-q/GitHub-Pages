/* pattrerns.js */

window.onload = init;

function init() {
  const h1 = document.getElementsByTagName("h1")[0];
  let ul = document.createElement("ul");
  h1.parentNode.appendChild(ul);
  // 插入到 <ul>
  patterns.forEach(element => {
    console.log(element);
    let item = createListItem(element);
    ul.appendChild(item);
  });
}

function createListItem(element) {
  let a = document.createElement("a");
  let li = document.createElement("li");
  let span = document.createElement("span");
  const name = element['name'];
  const path = base + name;
  // 设置 <a>
  a.href = path;
  a.target = "_blank";
  // 设置 <li>
  li.innerHTML = name.split('.')[0];
  // 设置 <span>
  span.classList.add("right");
  li.appendChild(span);
  a.appendChild(li);
  return a;
}

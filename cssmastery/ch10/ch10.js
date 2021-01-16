/* ch10.js */
// 相对于 index.html 的位置
loadScript('./data.js');
loadStyles('./ch10.css');
window.onload = init;

function init() {
  const main = createBody();
  const ul = document.createElement("ul");
  // 添加到 <ul>
  data.htmls.forEach((element) => {
    const li = createListItem(element);
    ul.appendChild(li);
  });
  // 插入标题和演示文件
  insertPractice(ul);
  // appendPractice(ul);
  insertHeading(ul);
  main.appendChild(ul);
}
// create <li>
function createListItem(element) {
  const li = document.createElement("li");
  const spanCN = createSpan(element);
  const a = createA(element);
  const page = element.name.slice(3, 5);
  li.setAttribute("data-page", page);
  a.appendChild(spanCN);
  li.appendChild(a);
  return li;
}

function createA(element) {
  let name = element['name'];
  let path = base + name;
  const a = document.createElement("a");
  a.href = path;
  a.target = "_blank";
  a.innerText = name.split('.')[0];
  return a;
}

function createSpan(element) {
  const span = document.createElement("span");
  span.classList.add("right");
  span.innerText = element['title'];
  return span;
}
// Create <title> <h1>
function createBody() {
  const header = document.createElement("header");
  document.getElementsByTagName("title")[0].innerText = data.chapter;
  const body = document.body;
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.innerText = data.getChapterText();
  header.appendChild(h1);
  body.appendChild(header);
  body.appendChild(main);
  return main;
}
// 
function insertHeading(ul) {
  for (const key in object = data.headings) {
    if (Object.hasOwnProperty.call(object, key)) {
      const h2 = document.createElement('h2');
      const heading = object[key];
      h2.innerText = heading;

      const page = key.padStart(2, 0);
      const insertBefore = ul.querySelector(`[data-page="${page}"]`);
      ul.insertBefore(h2, insertBefore);
      delete object[key];
    }
  }
}
function insertPractice(ul) {
  for (const key in object = data.practices) {
    if (Object.hasOwnProperty.call(object, key)) {
      const li = createListItem(object[key]);
      li.firstChild.classList.add('overflow');
      const page = key.padStart(2, 0);
      const insertBefore = ul.querySelector(`[data-page="${page}"]`);
      ul.insertBefore(li, insertBefore);
      delete object[key];
    }
  }
}

function appendPractice(ul) {
  for (const key in object = data.practices) {
    if (Object.hasOwnProperty.call(object, key)) {
      const li = createListItem(object[key]);
      li.firstChild.classList.add('overflow');
      ul.appendChild(li);
      delete object[key];
    }
  }

}
// Loading
function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
  return script;
}

function loadStyles(url) {
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
  return link;
}
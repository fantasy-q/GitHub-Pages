/* ch10.js */
// 相对于 index.html 的位置
loadScript('./data.js');
loadStyles('./ch10.css');
window.onload = init;

function init() {
  const main = createBody();
  const ul = document.createElement("ul");
  // 插入到 <ul>
  data.htmls.forEach((element) => {
    const li = createListItem(element);
    const link = li.parentNode;
    // 插入标题
    const page = li.firstChild.innerHTML.slice(3, 5);
    ul.appendChild(insertTitleBefore(page));
    ul.appendChild(link);
  });
  main.appendChild(ul);
  console.log(document.head);
}

function createListItem(element) {
  const a = document.createElement("a");
  const li = document.createElement("li");
  const spanCN = document.createElement("span");
  const spanEN = document.createElement("span");
  const name = element['name'];
  const path = base + name;
  li.classList.add("overflow")
  // 设置 <a>
  a.href = path;
  a.target = "_blank";
  // 设置中文 <span>
  spanEN.classList.add("left");
  spanEN.innerHTML = name.split('.')[0];
  spanCN.classList.add("right");
  spanCN.innerHTML = element['title']
  li.appendChild(spanEN);
  li.appendChild(spanCN);
  a.appendChild(li);
  return li;
}

// Create <title> <h1>
function createBody() {
  const header = document.createElement("header");
  document.getElementsByTagName("title")[0].innerHTML = data.chapter;
  const body = document.body;
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.innerHTML = data.getChapterText();
  header.appendChild(h1);
  body.appendChild(header);
  body.appendChild(main);
  return main;
}

// insert title 
function insertTitleBefore(page) {
  if (page != 'XX') {
    page = Number.parseInt(page);
  }
  const h2 = document.createElement("h2");
  for (const key in object = data.headings) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (page == key) {
        const element = object[key];
        h2.innerHTML = element;
        // 防止重复插入
        delete object[key];
      }
    }
  }
  return h2;
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
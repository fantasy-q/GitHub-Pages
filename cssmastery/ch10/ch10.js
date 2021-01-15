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
    // 遍历页码
    const page = li.firstChild.innerText.slice(3, 5);
    const insertNode = insertBefore(page);
    if (insertNode) {
      ul.appendChild(insertNode);
    }
    ul.appendChild(li);
  });
  main.appendChild(ul);
}
// create <li>
function createListItem(element) {
  const li = document.createElement("li");
  const spanCN = document.createElement("span");
  const a = createA(element);
  // 设置中文 <span>
  spanCN.classList.add("right");
  spanCN.innerText = element['title']
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

function insertBefore(page) {
  if (page != 'XX') {
    page = Number.parseInt(page);
  }
  let node = '';
  // 标题
  for (const key in object = data.headings) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (page == key) {
        const heading = object[key];
        node = document.createElement('h2');
        node.innerText = heading;
        // 防止重复插入
        delete object[key];
      }
    }
  }
  // 自建文件
  for (const key in object = data.practices) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (page == key) {
        const element = object[key];
        node = createListItem(element);
        // 将 <a> 设置为 overflow
        node.firstChild.classList.add('overflow');
        delete object[key];
      }
    }
  }
  return node;
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
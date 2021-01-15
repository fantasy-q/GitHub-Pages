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
    // 插入标题
    const page = li.firstChild.innerText.slice(3, 5);
    const insertH2 = insertTitleBefore(page);
    if (insertH2.hasChildNodes()) {
      ul.appendChild(insertH2);
    }
    ul.appendChild(li);
  });
  main.appendChild(ul);
}

function createListItem(element) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const spanCN = document.createElement("span");
  const name = element['name'];
  const path = base + name;
  // 
  li.setAttribute('data-page',3)
  console.log(li.dataset);
  // 设置 <a>
  a.href = path;
  a.target = "_blank";
  a.innerText = name.split('.')[0];
  // 设置中文 <span>
  spanCN.classList.add("right");
  spanCN.innerText = element['title']
  a.appendChild(spanCN);
  li.appendChild(a);
  return li;
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
        h2.innerText = element;
        // 防止重复插入
        delete object[key];
      }
    }
  }
  return h2;
}
// insert item 
function insertItemBefore(page) {
  if (page != 'XX') {
    page = Number.parseInt(page);
  }
  const h2 = document.createElement("h2");
  for (const key in object = data.headings) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (page == key) {
        const element = object[key];
        h2.innerText = element;
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
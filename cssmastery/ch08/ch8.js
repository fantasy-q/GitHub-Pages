/* ch8.js */
window.onload = init;

function init() {
  const main = createBody();
  const ul = document.createElement("ul");
  // 插入到 <ul>
  htmls.forEach((element) => {
    const li = createListItem(element);
    const link = li.parentNode;
    // 插入标题
    const page = li.firstChild.innerHTML.slice(3, 5);
    ul.appendChild(insertTitleBefore(page));
    ul.appendChild(link);
  });
  main.appendChild(ul);
  console.log(window.innerWidth);
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
  document.getElementsByTagName("title")[0].innerHTML = title;
  const body = document.body;
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.innerHTML = title.split(' ').slice(2).join(' ');
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
  for (const key in object = titles) {
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

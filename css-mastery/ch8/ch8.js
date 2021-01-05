/* ch8.js */
window.onload = init;

function init() {
  let h1 = createTitle();
  let ul = document.createElement("ul");
  h1.parentNode.appendChild(ul);
  // 插入到 <ul>
  htmls.forEach(element => {
    let a = createListItem(element);
    // 插入标题
    let page = a.innerHTML.slice(7, 9);
    ul.appendChild(insertTitle(page));
    ul.appendChild(a);
  });
  insertTitle(01);
}

function createListItem(element) {
  let a = document.createElement("a");
  let li = document.createElement("li");
  let span = document.createElement("span");
  let name = element['name'];
  let path = base + name;
  // 设置 <a>
  a.href = path;
  a.target = "_blank";
  // 设置 <li>
  li.innerHTML = name.split('.')[0];
  // 设置 <span>
  span.classList.add("right");
  span.innerHTML = element['title']
  li.appendChild(span);
  a.appendChild(li);
  return a;
}

// Create <title> <h1>
function createTitle() {
  document.getElementsByTagName("title")[0].innerHTML = title;
  let body = document.body;
  let article = document.createElement("article");
  let h1 = document.createElement("h1");
  h1.innerHTML = title.split(' ').slice(2).join(' ');
  article.appendChild(h1);
  body.appendChild(article);
  return h1;
}

// insert title 
function insertTitle(page) {
  if (page != 'XX') {
    page = Number.parseInt(page);
  }
  let h2 = document.createElement("h2");
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

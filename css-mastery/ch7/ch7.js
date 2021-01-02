/* ch6.js */
window.onload = init;

function init() {
  let h1 = createTitle();
  let ul = document.createElement("ul");
  h1.parentNode.appendChild(ul);
  // 插入到 <ul>
  htmls.forEach(element => {
    if (element.type == 'a') {
      let a = createListItem(element);
      ul.appendChild(a);
    } else if (element.type == 'h2') {
      let h2 = document.createElement("h2");
      h2.innerHTML = element.title;
      ul.appendChild(h2);
    }
  });
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
  // h1.innerHTML = title.split(/[0-9]/).slice(-1)[0].trim()
  article.appendChild(h1);
  body.appendChild(article);
  return h1;
}

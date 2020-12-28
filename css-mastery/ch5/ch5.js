/* ch5.js */

window.onload = init;

function init() {
  const ul = document.createElement("ul");
  const h1 = document.getElementsByTagName("h1")[0];
  h1.parentNode.appendChild(ul);

  for (const key in htmls) {
    if (Object.hasOwnProperty.call(htmls, key)) {
      const element = htmls[key];
      const filename = element['filename'];
      const description = element['description'];

      let a = document.createElement("a");
      let span = document.createElement("span");
      let li = document.createElement("li");
      let text = filename.slice(0, -5);

      a.setAttribute("href", base + filename);
      a.setAttribute("target", "_blank");
      span.setAttribute("class", "right");
      span.innerHTML = description;
      a.setAttribute("id", "a" + key.padStart(2, 0))
      li.innerHTML = text;
      li.appendChild(span);
      a.appendChild(li);
      ul.appendChild(a);
    }
  }
  insertHeading();
}

function insertHeading() {
  for (const key in titles) {
    if (Object.hasOwnProperty.call(titles, key)) {
      const title = titles[key];
      const heading = document.createElement("h2");
      const node = document.getElementsByTagName("ul")[0];
      const id = (key + "").padStart(2, 0);
      heading.innerHTML = title;
      node.insertBefore(heading, document.getElementById("a" + id));
    }
  }
}
/* chapter4 */

window.onload = init;

function init() {
  // let body = document.body;
  let ul = document.getElementsByTagName("ul")[0];

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
      a.innerHTML = text;
      span.setAttribute("class", "right");
      span.innerHTML = description;

      li.appendChild(a);
      li.appendChild(span);
      ul.appendChild(li);
    }
  }
}


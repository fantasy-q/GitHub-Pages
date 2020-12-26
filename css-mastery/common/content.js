window.onload = init;

function init() {
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
      span.setAttribute("class", "right");
      span.innerHTML = description;
      a.setAttribute("id", filename.slice(3, 5))
      li.innerHTML = text;
      li.appendChild(span);
      a.appendChild(li);
      ul.appendChild(a);
    }
  }

}
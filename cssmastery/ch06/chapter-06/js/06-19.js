window.onload = () => {
  let h1 = document.body.firstChild;
  // 无样式
  let meta = createMeta();
  document.body.insertBefore(meta, h1);
  // 行内块
  let meta_ib = createMeta("ib");
  meta_ib.appendChild(createImg("-ib"));
  meta_ib.appendChild(createInfo("-ib"));
  meta_ib.children[3].classList.add("middle");
  document.body.insertBefore(meta_ib, h1)
  // 垂直居中
  let meta_ib_vam = createMeta("ib");
  meta_ib_vam.appendChild(createImg("-ib"));
  meta_ib_vam.appendChild(createInfo("-ib"));
  meta_ib_vam.children[1].classList.add("middle");
  meta_ib_vam.children[2].classList.add("middle");
  meta_ib_vam.children[3].classList.add("middle");
  document.body.insertBefore(meta_ib_vam, h1)
  // meta_ib.children[4].classList.add("middle");
  // meta_ib.children[5].classList.add("middle");
  // meta_ib.children[7].classList.add("middle");
  // meta.classList.add(ClassName.meta);
  console.log(meta);
}

const ClassName = {
  meta: "a-meta",
  img: "a-image",
  info: {
    val: "a-info",
    name: "a-name",
    email: "a-email"
  }
}
const style = {
  textAlign: "left",
  display: "inline-block",
  verticalAlign: "middle",
  display: "block",
}
function createImg(c) {
  let img = document.createElement("img");
  img.classList.add(ClassName.img);
  img.classList.add(ClassName.img + c);
  img.src = "images/author.jpg"
  img.alt = "Arthur C. Lark"
  return img;
}
function createInfo(c) {
  let info = document.createElement("span");
  info.classList.add(ClassName.info.val);
  info.classList.add(ClassName.info.val + c);

  let name = document.createElement("span");
  name.classList.add(ClassName.info.name);
  name.classList.add(ClassName.info.name + c);
  name.innerHTML = "Written by Arthur C. Lark"

  let email = document.createElement("a");
  email.classList.add(ClassName.info.email);
  email.classList.add(ClassName.info.email + c);
  email.href = "mailto:arthur.c.lark@example.com";
  email.innerHTML = "arthur.c.lark@example.com";

  info.appendChild(name);
  info.appendChild(email);

  return info;
}
function createMeta(c) {
  if (!c) c = 'unstyled';
  c = "-" + c;
  let meta = document.createElement("p");
  meta.classList.add(ClassName.meta);
  let img = createImg(c);
  let info = createInfo(c);
  meta.appendChild(img);
  meta.appendChild(info);
  return meta;
}
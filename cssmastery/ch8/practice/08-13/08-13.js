window.onload = () => {
  const ul = document.createElement("ul");
  ul.className = 'ordering-widget';
  itemName.forEach(name => {
    const li = createItem(name);
    ul.appendChild(li);
  })
  document.body.appendChild(ul);
}

function createItem(itemName = '') {
  const item = document.createElement("li");
  const name = document.createElement("span");
  const controls = document.createElement("span");
  const plus = document.createElement("button");
  const minus = document.createElement("button");

  item.className = 'item';
  name.className = 'item-name';
  controls.className = 'item-controls';
  plus.className = 'item-control item-increase';
  minus.className = 'item-control item-decrease';

  name.innerHTML = itemName;
  plus.innerHTML = '+';
  minus.innerHTML = '-';

  controls.appendChild(plus);
  controls.appendChild(minus);
  item.appendChild(name);
  item.appendChild(controls);

  return item;
}

const itemName = [
  'Flux capacitor regulator',
  'Multiverse unicorn wrench',
  'Singularity transmogrifier',
  'Time-reverse sensitive oil',
]

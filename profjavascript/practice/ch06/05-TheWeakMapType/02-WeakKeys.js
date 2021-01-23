const alert = console.log.bind(console);

const wm = new WeakMap();

wm.set({}, "val");
alert(wm.has({}));
console.log();

const container = {
  key: {}
};
alert(container.key);
console.log();

wm.set(container.key, "val");
alert(wm.has({}));
alert(wm.has(container.key));
console.log();

function removeReference() {
  container.key = null;
}
removeReference();
alert(wm.has(container.key));


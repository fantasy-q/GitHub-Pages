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
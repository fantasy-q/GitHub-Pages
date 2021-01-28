const codes = document.querySelectorAll('.code');


for (const code of codes) {
  const divs = code.getElementsByTagName('div');
  for (const div of divs) {
    // 换行
    div.innerHTML = div.innerHTML.replace(/\n/g, '<br>');
    // 对齐
    div.innerHTML = div.innerHTML.replace(/│/g, '│' + '&ensp;'.repeat(1));
  }
}



const prettifys = document.querySelectorAll('.prettify');

for (const prettify of prettifys) {
  const code = prettify.firstElementChild;
  console.log(code);
  const textarr = new Array();
  code.innerText.split(/\n/g).forEach((e, i) => {
    if (e) {
      e.trim() ?
        textarr.push(e.trim()) :
        textarr.push('\n')
    }
  })
  console.log(textarr);
  const str = textarr.slice(0, -1).join('');
  code.innerText = prettifyCode(str);
}

function prettifyCode(string) {
  let code = new String();
  let stack = 0;
  let lastChar = new String();

  const space = '  ';

  for (let i = 0; i < string.length; i++) {
    const c = string[i];
    switch (c) {
      case '{':
        stack++;
        code += (c + '\n' + space.repeat(stack));
        break;
      case ';':
        code += (c + '\n' + space.repeat(stack));
        break;
      case '}':
        stack--;
        lastChar === ';' ?
          code = (code.slice(0, -space.length) + c) :
          code += ('\n' + space.repeat(stack) + c);
        break;
      case '\n':
        code += '\n\n';
        break;
      default:
        code += c;
    }
    lastChar = c;
  }
  return code;
}



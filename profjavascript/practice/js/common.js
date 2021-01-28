const separation = (param, l = 50) => {
  const Length = l;
  param = String(param ? ` ${param} ` : '');
  let finalstr = param.padStart((Length + param.length) / 2, '-').padEnd(Length, '-');
  console.log('\n' + `${finalstr}`);
};

/**
 * console.log\((.+)\);
 * console.log('$1', $1);
 */

function Setting() { }
Setting.prototype.MAX_RES = 10;
Setting.prototype.MAX_EXP = 40;
Setting.prototype.PAD_STR = '-';
Setting.prototype.isShowLengthInfo = true;
// 不能使用箭头函数
Setting.prototype.getTotalLength = function () {
  const l = this.MAX_RES + this.MAX_EXP + 3 + 4;
  return this.isShowLengthInfo ? l + 12 : l;
}

let setting = new Setting();

function formattingLog(_name, _variable, _set = setting) {
  let str = '';
  let lengthInfo = '';
  let exp = String(_name);
  let res = String(_variable);

  if (exp.lastIndexOf('=') == (-1)) {
    const str_arr = [
      exp.padStart(_set.MAX_EXP, _set.PAD_STR),
      ' : ',
      res.padEnd(_set.MAX_RES, _set.PAD_STR)
    ]

    str = str_arr.join('');
    // lengthInfo.legnth == 15
    lengthInfo = _set.isShowLengthInfo ?
      `(${getLength(exp)} + ${getLength(res)}) ` : '';
  } else {
    const str_arr = [
      ...exp.split(' '),
      ' is ',
      res,
    ]
    // console.log(str_arr);
    str = str_arr[0].padStart(_set.MAX_EXP - 1, _set.PAD_STR)// left
      + ' ' + str_arr[1].padEnd(4, ' ')// sign
      + str_arr[2]// right
      + str_arr[3]// is
      + str_arr[4].toUpperCase();// boolean
    str = str.padEnd(_set.MAX_EXP + _set.MAX_RES + 3, _set.PAD_STR);
    lengthInfo = _set.isShowLengthInfo ?
      `(${getLength(str_arr[0])} + ${getLength(str_arr[2])}) ` : '';
  }
  let output = lengthInfo + `| ${str} |`;
  console.log(output);
}

function getLength(params) {
  return String(params.length).padStart(2, '0');
}

module.exports = {
  separation,
  formattingLog,
  setting,
}

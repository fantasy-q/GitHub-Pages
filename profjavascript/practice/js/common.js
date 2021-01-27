const separation = (param, l = 50) => {
  const Length = l;
  param = String(param ? ` ${param} ` : '');
  console.log('\n' + param.padStart((Length + param.length) / 2, '-').padEnd(Length, '-'));
};

/**
 * console.log\((.+)\);
 * console.log('$1', $1);
 */

function Setting() { }
Setting.prototype.MAX_RES = 10;
Setting.prototype.MAX_EXP = 40;
Setting.prototype.PAD_STR = '-';
Setting.prototype.isShowLengthInfo = false;
// 不能使用箭头函数
Setting.prototype.getTotalLength = function () {
  const l = this.MAX_RES + this.MAX_EXP + 2;
  return this.isShowLengthInfo ? l + 12 : l;
}

let setting = new Setting();

function formattingLog(_name, _variable, _set = setting) {
  let exp = String(_name);
  let res = String(_variable);
  let l_exp = exp.length;
  let l_res = res.length;
  let s_l_exp = String(exp.length).padStart(2, '0');
  let s_l_res = String(res.length).padStart(2, '0');

  // const str_arr = [res, ': ', exp];
  const str_arr = l_exp >= l_res ?
    [exp.padStart(_set.MAX_EXP, _set.PAD_STR), ': ',
    res.padEnd(_set.MAX_RES, _set.PAD_STR)] :
    [exp.padStart(_set.MAX_RES, _set.PAD_STR), ': ',
    res.padEnd(_set.MAX_EXP, _set.PAD_STR)];
  let str = str_arr.join('');
  // lengthInfo.legnth == 15
  const lengthInfo = _set.isShowLengthInfo ?
    `(${s_l_exp} + ${s_l_res}) | ` : '';

  console.log(lengthInfo + str);
}
module.exports = {
  separation,
  formattingLog,
  setting,
}

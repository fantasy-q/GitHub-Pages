const separation = param => {
  const Length = 50;
  param = String(param ? ` ${param} ` : '');
  console.log('\n' + param.padStart((Length + param.length) / 2, '-').padEnd(Length, '-'));
};

module.exports = {
  separation,
}
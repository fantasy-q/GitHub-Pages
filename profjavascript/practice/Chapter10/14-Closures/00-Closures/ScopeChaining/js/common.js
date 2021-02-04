const alert = (exp, res) => {
  console.log(exp + "\n", res);
};

const separation = (param, l = 110) => {
  const Length = l;
  param = String(param ? ` ${param} ` : "");
  let finalstr = param
    .padStart((Length + param.length) / 2, "-")
    .padEnd(Length, "-");
  console.log("\n" + `${finalstr}`);
};
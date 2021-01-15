/* mightygumball.js */

window.onload = init;

function init() {
  console.log('init');
  /* 使用 Ajax 获取数据 */
  get_data_AJAX()
}

function get_data_AJAX() {
  // let url = "http://localhost:5500/hfhtml5/chapter6/sales.json"
  /* github 不算跨域？ */
  let url = "https://fantasy-q.github.io/example/hfhtml5/chapter6/sales.json"
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    console.log("request.status = ", request.status);
    if (request.status == 200) {
      updateSales_AJAX(request.responseText)
    }
  }
  request.send(null);
}

function updateSales_AJAX(responseText) {
  let salesDiv = document.getElementById("sales");
  // salesDiv.innerHTML = responseText;
  let sales = JSON.parse(responseText);
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let div = document.createElement("div")
    div.setAttribute("class", "salesItem");
    // ----------------------------------------
    let span_sales = createElement_with_class("sales", sale.sales);
    let span_name = createElement_with_class("name", sale.name);
    let span_date = createElement_with_class("date", get_date() + " ");
    let common_innerHTML = span_date.outerHTML + span_name.outerHTML + " sold " + span_sales.outerHTML;
    if (sale.sales == 1) {
      div.innerHTML + common_innerHTML + " gumball";
    } else {
      div.innerHTML = common_innerHTML + " gumballs";
    }
    // ----------------------------------------
    if (div.hasChildNodes()) {
      salesDiv.insertBefore(div, salesDiv.firstChild);
    }
  }
}

/* * * * * * * * * * * * * 自定义函数 * * * * * * * * * * * * * * */
// 日期格式化函数来自网络
function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "M+": (date.getMonth() + 1).toString(),     // 月
    "D+": date.getDate().toString(),            // 日
    "h+": date.getHours().toString(),           // 时
    "m+": date.getMinutes().toString(),         // 分
    "s+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

function get_date() {
  let date = new Date();
  return dateFormat("hh:mm:ss", date)
  // console.log(dateFormat("YYYY-MM-DD hh:mm:ss", date));
}

function createElement_with_class(className, innerHTML) {
  let span = document.createElement("span");
  span.setAttribute("class", className);
  span.innerHTML = innerHTML;
  return span;
}
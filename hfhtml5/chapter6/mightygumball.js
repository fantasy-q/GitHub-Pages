window.onload = function () {
  /* 使用 Ajax 获取数据 */
  // get_data_AJAX()

  /* window 可以省略 */
  window.setInterval(handleRefresh, 3000);
}
function handleRefresh() {
  let url = "http://gumball.wickedlysmart.com/?callback=updateSales_JSONP";
  let newScriptElement = document.createElement("script");
  newScriptElement.setAttribute("src", url);
  newScriptElement.setAttribute("id", "jsonp");
  let oldScriptElement = document.getElementById("jsonp");

  /* getElementsByTagName 返回的是一个数组，需要指定索引 */
  let head = document.getElementsByTagName("head")[0];
  if (oldScriptElement == null) {
    head.appendChild(newScriptElement);
  } else {
    head.replaceChild(newScriptElement, oldScriptElement);
  }
}

function updateSales_JSONP(sales) {
  let salesDiv = document.getElementById("sales");
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let div = document.createElement("div")
    div.setAttribute("class", "salesItem");
    // --------------------------------------------------
    let span_sales = createElement_with_class("sales", sale.sales);
    let span_name = createElement_with_class("name", sale.name);
    let span_date = createElement_with_class("date", get_date() + " ");

    let common_innerHTML = span_date.outerHTML + span_name.outerHTML + " sold " + span_sales.outerHTML;
    if (sale.sales == 1) {
      div.innerHTML + common_innerHTML + " gumball";
    } else {
      div.innerHTML = common_innerHTML + " gumballs";
    }

    // console.log(div.hasChildNodes());
    /* 可能由于网络问题，不一定每次都能获取到数据 */
    if (div.hasChildNodes()) {
      salesDiv.appendChild(div);
    }
    // --------------------------------------------------
  }
}

function get_data_AJAX() {
  // let url = "http://localhost:5500/hfhtml5/chapter6/sales.json"
  /* github 不算跨域？ */
  let url = "https://fantasy-q.github.io/example/hfhtml5/chapter6/sales.json"
  // let url = "http://gumball.wickedlysmart.com";
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    console.log("request.status = ", request.status);
    if (request.status == 200) {
      updateSales(request.responseText)
    }
  }
  request.send(null);
}

function updateSales_AJAX(responseText) {
  let salesDiv = document.getElementById("sales");
  // salesDiv.innerHTML = responseText;
  let sales = JSON.parse(responseText);
  console.log(sales);
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    let div = document.createElement("div")
    div.setAttribute("class", "salesItem");
    // ----------------------------------------
    let span_sales = document.createElement("span");
    span_sales.setAttribute("class", "sales");
    span_sales.innerHTML = sale.sales;
    let span_name = document.createElement("span");
    span_name.setAttribute("class", "name");
    span_name.innerHTML = sale.name;
    // ----------------------------------------
    if (sale.sales == 1) {
      div.innerHTML = span_name.outerHTML + " sold " + span_sales.outerHTML + " gumball";
    } else {
      div.innerHTML = span_name.outerHTML + " sold " + span_sales.outerHTML + " gumballs";
    }
    salesDiv.appendChild(div);
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

  // let span_sales = document.createElement("span");
  // span_sales.setAttribute("class", "sales");
  // span_sales.innerHTML = sale.sales;
  // let span_name = document.createElement("span");
  // span_name.setAttribute("class", "name");
  // span_name.innerHTML = sale.name;
  // let span_date = document.createElement("span");
  // span_date.setAttribute("class", "date");
  // span_date.innerHTML = get_date() + " ";
}
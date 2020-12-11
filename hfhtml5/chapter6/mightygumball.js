window.onload = function () {
  // let url = "http://localhost:5500/Head-First-HTML5/chapter6/sales.json"
  /* github 不算跨域？ */
  let url = "https://fantasy-q.github.io/example/Head-First-HTML5/chapter6/sales.json"
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

function updateSales(responseText) {
  let salesDiv = document.getElementById("sales");
  // salesDiv.innerHTML = responseText;
  let sales = JSON.parse(responseText);
  console.log(sales);
  for (let i = 0; i < sales.length; i++) {
    let sale = sales[i];
    
    let div = document.createElement("div")
    div.setAttribute("class", "salesItem");
    // ----------------------------------------
    let span = document.createElement("span");
    span.setAttribute("class", "number");
    span.innerHTML = sale.sales;
    // ----------------------------------------
    // div.innerHTML = sale.name + " sold " + "<span class='number'>" + sale.sales + "</span>" + " gumballs";
    if (sale.sales == 1) {
      div.innerHTML = sale.name + " sold " + span.outerHTML + " gumball";
    } else {
      div.innerHTML = sale.name + " sold " + span.outerHTML + " gumballs";
    }
    salesDiv.appendChild(div);
  }
}

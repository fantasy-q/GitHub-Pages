window.onload = function () {
  let url = "http://localhost:5500/Head-First-HTML5/chapter6/sales.json"
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status == 200) {
      updateSales(request.responseText)
    }
  }
  request.send(null);
  console.log('sdfsdf');
}

function updateSales(responseText) {
  let salesDiv = document.getElementById("sales");
  salesDiv.innerHTML = responseText;
}
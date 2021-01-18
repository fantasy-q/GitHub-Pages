// dom.js
window.onload = () => {
  const someNode = document.getElementsByTagName('ul')[0];
  // Node Type
  {
    Separation('Node Type');
    console.log('Node.ELEMENT_NODE = ', Node.ELEMENT_NODE);
    console.log(someNode.nodeType);
    if (someNode.nodeType == Node.ELEMENT_NODE) {
      alert("Node is an element.");
    }
    if (someNode.nodeType == 1) {
      someNode.nodeValue = someNode.nodeName; // will be the element's tag name
      console.log(someNode.nodeValue);
    }
  }
  // Relationship
  {
    Separation('Relationship');
    let firstChild = someNode.childNodes[0];
    let secondChild = someNode.childNodes.item(1);
    let count = someNode.childNodes.length;
    let arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);
    Type(someNode.childNodes);
    Type(arrayOfNodes);
    Type(secondChild.ownerDocument);
  }

  // Manipulating
  {
    Separation('Manipulating');
    {
      let newNode = document.createElement('li');
      let returnedNode = someNode.appendChild(newNode);
      alert(returnedNode == newNode); // true
      alert(someNode.lastChild == newNode); // true
    }
    // assume multiple children for someNode
    {
      let returnedNode = someNode.appendChild(someNode.firstChild);
      console.log(someNode.firstChild);
      alert(returnedNode == someNode.firstChild); // false
      alert(returnedNode == someNode.lastChild); // true
      console.log(someNode.children);
      console.log(someNode.children.first);
    }
    // console.log(someNode.children.__proto__);
    // Other
    let myList = document.getElementById('myList')
    let deepList = myList.cloneNode(true);
    alert(deepList.childNodes.length); // 3 (IE < 9) or 7 (others)

    let shallowList = myList.cloneNode(false);
    alert(shallowList.childNodes.length); // 0
    console.log(shallowList);
  }
  {
    let div = document.getElementById('myDiv')
    let value = div.getAttribute("data-my_special_attribute");
    console.log(value);
  }
  console.log(document.documentElement);
}



// --------------------
alert = (params) => {
  console.log(params);
}

function Type(params) {
  console.log(params, typeof params);
}
function Separation(params) {
  console.log(params.padEnd(40, '-'));
}

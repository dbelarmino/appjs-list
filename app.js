var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var lista = [];

function renderList() {
  listElement.innerHTML = "";
  for (item of lista) {
    var itemElement = document.createElement("li");
    var itemtext = document.createTextNode(item);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");

    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("class", "btn-excluir");

    var pos = lista.indexOf(item);
    linkElement.setAttribute("onclick", "deleteItem(" + pos + ")");

    linkElement.appendChild(linkText);

    itemElement.appendChild(itemtext);
    itemElement.appendChild(linkElement);

    listElement.appendChild(itemElement);
  }
}

renderList();

function addItem() {
  var itemText = inputElement.value;

  lista.push(itemText);

  inputElement.value = "";
  renderList();
}

function deleteItem(pos) {
  lista.splice(pos, 1);
  renderList();
}

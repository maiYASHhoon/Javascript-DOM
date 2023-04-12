var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//  form submit event
form.addEventListener("submit", addItem);
// delete Event
itemList.addEventListener("click", removeItem);
// filter event
filter.addEventListener("keyup", filterItems);

// add item
function addItem(e) {
  // delete event

  e.preventDefault();

  //   get input Item
  var newItem = document.getElementById("item").value;

  //   Create a new li Element
  var li = document.createElement("li");

  //   add Class
  li.className = "list-group-item";
  //   add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create del button Element
  var deleteBtn = document.createElement("button");

  //   add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //   append text Node
  deleteBtn.appendChild(document.createTextNode("X"));

  //   append button to li
  li.appendChild(deleteBtn);

  //   append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  //   Get Li
  var items = itemList.getElementsByTagName("li");

  //   Convert HTML collection to array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    console.log(itemName);
  });
}

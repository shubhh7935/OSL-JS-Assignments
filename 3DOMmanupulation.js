// Function to add a new list item
function addItem() {
  let item = prompt("Enter an item:");
  if (item) {
    let list = document.getElementById("myList");
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.listStyle = "none";
    list.appendChild(listItem);
  }
}

// Function to remove the first item from the list
function removeFirstItem() {
  let list = document.getElementById("myList");
  if (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

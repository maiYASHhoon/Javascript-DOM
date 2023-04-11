// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.images);

//👨‍💻 SELECTORS👨‍💻
/**
 * 💨 *GETELEMENTBYID*
 *
 * textContent
 * innerTEXT
 * innerHTML
 *
 ** */

// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "bye";
// console.log(headerTitle.textContent);
// text content will display the header title if span style is disabled it will not show
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";

/**
 * 💨 *GETELEMENTSBYCLASSNAME*
 
 ** */

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "blue";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

/**
 * 💨 *GETELEMENTSBYTAGNAME*
 
 ** */

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "blue";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

/**
 * 💨 *QUERYSELECTOR*

 ** */

// let header = document.querySelector("#main-header");
// header.style.borderBottom = "4px solid #f4f4f4";

// var input = document.querySelector("input");
// input.value = "Click To Add Items";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "blue";

/**
 * 💨 *QUERYSELECTORALL*

 ** */

// var titles = document.querySelectorAll(".title");
// console.log(titles);

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

// 👨‍💻TRAVERSING THE DOM👨‍💻//

// var itemList = document.querySelector("#items");
// // 💨 parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// // 💨 parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// //💨 childNode
// console.log(itemList.childNodes);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // 💨 First Child
// console.log(itemList.lastChild);
// // 💨lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Helleo";

// // 💨 nextSibling
// console.log(itemList.nextSibling);
// // 💨 nextElementSibling
// console.log(itemList.nextElementSibling);

// // 💨 previousSibling
// console.log(itemList.previousSibling);
// // 💨 previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// 👨‍💻CREATE ELEMENT👨‍💻//

// // 💨 create a Div
// var newDiv = document.createElement("div");
// // 💨 add a class
// newDiv.className = "hello";
// // 💨 add a id
// newDiv.id = "hello1";
// // 💨 add attribute
// newDiv.setAttribute("title", "Hello World");
// // 💨 create a text node
// var newDivText = document.createTextNode("Hello World");
// // 💨 Add text to node
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(newDiv);

// container.insertBefore(newDiv, h1);

// 👨‍💻 EVENTS 👨‍💻//

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   console.log("Button Clicked");
// document.getElementById("header-title").textContent = "Changed";
// document.querySelector("#main").style.backgroundColor = "#f4f4f4";
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";
// console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);
// 💨 for actal element cursor position
// console.log(e.offsetY);
// 💨 when we move down we see we hold the alt or crtl key
// console.log(e.altKey);
// console.log(e.ctrlKey);
// }

// 💨 Mouse Events

// var button = document.getElementById("button");
// .addEventListener("click", runEvent);
// .addEventListener("dblclick", runEvent);
// .addEventListener("mousedown", runEvent);
// .addEventListener("mouseup", runEvent);

// var box = document.getElementById("box");

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector("form");
// var select = document.querySelector("select");

// console.log(itemInput);
// itemInput.addEventListener("keydown", runEvent);
// select.addEventListener("change", runEvent);

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("EVENT TYPE: " + e.type);

// console.log(e.target.value);
// document.getElementById("output").innerHTML = "<h3> +w.target.value+ </h3>";

// output.innerHTML =
//   "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + " </h3>";

// box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
// }`

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

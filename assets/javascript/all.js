// ============================================================
// Create a new <li> element
// ============================================================

// find the parent element for the new <li> element
const ul = document.querySelector("ul");

// create the new <li> element
const li = document.createElement("li");

// add the new <li> element to the parent element
ul.append(li);

// set the class of the new <li> element
li.classList.add("nav-item");

// create the child of the <li> element
const a = document.createElement("a");

// add the child element to the <li> element
li.append(a);

// set the class of the child element
a.classList.add("nav-link", "active");

// set the attribute of the child element
a.setAttribute("href", "#");

// modify the text inside the child element
a.innerText = "New & Popular";

// Script for navigation
// Get references to DOM elements
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

// Add event listener to toggle navigation menu
if (bar ) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

// Add event listener to close navigation menu
if (close ) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


  
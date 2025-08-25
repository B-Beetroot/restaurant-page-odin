import "./styles/styles.css";
import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/about.js";

function clearContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild); 
  }
}

document.querySelector("#homeBtn").addEventListener("click", () => {
  clearContent();
  loadHome();
});

document.querySelector("#menuBtn").addEventListener("click", () => {
  clearContent();
  loadMenu();
});

document.querySelector("#aboutBtn").addEventListener("click", () => {
  clearContent();
  loadContact();
});

loadHome();
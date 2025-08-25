import odinsTable from "../images/odintable.png";

import loadMenu from "./menu.js";

export default function loadHome() {
    const content = document.querySelector("#content");

    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

    const heroImg = document.createElement("img");
    heroImg.classList.add("hero-img");
    heroImg.src = odinsTable;
    heroImg.alt = "The Allfather's Table";

    const textContainer = document.createElement("div");
    textContainer.classList.add("hero-text");

    const title = document.createElement("h1");
    title.textContent = "Welcome to The Allfather's Table";

    const message = document.createElement("p");
    message.textContent =
        "Where legends dine and mead flows eternal.\n\nEnter, brave soul. You stand beneath the vaulted rafters of Valhalla's finest hall, where the scent of roasted boar mingles with tales of glory. Here, every seat is earned, every toast echoes through the Nine Realms, and every dish is crafted to honor the gods.\n\nFeast like an Einherjar. Drink like a thunder god. Speak your truth, and let the firelight carry your story into myth.\n\nTonight, you are not a guest. You are part of the saga.";

    const button = document.createElement("button");
    button.textContent = "Enter the Feast";
    button.classList.add("hero-button");
    
    textContainer.appendChild(title);
    textContainer.appendChild(message);
    textContainer.appendChild(button);

    heroSection.appendChild(heroImg);
    heroSection.appendChild(textContainer);
    content.appendChild(heroSection);

    button.addEventListener("click", () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild); 
        }
        loadMenu();
    });
}
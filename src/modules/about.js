export default function loadAbout() {
    const content = document.querySelector("#content");

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");

    const title = document.createElement("h2");
    title.textContent = "About The Allfather's Table";

    const paragraph1 = document.createElement("p");
    paragraph1.textContent =
        "In the heart of the Nine Realms, where firelight dances on ancient stone and stories echo through mead-soaked halls, The Allfather's Table stands as a sanctuary for the brave and the bold.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent =
        "Founded by descendants of the Allfather's own cooks, our hall honors the sacred art of feasting. Every dish is a tribute to the gods, every drink a toast to the fallen, and every guest a living legend.";

    const paragraph3 = document.createElement("p");
    paragraph3.textContent =
        "Whether you arrive cloaked in mystery or crowned in glory, you'll find warmth, wonder, and a table set in your name.";

    const paragraph4 = document.createElement("p");
    paragraph4.textContent =
        "This is not just a restaurant. This is your saga.";

    aboutSection.appendChild(title);
    aboutSection.appendChild(paragraph1);
    aboutSection.appendChild(paragraph2);
    aboutSection.appendChild(paragraph3);
    aboutSection.appendChild(paragraph4);

    content.appendChild(aboutSection);
}
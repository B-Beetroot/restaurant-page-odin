import odinFeast from "../images/odinfeast.png";
import memoryMousse from "../images/memorymousse.png";
import bifrost from "../images/bifrost.png";
import yggdrasil from "../images/yggdrasil.png";
import gungnir from "../images/gungnir.png";
import valhalla from "../images/valhalla.png";

export default function loadMenu() {
    
    const menuContainer = document.querySelector("#content");

    const menuItems = [
        {
            name: "Odin's Feast",
            description: "Smoked elk ribs glazed with black garlic, served with runic potato wedges and crimson cabbage—presented on a stone slab with a ceremonial spear.",
            image: odinFeast
        },
        {
            name: "Huginn & Muninn's Memory Mousse",
            description: "A dual-layered dessert: dark chocolate and cloudberry mousse swirled into raven-wing patterns, topped with edible silver feathers.",
            image: memoryMousse
        },
        {
            name: "Bifröst Flame Broth",
            description: "A rainbow-colored spicy stew with fire-roasted root vegetables, smoked lamb, and shimmering broth that glows like the bridge to Asgard.",
            image: bifrost
        },
        {
            name: "Yggdrasil Ice Bark",
            description: "Frozen birch bark candy infused with mint and mead, cracked like ancient runes and served on a frosty platter shaped like the World Tree.",
            image: yggdrasil
        },
        {
            name: "Gungnir Skewer Stack",
            description: "Grilled meats and vegetables impaled on a golden skewer shaped like Odin's spear, served with a smoky ale reduction.",
            image: gungnir
        },
        {
            name: "Valhalla Ember Ale Float",
            description: "A dark ale float with burnt caramel ice cream and a flickering sugar flame—served in a horn mug with a whisper of cinnamon smoke.",
            image: valhalla
        },
    ];
    
    function createMenuItem(name, description, imageSrc) {
        const card = document.createElement("div");
        card.className = "menu-card";

        const img = document.createElement("img");
        img.className = "menu-img";
        img.src = imageSrc;
        img.alt = name;

        const textContainer = document.createElement("div");
        textContainer.className = "menu-text";

        const title = document.createElement("h3");
        title.textContent = name;

        const desc = document.createElement("p");
        desc.textContent = description;

        textContainer.append(title, desc);

        const button = document.createElement("button");
        button.textContent = "Summon Your Feast";

        card.append(img, textContainer, button);
        return card;
    }

    menuItems.forEach(item => {
        const card = createMenuItem(item.name, item.description, item.image);
        menuContainer.appendChild(card);
    });
}
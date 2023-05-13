import { characters } from "./seeds.js";



const addChar = id => {
    // TOP CONTAINER
    const topContainer = document.querySelector('.top-container')
    // 
    const charContainer = document.createElement('DIV');
    charContainer.classList.add("character-container");
    topContainer.append(charContainer);
    
    const image = document.createElement("DIV");
    image.classList.add("character-image");
    image.style.backgroundImage = `url(${characters[id].image})`;
    charContainer.append(image);
    
    // MID CONTAINER
    const midContainer = document.querySelector('.mid-container')
    //
    const name = document.createElement("h4")
    name.classList.add("character-name")
    name.textContent = characters[id].name.toUpperCase();
    midContainer.append(name)
    
    // BOTTOM CONTAINER
    const bottomContainer = document.querySelector('.bottom-container')
    // 
    for (let i = 0; i < characters[id].ability.length; i++) {
        const ability = document.createElement("P");
        ability.classList.add("character-ability");
        ability.textContent = characters[id].ability[i];
        bottomContainer.append(ability)
    }
}

addChar(1);
addChar(0);
addChar(2);
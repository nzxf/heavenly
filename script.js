import { characters } from "./seeds.js";

const callFive = number => {
    let maxNumb = characters.length - 1
    let result = []
    switch (number) {
        case 0:
            result.push(maxNumb - 1, maxNumb, number, number + 1, number + 2)
            break;
        case 1:
            result.push(maxNumb, number - 1, number, number + 1, number + 2)
            break;
        case characters.length - 2:
            result.push(number - 2, number - 1, number, number + 1, 0)
            break;
        case maxNumb:
            result.push(number - 2, number - 1, number, 0, 1)
            break;
        default:
            result.push(number - 2, number - 1, number, number + 1, number + 2)
    }
    return result
}



const addChar = id => {
    // TOP CONTAINER
    const topContainer = document.querySelector('.top-container')
    // 
    const charContainer = document.createElement('DIV');
    charContainer.classList.add("character-container");
    topContainer.append(charContainer);

    const image = document.createElement("BUTTON");
    image.classList.add("character-image");
    image.style.backgroundImage = `url(${characters[id].image})`;
    charContainer.append(image);

    // MID CONTAINER
    const midContainer = document.querySelector('.mid-container')
    let ids = callFive(id)
    //
    for (let i = 0; i < ids.length; i++) {
        if (i === Math.floor(ids.length / 2)) {
            const nameButton = document.createElement("BUTTON")
            nameButton.classList.add("character-name", "character-name-focus")
            nameButton.textContent = characters[ids[i]].name.toUpperCase()
            midContainer.append(nameButton)
        } else {
            const nameButton = document.createElement("BUTTON")
            nameButton.classList.add("character-name")
            nameButton.textContent = characters[ids[i]].name.toUpperCase()
            midContainer.append(nameButton)
        }
    }

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

addChar(0);

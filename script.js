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
    // NAMES
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
    // TIMELINE
    const timeline = characters[id].timeline
    for (let i = 0; i < timeline.length; i++) {
        const timelineContainer = document.createElement("DIV")
        timelineContainer.classList.add("timeline-container")
        bottomContainer.append(timelineContainer)

        const timelineYear = document.createElement("DIV")
        timelineYear.classList.add("timeline-year")
        timelineYear.textContent = timeline[i].year
        timelineContainer.append(timelineYear)
        
        let an = timeline[i].year - 2024
        let n = (an < 2) ? "year" : "years"
        const timelineYearAN = document.createElement("DIV")
        timelineYearAN.classList.add("timeline-year-an")
        timelineYearAN.textContent = `${an} ${n} after Planet Nibiru hits Earth`
        timelineContainer.append(timelineYearAN)

        const timelineImage = document.createElement("DIV")
        timelineImage.classList.add("timeline-image")
        timelineImage.style.backgroundImage = `url(${timeline[i].image})`; 
        timelineContainer.append(timelineImage)
        
        const timelineDescription = document.createElement("DIV")
        timelineDescription.classList.add("timeline-description")
        timelineDescription.textContent = timeline[i].description
        timelineContainer.append(timelineDescription)
    }
}

addChar(2);

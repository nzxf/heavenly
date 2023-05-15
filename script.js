import { characters } from "./seeds.js";

let errPic = "https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png";

const makeArch = (highestNum, howMany) => {
    let result = [];
    // bottom up
    for (let i = highestNum - howMany; i < highestNum; i++){
      result.push(i * 1.5)
    }
    // mid + top down
    for (let i = highestNum; i >= highestNum - howMany; i--){
      result.push(i * 1.5)
    }
    return result
  }


// Call numbers around middle number
const numAround = (arr, mid, around) => {
    let result = [];
    for (let i = mid - around; i <= mid + around; i++) {
        if (i < 0) {
            result.push(i + arr.length)
        } else if (i >= arr.length) {
            result.push(i - arr.length)
        } else {
            result.push(i)
        }
    }
    return result
}

const addChar = id => {
    // TOP CONTAINER
    const topContainer = document.querySelector('.top-container')
    
    let charAround = numAround(characters, id, 4);
    let charArch = makeArch(9,4);
    // console.log(charAround)
    // console.log(charArch)
    for (let i = 0; i < charAround.length; i++){
        // 
        const charContainer = document.createElement('DIV');
        charContainer.classList.add("character-container");
        topContainer.append(charContainer);
        // IMAGE
        const image = document.createElement("DIV");
        if (i === Math.floor(charAround.length/2)) {
            image.classList.add("character-image", "character-image-main");
        } else {
            image.classList.add("character-image");
            image.style.width = `${charArch[i]}rem`
        }
        image.style.backgroundImage = `url(${characters[charAround[i]].image})`;
        charContainer.append(image);
    }

    // MID CONTAINER
    const midContainer = document.querySelector('.mid-container')

    // NAMES
    const nameButton = document.createElement("BUTTON")
            nameButton.classList.add("character-name")
            nameButton.textContent = characters[id].name.toUpperCase()
            midContainer.append(nameButton)

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

        // YEAR
        let an = timeline[i].year - 2024
        let yearN = (an < 0) ? an * an : an
        let yearS = (an < 2) ? "year" : "years"
        let beforeAfter = (an <= 0) ? "before" : "after"
        const timelineYearAN = document.createElement("DIV")
        timelineYearAN.classList.add("timeline-year-an")
        timelineYearAN.textContent = `${yearN} ${yearS} ${beforeAfter} the Great Cataclysm`
        timelineContainer.append(timelineYearAN)

        if (timeline[i].year === 'n') {
            timelineYear.textContent = "2024, Nov 11th" // "Nov 11th 2024, 2:14am JST"
            timelineYear.style.color = 'rgba(255, 0, 0, 0.74)'
            timelineYearAN.textContent =   `The day of the Great Cataclysm`
        }
        
        // IMAGE (TIMELINE)
        const timelineImage = document.createElement("DIV")
        timelineImage.classList.add("timeline-image")
        timelineImage.style.backgroundImage = `url(${errPic})` //`url(${timeline[i].image})`; 
        timelineContainer.append(timelineImage)

        // DESCRIPTION
        const timelineDescription = document.createElement("DIV")
        timelineDescription.classList.add("timeline-description")
        timelineDescription.textContent = timeline[i].description
        timelineContainer.append(timelineDescription)
    }
}

addChar(2);

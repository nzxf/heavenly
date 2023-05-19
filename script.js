import { characters } from "./seeds.js";

let errPic = "https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png";

const makeArch = (highestNum, howMany) => {
    let result = [];
    // bottom up
    for (let i = highestNum - howMany; i < highestNum; i++) {
        result.push(i)
    }
    // mid + top down
    for (let i = highestNum; i >= highestNum - howMany; i--) {
        result.push(i)
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
    while (topContainer.hasChildNodes()) {
        topContainer.removeChild(topContainer.firstChild)
    }

    let sideChar = 4;
    let charAround = numAround(characters, id, sideChar);
    let charArch = makeArch(7, sideChar);
    for (let i = 0; i < charAround.length; i++) {
        const charContainer = document.createElement('BUTTON');
        charContainer.classList.add("character-container");
        charContainer.value = charAround[i]
        topContainer.append(charContainer);
        // IMAGE
        const image = document.createElement("DIV");
        if (i === Math.floor(charAround.length / 2)) {
            image.classList.add("character-image", "character-image-main");
        } else {
            image.classList.add("character-image", `character-image-${charArch[i]-2}`);
            image.style.width = `${charArch[i]}rem`
        }
        image.style.backgroundImage = `url(${characters[charAround[i]].image})`;
        charContainer.append(image);

        charContainer.addEventListener('click', function() {
            addChar(charAround[i])
        })
    }

    // MID CONTAINER
    const midContainer = document.querySelector('.mid-container')
    while (midContainer.hasChildNodes()) {
        midContainer.removeChild(midContainer.firstChild)   
    }

    // NAMES
    const nameButton = document.createElement("BUTTON")
    nameButton.classList.add("character-name")
    nameButton.textContent = characters[id].name.toUpperCase()
    midContainer.append(nameButton)

    // BOTTOM CONTAINER
    const bottomContainer = document.querySelector('.bottom-container')
    while (bottomContainer.hasChildNodes()) {
        bottomContainer.removeChild(bottomContainer.firstChild)   
    }

    // TIMELINE
    const timeline = characters[id].timeline

    // error hadler    
    if (timeline == undefined) {
        return console.log("no timeline yet")
    }

    for (let i = 0; i < timeline.length; i++) {

        // STARTPOINT + 1st CONNECTOR
        if (i == 0) {
            const startPoint = document.createElement("DIV")
            startPoint.classList.add("point", "start-point")
            startPoint.textContent = "PAST"
            bottomContainer.append(startPoint)

            const connector = document.createElement('DIV')
            connector.classList.add("connector")
            bottomContainer.append(connector)
        }

        const timelineContainer = document.createElement("DIV")
        timelineContainer.classList.add("timeline-container")
        bottomContainer.append(timelineContainer)

        // CONNECTOR
        const connector = document.createElement('DIV')
        connector.classList.add("connector")
        bottomContainer.append(connector)

        // YEAR
        const timelineYear = document.createElement("DIV")
        timelineYear.classList.add("timeline-year")
        timelineYear.textContent = timeline[i].year
        timelineContainer.append(timelineYear)

        let an = timeline[i].year - 2024
        let yearN = (an < 0) ? an * an : an
        let yearS = (an < 2) ? "year" : "years"
        let beforeAfter = (an <= 0) ? "before" : "after"
        const timelineYearAN = document.createElement("DIV")
        timelineYearAN.classList.add("timeline-year-an")
        timelineYearAN.textContent = `${yearN} ${yearS} ${beforeAfter} the Great Cataclysm`
        timelineContainer.append(timelineYearAN)

        if (timeline[i].year === 'n') {
            timelineYear.textContent = "2024" // "Nov 11th 2024, 2:14am JST"
            timelineYear.style.color = 'rgba(255, 0, 0, 0.74)'
            timelineYearAN.textContent = `The day of the Great Cataclysm`
        }

        // IMAGE (TIMELINE)
        const timelineImage = document.createElement("DIV")
        timelineImage.classList.add("timeline-image")
        timelineImage.style.backgroundImage = `url(${timeline[i].image})`;
        timelineContainer.append(timelineImage)

        // DESCRIPTION
        const timelineDescription = document.createElement("DIV")
        timelineDescription.classList.add("timeline-description")
        timelineDescription.textContent = timeline[i].description
        timelineContainer.append(timelineDescription)

        // EVENTLISTENER
        const toggle = (e) => {
            timelineContainer.classList.toggle("timeline-container-active")
            timelineImage.classList.toggle("timeline-image-active")
            timelineYearAN.classList.toggle("timeline-year-an-active")
            timelineDescription.classList.toggle("timeline-description-active")
            e.stopPropagation()
        }
    timelineContainer.addEventListener('click', toggle, function(e) {
        e.stopPropagation()
    } )

        // ENDPOINT
        if (i == timeline.length - 1) {
            const endPoint = document.createElement("DIV")
            endPoint.classList.add("point", "end-point")
            endPoint.textContent = "FUTURE"
            bottomContainer.append(endPoint)
        }

    }
}


addChar(2);
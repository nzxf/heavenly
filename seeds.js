// ID MAKER
let num = 0
const count = () => { num += 1; return `char${num}`; }

// CHARACTER FACTORY
const Character = (name, image, ability, timeline) => {
    // DATA
    const id = count()
    // FUNCTIONS
    const oldestEvent = () => console.log(`${timeline[0].year}: ${timeline[0].description}`);
    const latestEvent = () => console.log(`${timeline[timeline.length - 1].year}: ${timeline[timeline.length - 1].description}`);
    // OUTPUT
    return { id, name, image, ability, timeline, oldestEvent, latestEvent }
}

const maru = Character(
    "maru",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/f/f8/Maru.png",
    ["martial arts", "high durabiltiy", "hiru-sense", "maru-touch"],
    [
        {
            year: 2024,
            description: "Baby Maru is born",
            image: ""
        },
        {
            year: 2039,
            description: "After Maruki's death, Maru and his bodyguard Kiruko travel together searching for 'heaven'",
            image: ""
        }
    ]
)
const kiruko = Character(
    "kiruko",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/1/1b/Kiruko.png",
    ["marksman", "kiru-beam", "tactical fighter"],
    [
        {
            year: 2034,
            description: "kiruko wake up after brain transplant",
            image: ""
        },
        {
            year: 2035,
            description: "After months, kiruko get out of hospital",
            image: ""
        },
        {
            year: 2039,
            description: "kiruko meets maru and travels together to find heaven",
            image: ""
        },
    ]
)
const kuku = Character(
    "kuku",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/a/af/Kuku.png",
    ["vertical surface climbing"],
    [
        {
            year: 2023,
            description: "Kuku and the other children live and study at Takahara Academy.",
            image: "images/kuku/kuku-academy.png"
        },
        {
            year: 2023,
            description: "Kuku brings Tokio to see baby creature in a secret laboratory room. When they left the room, one of them call Tokio's name.",
            image: "images/kuku/kuku-tokio.png"
        },
        {
            year: 2023,
            description: "The government send their soldiers to retrieve everyone in Takahara Academy, but Kuku and some of the children succesfully hide from them.",
            image: "images/kuku/kuku-hide.png"
        },
        {
            year: 2024,
            description: "Kuku and the others stay at the remains of Takahara Academy building for a few months.",
            image: "images/kuku/kuku-stay.png"
        },
        {
            year: "n",
            description: "Nibiru asteroid or the 'Jeweled Spear of Heaven' crashed into France and uprooted the world. People refer this event as 'The Great Cataclysm'.",
            image: "images/cataclysm.png"
        },
        {
            year: 2028,
            description: "Kuku became infected with the desease while traveling with Takezuka and Ohma.",
            image: "images/kuku/kuku-infected.png"
        },
        {
            year: 2028,
            description: "Based on her requeest, Kuku's body is thrown to the ocean. Later, it transforms into fish hiruko.",
            image: "images/kuku/kuku-transform.png"
        },
        {
            year: 2039,
            description: "Fish Hiruko attacks the boat that boards Kiruko and Maru. In the end, it is killed by Maru-touch.",
            image: "images/kuku/fish-hiruko.png"
        },
        {
            year: 2039,
            description: "a small body part of the fish Hiruko that wanted to be used for transplantion started to decay.",
            image: "images/kuku/fish-hiruko-remnant.png"
        }
    ]
)
const mimihime = Character(
    "mimihime",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/7/70/Mimihime.png",
    ["superhuman hearing", "visions of the future and the past"]
)
const shiro = Character(
    "shiro",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/0/09/Shiro.png"
)
const tokio = Character(
    "tokio",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/7/73/Tokio.png"
)
const kona = Character(
    "kona",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/c/c9/Kona.png"
)
const anzu = Character(
    "anzu",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/b/b7/Anzu.png"
)
const taka = Character(
    "Taka",
    "https://static.wikia.nocookie.net/heavenly-delusion/images/1/1b/Taka.png"
)


// const characters = [
//     {
//         id: "c1",
//         name: "maru",
//         ability: ["martial arts", "high durabiltiy", "hiru-sense", "maru-touch"],
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/f/f8/Maru.png",
//         timeline: [
//             {
//                 year: 2024,
//                 description: "baby maru born",
//                 image: ""
//             },
//             {
//                 year: 2039,
//                 description: "maru accompanied by kiruko travels to find heaven",
//                 image: ""
//             }
//         ]
//     },
//     {
//         id: "c2",
//         name: "kiruko",
//         ability: ["marksman", "kiru-beam", "tactical fighter"],
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/1/1b/Kiruko.png",
//         timeline: [
//             {
//                 year: 2034,
//                 description: "kiruko wake up after brain transplant",
//                 image: ""
//             },
//             {
//                 year: 2035,
//                 description: "After months, kiruko get out of hospital",
//                 image: ""
//             },
//             {
//                 year: 2039,
//                 description: "kiruko meets maru and travels together to find heaven",
//                 image: ""
//             },
//         ]
//     },
//     {
//         id: "c3",
//         name: "kuku",
//         ability: ["vertical surface climbing"],
//         gender: "intersex",
//         species: "Genetically modified human",
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/a/af/Kuku.png",
//         timeline: [
//             {
//                 year: 2023,
//                 description: "Kuku and the other children live and study at Takahara Academy.",
//                 image: "images/kuku/kuku-academy.png"
//             },
//             {
//                 year: 2023,
//                 description: "Kuku brings Tokio to see baby creature in a secret laboratory room. When they left the room, one of them call Tokio's name.",
//                 image: "images/kuku/kuku-tokio.png"
//             },
//             {
//                 year: 2023,
//                 description: "The government send their soldiers to retrieve everyone in Takahara Academy, but Kuku and some of the children succesfully hide from them.",
//                 image: "images/kuku/kuku-hide.png"
//             },
//             {
//                 year: 2024,
//                 description: "Kuku and the others stay at the remains of Takahara Academy building for a few months.",
//                 image: "images/kuku/kuku-stay.png"
//             },
//             {
//                 year: "n",
//                 description: "Nibiru asteroid or the 'Jeweled Spear of Heaven' crashed into France and uprooted the world. People refer this event as 'The Great Cataclysm'.",
//                 image: "images/cataclysm.png"
//             },
//             {
//                 year: 2028,
//                 description: "Kuku became infected with the desease while traveling with Takezuka and Ohma.",
//                 image: "images/kuku/kuku-infected.png"
//             },
//             {
//                 year: 2028,
//                 description: "Based on her requeest, Kuku's body is thrown to the ocean. Later, it transforms into fish hiruko.",
//                 image: "images/kuku/kuku-transform.png"
//             },
//             {
//                 year: 2039,
//                 description: "Fish Hiruko attacks the boat that boards Kiruko and Maru. In the end, it is killed by Maru-touch.",
//                 image: "images/kuku/fish-hiruko.png"
//             },
//             {
//                 year: 2039,
//                 description: "a small body part of the fish Hiruko that wanted to be used for transplantion started to decay.",
//                 image: "images/kuku/fish-hiruko-remnant.png"
//             }
//         ]
//     },
//     {
//         id: "c4",
//         name: "mimihime",
//         ability: ["superhuman hearing", "visions of the future and the past"],
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/7/70/Mimihime.png"
//     },
//     {
//         id: "c5",
//         name: "shiro",
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/0/09/Shiro.png"
//     },
//     {
//         id: "c6",
//         name: "tokio",
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/7/73/Tokio.png"
//     },
//     {
//         id: "c7",
//         name: "kona",
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/c/c9/Kona.png"
//     },
//     {
//         id: "c8",
//         name: "anzu",
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/b/b7/Anzu.png"
//     },
//     {
//         id: "c9",
//         name: "Taka",
//         image: "https://static.wikia.nocookie.net/heavenly-delusion/images/1/1b/Taka.png"
//     },
// ]

// DATA INFO
let characters = [];
characters.push(maru, kiruko, kuku, mimihime, shiro, tokio, kona, anzu, taka);

export { characters }
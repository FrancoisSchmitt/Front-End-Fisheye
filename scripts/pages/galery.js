const getMedia = async () => {
    await fetch("./data/photographers.json")
        .then((res) => res.json())
        .then((data) => (media = data.media));
    return {
        media: [...media],
    };
};

const paramsGalery = new URLSearchParams(window.location.search);
const idGalery = paramsGalery.get("id");

async function displayDataMedia(mediaPhotographers) {
    const mediaHeader = document.querySelector(".photograph-media");

    mediaPhotographers.forEach((media) => {
        if (media.photographerId == id) {
            const photographerModel = galeryFactory(media);
            const userGaleryCardDOM = photographerModel.getUserGaleryDOM();
            mediaHeader.appendChild(userGaleryCardDOM);
        }
    });
};


async function init() {
    // Récupère les datas des media
    const { media } = await getMedia();
    displayDataMedia(media);
};

init();

//Mettre le code JavaScript lié à la page photographer.html
// const getMedia = async () => {
//     await fetch("./data/photographers.json")
//         .then((res) => res.json())
//         .then((data) => (media = data.media));
//     return {
//         media: [...media],
//     };
// };

// const paramsMedia = new URLSearchParams(window.location.search);
// const idMedia = paramsMedia.get("id");

// async function displayDataMedia(media) {
//     const mediaHeader = document.querySelector(".");

//     media.forEach((media) => {

//         if (media.photographerId == idMedia) {
//             const mediaModel = galeryFactory(media);
//             const userBannerCardDOM = mediaModel.getUserGaleryDOM();
//             mediaHeader.appendChild(userBannerCardDOM);
//         }
//     });
// };

// async function init() {
//     // Récupère les datas des photographes
//     const { media } = await getMedia();
//     displayDataMedia(media);
// };

// init();


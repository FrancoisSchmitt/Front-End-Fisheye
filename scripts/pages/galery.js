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

async function displayData(mediaPhotographers) {
    const mediaHeader = document.querySelector(".media-header");

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
    displayData(media);
};

init();

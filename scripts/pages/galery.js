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
    const countLike = document.querySelector(".likeCount-media");
    const galeryCarousels = document.querySelector(".carousel-content");

    mediaPhotographers.forEach((media) => {
        if (media.photographerId == idGalery) {
            const photographerModel = galeryFactory(media);

            const userGaleryCardDOM = photographerModel.getUserGaleryDOM();
            mediaHeader.appendChild(userGaleryCardDOM);

            const likeCounterDOM = photographerModel.getLikeCounterDOM();
            countLike.appendChild(likeCounterDOM);

            const galeryUserCarousel = photographerModel.getGaleryUserCarouselDOM();
            galeryCarousels.appendChild(galeryUserCarousel);
        }
    });
};


async function init() {
    // Récupère les datas des media
    const { media } = await getMedia();
    displayDataMedia(media);
};

init();
//-----------FETCH DATA pour récupérer les infos média du fichier JSON
const getMedias = async () => {
    await fetch("./data/photographers.json")
        .then((res) => res.json())
        .then((data) => (medias = data.media));

    return {
        medias: [...medias],
    };
};

function getPhotographerId() {
    return parseInt(new URLSearchParams(window.location.search).get("id"));
}

function displayDataMedia() {
    const filterMediaPhotographer = medias.filter(
        (media) => media.photographerId === parseInt(getPhotographerId())
    );


    var optionsSort = document.getElementById('mySelect').value;

    function sortSelect() {

        if (optionsSort === "populariter") {
            console.log("like")
            return sortByLikes;
        }
        if (optionsSort === "date") {
            console.log("date")
            return sortByDate;
        }
        if (optionsSort === "titre") {
            console.log("title")
            return sortByTitle;
        }
    }
    filterMediaPhotographer.sort(sortSelect());
    const photographerMedia = document.querySelector(".photograph-media");
    const lightboxMedia = document.querySelector(".lightbox-media");

    photographerMedia.innerHTML = "";
    lightboxMedia.innerHTML = "";
    filterMediaPhotographer.forEach((media) => {
        if (filterMediaPhotographer.indexOf()) {
            const mediaFactory = galeryFactory(media);
            // const photographerModel = galeryFactory(media);
            const userGaleryCardDOM = mediaFactory.getUserGaleryDOM();
            photographerMedia.appendChild(userGaleryCardDOM);
        }
    });
}

async function initMedia() {
    // Récupère les medias des photographes
    const { medias } = await getMedias();
    displayDataMedia(medias);

}
initMedia();

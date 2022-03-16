//Mettre le code JavaScript lié à la page photographer.html
const getPhotographers = async () => {
    await fetch("./data/photographers.json")
        .then((res) => res.json())
        .then((data) => (photographers = data.photographers));
    return {
        photographers: [...photographers],
    };
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function displayData(photographers) {
    const photographersHeader = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {

        if (photographer.id == id) {
            const photographerModel = photographerFactory(photographer);
            const userBannerCardDOM = photographerModel.getUserBannerCardDOM();
            photographersHeader.appendChild(userBannerCardDOM);
        }
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();


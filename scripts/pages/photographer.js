/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
//Mettre le code JavaScript lié à la page photographer.html
const getPhotographers = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return {
    photographers: [...photographers],
  };
};



async function displayData(photographers) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const photographersHeader = document.querySelector(".photograph-header");
  const nameContact = document.querySelector(".nameContact")
  const priceUser = document.querySelector(".likeCount-media")

  photographers.forEach((photographer) => {

    if (photographer.id == id) {

      const bannerPhotograph = photographerFactory(photographer);

      const userBannerCardDOM = bannerPhotograph.getUserBannerCardDOM();
      photographersHeader.appendChild(userBannerCardDOM);

      const nameContactDOM = bannerPhotograph.getNameContactDOM();
      nameContact.appendChild(nameContactDOM);

      const priceUserDOM = bannerPhotograph.getPriceUserDOM();
      priceUser.appendChild(priceUserDOM);
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();


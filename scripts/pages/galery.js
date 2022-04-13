//-----------FETCH DATA pour récupérer les infos média du fichier JSON
const getMedias = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    // eslint-disable-next-line no-undef
    .then((data) => (medias = data.media));

  return {
    // eslint-disable-next-line no-undef
    medias: [...medias],
  };
};

function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get("id"));
}

function displayDataMedia() {
  // eslint-disable-next-line no-undef
  const filterMediaPhotographer = medias.filter(
    (media) => media.photographerId === parseInt(getPhotographerId())
  );


  var optionsSort = document.getElementById('mySelect').value;

  function sortSelect() {

    if (optionsSort === "populariter") {
      console.log("like")
      // eslint-disable-next-line no-undef
      return sortByLikes;
    }
    if (optionsSort === "date") {
      console.log("date")
      // eslint-disable-next-line no-undef
      return sortByDate;
    }
    if (optionsSort === "titre") {
      console.log("title")
      // eslint-disable-next-line no-undef
      return sortByTitle;
    }
  }
  filterMediaPhotographer.sort(sortSelect());
  const photographerMedia = document.querySelector(".photograph-media");
  const lightbox = document.querySelector(".lightbox-media");



  photographerMedia.innerHTML = "";
  lightbox.innerHTML = "";
  filterMediaPhotographer.forEach((media) => {
    if (filterMediaPhotographer.indexOf()) {
      // eslint-disable-next-line no-undef
      const mediaFactory = galeryFactory(media);
      const userGaleryCardDOM = mediaFactory.getUserGaleryDOM();
      photographerMedia.appendChild(userGaleryCardDOM);

    }
  });
  // eslint-disable-next-line no-undef
  Lightbox.init();
}
// .lightbox__container
async function initMedia() {
  // Récupère les medias des photographes
  const { medias } = await getMedias();
  displayDataMedia(medias);

}
initMedia();

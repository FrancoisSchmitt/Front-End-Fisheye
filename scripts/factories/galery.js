/* eslint-disable no-unused-vars */
function galeryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  const galeryId = `assets/images/${photographerId}/${image}`;
  const galeryvideoId = `assets/images/${photographerId}/${video}`;

  function getUserGaleryDOM() {
    const galeryUser = document.createElement("article");
    const userImage = document.createElement('div');

    const heart = document.createElement("input");
    heart.setAttribute("type", "checkbox");
    heart.setAttribute("id", id);
    heart.classList.add("fa-solid", "fa-heart");
    heart.classList.add("heart");
    heart.setAttribute("aria-label", "likes")

    const likesParagraph = document.createElement('h5');
    likesParagraph.setAttribute("for", id);
    likesParagraph.classList.add("Likes");
    likesParagraph.textContent = likes;

    const titleParagraph = document.createElement('h4');
    titleParagraph.classList.add("title");
    titleParagraph.textContent = title;

    const img = document.createElement('img');
    const videoGalery = document.createElement("video");
    if (image) {
      img.classList.add("imageLightbox")
      img.setAttribute("alt", "img");
      img.setAttribute("src", galeryId);
      img.setAttribute("alt", title + " closeup view")
      img.setAttribute("tabindex", "0");
      galeryUser.appendChild(img);

    }
    else {
      videoGalery.setAttribute("type", "video/mp4");
      videoGalery.setAttribute("src", galeryvideoId);
      videoGalery.setAttribute("tabindex", "0");
      videoGalery.setAttribute("alt", title + " closeup view")
      galeryUser.appendChild(videoGalery);
    }
    galeryUser.appendChild(userImage);
    userImage.appendChild(titleParagraph);
    userImage.appendChild(likesParagraph);
    userImage.appendChild(heart);
    return (galeryUser);
  }




  return { id, photographerId, title, image, video, likes, date, price, getUserGaleryDOM }
}


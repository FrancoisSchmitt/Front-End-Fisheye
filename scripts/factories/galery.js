
function galeryFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const galeryId = `assets/images/${photographerId}/${image}`;
    const galeryvideoId = `assets/images/${photographerId}/${video}`;

    function getUserGaleryDOM() {
        const galeryUser = document.createElement("article");
        const userImage = document.createElement('div');
        const img = document.createElement('img');
        const titleParagraph = document.createElement('p');
        const likesParagraph = document.createElement('p');
        const videoGalery = document.createElement("video");
        const heart = document.createElement("i");
        heart.classList.add("fa-solid", "fa-heart");
        heart.classList.add("heart");
        likesParagraph.classList.add("Likes");
        titleParagraph.classList.add("title");

        likesParagraph.textContent = likes;
        titleParagraph.textContent = title;
        heart.setAttribute('onclick', 'addLikes()')
        likesParagraph.textContent = likes;
        titleParagraph.textContent = title;
        if (image) {
            img.setAttribute("alt", "img");
            img.setAttribute("src", galeryId);
            img.classList.add("imageLightbox")
            galeryUser.appendChild(img);
        }
        else {
            videoGalery.setAttribute("type", "video/mp4");
            videoGalery.setAttribute("src", galeryvideoId);
            videoGalery.setAttribute("controls", null);
            videoGalery.classList.add("imageLightbox")
            galeryUser.appendChild(videoGalery);
        }
        galeryUser.appendChild(userImage);
        userImage.appendChild(titleParagraph);
        userImage.appendChild(likesParagraph);
        likesParagraph.appendChild(heart);
        return (galeryUser);
    }



    return { id, photographerId, title, image, video, likes, date, price, getUserGaleryDOM }
}


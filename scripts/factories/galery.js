
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
        likesParagraph.textContent = likes;
        titleParagraph.textContent = title;

        if (image) {
            img.setAttribute("alt", "img");
            img.setAttribute("src", galeryId);
            img.classList.add("lol");
            galeryUser.appendChild(img);
        }
        else {
            videoGalery.setAttribute("type", "video/mp4");
            videoGalery.setAttribute("src", galeryvideoId);
            videoGalery.classList.add("wut");
            videoGalery.setAttribute("controls", null);
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


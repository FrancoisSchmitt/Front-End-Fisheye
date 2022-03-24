
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
            img.setAttribute("onclick", "OpenCarousel()");
            galeryUser.appendChild(img);
        }
        else {
            videoGalery.setAttribute("type", "video/mp4");
            videoGalery.setAttribute("src", galeryvideoId);
            videoGalery.classList.add("wut");
            // videoGalery.setAttribute("controls", null);
            galeryUser.appendChild(videoGalery);
        }
        galeryUser.appendChild(userImage);
        userImage.appendChild(titleParagraph);
        userImage.appendChild(likesParagraph);
        likesParagraph.appendChild(heart);
        return (galeryUser);
    }

    function getLikeCounterDOM() {

        const likesInfo = document.createElement("div");
        const textLikeInfo = document.createElement('p');

        var total;
        for (let i = 0; i < likes; ++i) {
            total += likes[i];
            console.log(" le nombre total de likes est de" + " " + total);
            // console.log(total);
            textLikeInfo.textContent = total;
            likesInfo.appendChild(textLikeInfo);
        }
        return (likesInfo);
    }


    function getGaleryUserCarouselDOM() {
        const divContent = document.createElement("div");
        divContent.classList.add("carousel-content-card");
        const divImage = document.createElement("div");
        divImage.classList.add("carousel-content-image");
        const divTitle = document.createElement("div");
        divTitle.classList.add("carousel-content-title");
        const img = document.createElement('img');
        const videoGalery = document.createElement("video");
        divContent.appendChild(divImage);
        if (image) {
            img.setAttribute("alt", "img");
            img.setAttribute("src", galeryId);

            divImage.appendChild(img);
        }
        else {
            videoGalery.setAttribute("type", "video/mp4");
            videoGalery.setAttribute("src", galeryvideoId);

            videoGalery.setAttribute("controls", null);
            divImage.appendChild(videoGalery);
        }
        divContent.appendChild(divTitle);
        return (divContent);

    }

    return { id, photographerId, title, image, video, likes, date, price, getUserGaleryDOM, getLikeCounterDOM, getGaleryUserCarouselDOM }
}


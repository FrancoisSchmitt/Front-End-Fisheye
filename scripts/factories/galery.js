function galeryFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;


    const galeryId = `assets/images/${photographerId}/${image}`;
    const galeryvideoId = `assets/images/${photographerId}/${video}`;


    function getUserGaleryDOM() {
        const galeryUser = document.createElement("section");
        const img = document.createElement('img');
        const a = document.createElement('a');
        const p = document.createElement('p');
        const atchoum = document.createElement('a');

        p.textContent = title;
        img.setAttribute("alt", "img");
        img.setAttribute("src", galeryId);
        img.classList.add("lol");
        a.appendChild(p);
        galeryUser.appendChild(a);
        a.appendChild(img);

        const videoGalery = document.createElement("video");
        videoGalery.setAttribute("type", "video/mp4");
        videoGalery.setAttribute("src", galeryvideoId);
        videoGalery.classList.add("wut");
        videoGalery.setAttribute("controls", null);
        atchoum.appendChild(videoGalery);

        return (galeryUser);
    }
    return { id, photographerId, title, image, video, likes, date, price, getUserGaleryDOM }
}
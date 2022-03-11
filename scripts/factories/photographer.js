function photographerFactory(data) {
    const { id, name, portrait, city, tagline, price, country } = data;

    const picture = `assets/images/photographers/${portrait}`;
    const url = `photographer.html?=${id}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        let a = document.createElement('a');
        article.appendChild(a);
        a.title = "my title text";
        a.href = url;


        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const paragrapheTagLine = document.createElement('p');
        const paragrapheCountry = document.createElement('p');
        const paragraphePrice = document.createElement('p');
        paragrapheCountry.textContent = city + ", " + country;
        paragrapheTagLine.textContent = tagline;
        paragraphePrice.textContent = price + "€/jour";

        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(paragrapheCountry);
        article.appendChild(paragrapheTagLine);
        article.appendChild(paragraphePrice);
        return (article);
    }
    return { id, name, picture, tagline, city, price, country, getUserCardDOM }
}
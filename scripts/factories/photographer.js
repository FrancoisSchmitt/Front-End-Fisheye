function photographerFactory(data) {
    const { id, name, portrait, city, tagline, price, country } = data;

    const picture = `assets/images/photographers/${portrait}`;

    function getUserCardDOM() {
        const url = `photographer.html?id=${id}`;
        const article = document.createElement('article');
        const a = document.createElement('a');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const paragrapheTagLine = document.createElement('p');
        const paragrapheCountry = document.createElement('p');
        const paragraphePrice = document.createElement('p');
        a.href = url;
        h2.textContent = name;
        paragrapheCountry.textContent = city + ", " + country;
        paragrapheTagLine.textContent = tagline;
        paragraphePrice.textContent = price + "€/jour";
        article.appendChild(a);
        img.setAttribute("src", picture)
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(paragrapheCountry);
        article.appendChild(paragrapheTagLine);
        article.appendChild(paragraphePrice);
        return (article);
    }

    function getNameContactDOM() {
        const paragrapheName = document.createElement("h2");
        paragrapheName.textContent = "Contactez-moi " + name;
        return (paragrapheName);
    }

    function getPriceUserDOM() {
        const paragrapheName = document.createElement("p");
        paragrapheName.textContent = price + "€/jour";
        return (paragrapheName);
    }

    function getUserBannerCardDOM() {
        const articlePage = document.createElement("section");
        const userCard = document.createElement('div');
        const btnContact = document.createElement("button");
        const h1 = document.createElement('h1');
        const img = document.createElement('img');
        const paragrapheTagLine = document.createElement('p');
        const paragrapheCountry = document.createElement('p');

        img.setAttribute("src", picture)
        h1.textContent = name;
        paragrapheCountry.textContent = city + ", " + country;
        paragrapheTagLine.textContent = tagline;
        articlePage.appendChild(userCard);
        btnContact.classList.add("contact_me");
        btnContact.setAttribute("onclick", "openModal()");
        btnContact.textContent = "Contactez-moi";

        userCard.appendChild(h1);
        userCard.appendChild(paragrapheCountry);
        userCard.appendChild(paragrapheTagLine);

        articlePage.appendChild(btnContact);
        articlePage.appendChild(img);
        return (articlePage);

    }
    return { id, name, picture, tagline, city, price, country, getUserCardDOM, getUserBannerCardDOM, getNameContactDOM, getPriceUserDOM }
}
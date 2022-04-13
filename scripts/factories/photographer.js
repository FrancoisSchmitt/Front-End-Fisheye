// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const { id, name, portrait, city, tagline, price, country } = data;

  const picture = `assets/images/photographers/${portrait}`;

  function getUserCardDOM() {
    const url = `photographer.html?id=${id}`;
    const article = document.createElement('article');
    const h2 = document.createElement('h2');

    const a = document.createElement('a');
    a.href = url;

    h2.textContent = name;

    const paragrapheCountry = document.createElement('p');
    paragrapheCountry.textContent = city + ", " + country;

    const paragrapheTagLine = document.createElement('p');
    paragrapheTagLine.textContent = tagline;

    const paragraphePrice = document.createElement('p');
    paragraphePrice.textContent = price + "€/jour";

    const img = document.createElement('img');
    img.setAttribute("src", picture)
    img.setAttribute("alt", name)

    article.appendChild(a)
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
    const h1 = document.createElement('h1');
    h1.textContent = name;

    const paragrapheCountry = document.createElement('h2');
    paragrapheCountry.textContent = city + ", " + country;

    const paragrapheTagLine = document.createElement('h3');
    paragrapheTagLine.textContent = tagline;

    const btnContact = document.createElement("button");
    btnContact.classList.add("contact_me");
    btnContact.setAttribute("onclick", "openModal()");
    btnContact.setAttribute("aria-label", "Contact Me")
    btnContact.textContent = "Contactez-moi";

    const img = document.createElement('img');
    img.setAttribute("src", picture)
    img.setAttribute("alt", name)

    articlePage.appendChild(userCard);
    userCard.appendChild(h1);
    userCard.appendChild(paragrapheCountry);
    userCard.appendChild(paragrapheTagLine);
    articlePage.appendChild(btnContact);
    articlePage.appendChild(img);
    return (articlePage);
  }
  return { id, name, picture, tagline, city, price, country, getUserCardDOM, getUserBannerCardDOM, getNameContactDOM, getPriceUserDOM }
}
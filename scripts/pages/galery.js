//-----------FETCH DATA pour récupérer les infos média du fichier JSON
const getMedias = async () => {
    await fetch("./data/photographers.json")
        .then((res) => res.json())
        .then((data) => (medias = data.media));

    return {
        medias: [...medias],
    };
};

function getPhotographerId() {
    return parseInt(new URLSearchParams(window.location.search).get("id"));
}

function displayDataMedia() {
    const mediasFilter = medias.filter(
        (media) => media.photographerId === parseInt(getPhotographerId())
    );



    const optionsSort = document.getElementById('lstALL');

    function sortSelect(optionSort) {
        var tmpAry = new Array();
        for (var i = 0; i < optionSort.options.length; i++) {
            // console.log(optionSort.options.length)
            tmpAry[i] = new Array();
            tmpAry[i][0] = optionSort.options[i].text;
            tmpAry[i][1] = optionSort.options[i].value;
            console.log(tmpAry[i][0])

            if (optionSort.option = 0) {
                console.log(optionSort.option)
                return sortByLikes;
            }
            else if (optionSort.option = 1) {
                // console.log(optionSort.selectedIndex = "Date")
                return sortByDate;
            } else {
                return sortByTitle;
            }
        }
    }


    // console.log(mediasFilter);
    mediasFilter.sort(sortSelect(optionsSort));
    const mediaHeader = document.querySelector(".photograph-media");

    mediaHeader.innerHTML = "";
    // console.log(mediasFilter);
    mediasFilter.forEach((media) => {
        //console.log(mediasFilter);

        if (mediasFilter.indexOf()) {
            const mediaFactory = galeryFactory(media);
            // const photographerModel = galeryFactory(media);
            const userGaleryCardDOM = mediaFactory.getUserGaleryDOM();
            mediaHeader.appendChild(userGaleryCardDOM);
        }
    });
}

async function initGalery() {
    // Récupère les medias des photographes
    const { medias } = await getMedias();
    displayDataMedia(medias);
}
initGalery();


/**
 * Code a up, leger probleme de addLikes()
 */


// function likeCounter() {
//     const displayLikeCounter = document.querySelector(".like");
//     const nbrLikes = document.querySelectorAll(".Likes");

//     let likeData = 0;
//     let totalLike = 0;
//     let arrayLikes = [];

//     nbrLikes.forEach((likes) => {
//         likeData = parseInt(likes.textContent);
//         arrayLikes.push(likeData);
//         totalLike = arrayLikes.reduce((a, b) => a + b, 0);
//         // console.log(totalLike)
//     });
//     // console.log(arrayLikes);
//     displayLikeCounter.textContent = totalLike;
// }


// function addLikes() {
//     const button = document.querySelector(".heart");
//     const cntLikes = document.querySelector(".Likes");

//     let clicked = false;

//     button.addEventListener("click", () => {
//         if (!clicked === true) {
//             clicked = true;
//             cntLikes.textContent++;
//         } else {
//             clicked = false;
//             cntLikes.textContent--;
//         }
//         console.log(clicked)
//         likeCounter();
//     });
// }

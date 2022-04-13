const Likes = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    // eslint-disable-next-line no-undef
    .then((data) => (medias = data.media));

  return {
    // eslint-disable-next-line no-undef
    medias: [...medias],
  };
};


function likeCounter() {
  const displayLikeCounter = document.querySelector(".like");
  const nbrLikes = document.querySelectorAll(".Likes");
  let likeData = 0;
  let totalLike = 0;
  let arrayLikes = [];
  nbrLikes.forEach((likes) => {
    likeData = parseInt(likes.textContent);
    arrayLikes.push(likeData);
    totalLike = arrayLikes.reduce((a, b) => a + b, 0);
  });
  displayLikeCounter.textContent = totalLike;
}

function incrementLikes() {
  const likesInput = document.querySelectorAll(".heart");
  likesInput.forEach((likeInput) => {
    likeInput.addEventListener("input", (e) => {
      let likeText = e.target.previousSibling.textContent;
      let liked = e.target.previousSibling;
      let maker = e.currentTarget;
      if (!maker.checked) {
        likeText--;
      } else {
        likeText++;
      }
      liked.textContent = likeText;
      likeCounter();
    })
  })
}

async function initLikes() {
  // eslint-disable-next-line no-unused-vars
  const { medias } = await Likes();
  incrementLikes();
  likeCounter();

}
initLikes();


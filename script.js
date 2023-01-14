const memeDisplay = document.querySelector(".meme-display");
const nextBtn = document.querySelector(".next-btn");
const shareBtn = document.querySelector(".share-btn");
const output = document.querySelector(".output");

function getMemeImage() {
  fetch("https://api.imgflip.com/get_memes")
    .then((data) => data.json())
    .then((data_val) => {
      const memes = data_val.data.memes;

      const randonNum = Math.floor(Math.random() * memes.length - 1);
      const url = memes[randonNum].url;
      memeDisplay.src = url;
    });
}

function errorHandler() {
  output.innerText = `There is some error!`;
}

nextBtn.addEventListener("click", getMemeImage);

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: "Meme Generator",
        text: "meme generator",
        url: "url",
      })
      .then(() => console.log(`Successfully shared!`))
      .catch(errorHandler);
  }
}

shareBtn.addEventListener("click", share);

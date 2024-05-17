let iphoneSection = document.getElementById("iphonesection");

mainColor = iphoneSection.style.backgroundColor;
iphoneSection.addEventListener("click", () => {
  let currentColor = iphoneSection.style.backgroundColor;

  if (mainColor == currentColor) {
    iphoneSection.style.backgroundColor = "rgb(190, 190, 214)";
  } else {
    iphoneSection.style.backgroundColor = mainColor;
  }
});

//change mode
const changeMode = document.getElementById("mode");
const mode = document.getElementById("moon");

const lightModeHeader = document.getElementById("h1");
const lightModePara = document.getElementById("paragraph");
const lightMode = "rgb(255, 255, 255)";
const darkMode = "rgb(0, 0, 0)";

mode.addEventListener("mouseover", () => {
  let currentMode = window.getComputedStyle(changeMode).backgroundColor;
  if (currentMode === lightMode) {
    changeMode.style.backgroundColor = darkMode;
    lightModeHeader.style.color = "rgb(255, 255, 255)";
    lightModePara.style.color = "rgb(255, 255, 255)";
  } else {
    changeMode.style.backgroundColor = lightMode;
    lightModeHeader.style.color = "rgb(0, 0, 0)";
    lightModePara.style.color = "rgb(0, 0, 0)";
  }
});

//accordion

const button = document.getElementsByClassName("label");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
      this.classList.remove("active");
    } else {
      content.style.display = "block";
      this.classList.add("active");
    }
  });
}

//Rating

const stars = document.querySelectorAll(".star");
const textRating = document.getElementById("rating-text");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    rating = star.dataset.value;
    lightStars(rating);
    textRating.textContent = `You rated this ${rating} out of 5 stars.`;
  });
  star.addEventListener("mouseover", () => {
    lightStars(star.dataset.value);
  });

  star.addEventListener("mouseout", () => {
    lightStars(rating);
  });
});

function lightStars(rating) {
  stars.forEach((star) => {
    star.classList.remove("hover");
    if (star.dataset.value <= rating) {
      star.classList.add("hover");
    }
  });
}

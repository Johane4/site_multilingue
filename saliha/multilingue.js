// document.addEventListener("DOMContentLoaded", () => {
function setLanguage(language) {
  fetch("./translation.json")
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((data) => {
      console.log(data[language]);

      let title = document.getElementById("title");
      let subtitle = document.getElementById("subtitle");
      let ctaButton = document.getElementById("cta-button");
      let featuresTitle = document.getElementById("features-title");
      let feature1Title = document.getElementById("feature1-title");
      let feature2Title = document.getElementById("feature2-title");
      let feature2Desc = document.getElementById("feature2-desc");
      let feature3Title = document.getElementById("feature3-title");
      let feature3Desc = document.getElementById("feature3-desc");
      let aboutTitle = document.getElementById("about-title");
      let aboutDesc = document.getElementById("about-desc");
      let footerText = document.getElementById("footer-text");

      title.innerHTML = data[language].title;
      subtitle.innerHTML = data[language].subtitle;
      ctaButton.innerHTML = data[language].ctaButton;
      featuresTitle.innerHTML = data[language].featuresTitle;
      feature1Title.innerHTML = data[language].feature1Title;
      feature2Title.innerHTML = data[language].feature2Title;
      feature2Desc.innerHTML = data[language].feature2Desc;
      feature3Title.innerHTML = data[language].feature3Title;
      feature3Desc.innerHTML = data[language].feature3Desc;
      aboutTitle.innerHTML = data[language].aboutTitle;
      aboutDesc.innerHTML = data[language].aboutDesc;
      footerText.innerHTML = data[language].footerText;

      localStorage.setItem("language", language);
      // localStorage.setItem("en", JSON.stringify(data.en));
    });
}

const boutons = document.querySelectorAll("button");
// console.log(boutons[0], boutons[1]);

//   boutons[0].addEventListener("click", setLanguage("fr"));

//   boutons[1].addEventListener("click", setLanguage("en"));
boutons[0].addEventListener("click", () => {
  setLanguage("fr");
});

boutons[1].addEventListener("click", () => {
  setLanguage("en");
});
setLanguage(localStorage.getItem("language"));
// });

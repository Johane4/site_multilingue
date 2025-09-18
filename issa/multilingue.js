async function traduction(lang) {
   fetch("translations.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(translations){
            const texts = translations[lang]

            document.getElementById("title").innerHTML = texts.title;
            document.getElementById("subtitle").innerHTML = texts.subtitle;
            document.getElementById("ctaButton").innerHTML = texts.ctaButton;
            document.getElementById("featuresTitle").innerHTML = texts.featuresTitle;
            document.getElementById("tfeature1Title").innerHTML = texts.feature1Title;
            document.getElementById("feature2Title").innerHTML = texts.feature2Title;
            document.getElementById("feature2Desc").innerHTML = texts.feature2Desc;
            document.getElementById("feature3Title").innerHTML = texts.feature3Title;
            document.getElementById("feature3Desc").innerHTML = texts.feature3Desc;
            document.getElementById("aboutTitle").innerHTML = texts.aboutTitle;
            document.getElementById("aboutDesc").innerHTML = texts.aboutDesc;
        })
}



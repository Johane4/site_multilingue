const FRbutt = document.querySelector("button:nth-of-type(1)");
const ENbutt = document.querySelector("button:nth-of-type(2)");
const langHTML = document.querySelector("html");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const ctaButton = document.getElementById("cta-button");
const featuresTitle = document.getElementById("features-title");
const feature1Title = document.getElementById("feature1-title");
const feature1Desc = document.getElementById("feature1-desc");
const feature2Title = document.getElementById("feature2-title");
const feature2Desc = document.getElementById("feature2-desc");
const feature3Title = document.getElementById("feature3-title");
const aboutTitle = document.getElementById("about-title");
const aboutDesc = document.getElementById("about-desc");
const footerText = document.getElementById("footer-text");
console.log(title);
console.log(subtitle);
console.log(ctaButton);
console.log(featuresTitle);
console.log(feature1Title);
console.log(feature1Desc);
console.log(feature2Title);
console.log(feature2Desc);
console.log(feature3Title);
console.log(aboutTitle);
console.log(aboutDesc);
console.log(footerText);

const languesJSON = "/langues.json"
fetch(languesJSON)
    .then ((response) => {
        console.log(response);
        let parsed = response.json()
        return parsed
    }).then ((data) => {
        console.log(data);
        
        FRbutt.addEventListener("click", () => {
        // alert("FR");
        let langfr = {
            lang : "fr"
        };

        console.log(langfr);
        let stringyfr = JSON.stringify(langfr);
        console.log(stringyfr);
        localStorage.setItem("lang", stringyfr);

        title.innerText = data[0].title;
        subtitle.innerText = data[0].subtitle;
        ctaButton.innerText = data[0].ctaButton;
        featuresTitle.innerText = data[0].featuresTitle;
        feature1Title.innerText = data[0].feature1Title;
        feature1Desc.innerText = data[0].feature1Desc;
        feature2Title.innerText = data[0].feature2Title;
        feature2Desc.innerText = data[0].feature2Desc;
        feature3Title.innerText = data[0].feature3Title;
        aboutTitle.innerText = data[0].aboutTitle;
        aboutDesc.innerText = data[0].aboutDesc;
        footerText.innerText = data[0].footerText;
    });

    ENbutt.addEventListener("click", () => {
        // alert("EN");
        let langen = {
            lang : "en"
        };
        console.log(langen);
        let stringyen = JSON.stringify(langen);
        console.log(stringyen);
        localStorage.setItem("lang", stringyen);

        title.innerText = data[1].title;
        subtitle.innerText = data[1].subtitle;
        ctaButton.innerText = data[1].ctaButton;
        featuresTitle.innerText = data[1].featuresTitle;
        feature1Title.innerText = data[1].feature1Title;
        feature1Desc.innerText = data[1].feature1Desc;
        feature2Title.innerText = data[1].feature2Title;
        feature2Desc.innerText = data[1].feature2Desc;
        feature3Title.innerText = data[1].feature3Title;
        aboutTitle.innerText = data[1].aboutTitle;
        aboutDesc.innerText = data[1].aboutDesc;
        footerText.innerText = data[1].footerText;
    });

    let langue = JSON.parse(localStorage.getItem("lang"));
    console.log(langue.lang);

    langHTML.lang = `${langue.lang}`;

    if (langHTML.lang == "fr") {

        title.innerText = data[0].title;
        subtitle.innerText = data[0].subtitle;
        ctaButton.innerText = data[0].ctaButton;
        featuresTitle.innerText = data[0].featuresTitle;
        feature1Title.innerText = data[0].feature1Title;
        feature1Desc.innerText = data[0].feature1Desc;
        feature2Title.innerText = data[0].feature2Title;
        feature2Desc.innerText = data[0].feature2Desc;
        feature3Title.innerText = data[0].feature3Title;
        aboutTitle.innerText = data[0].aboutTitle;
        aboutDesc.innerText = data[0].aboutDesc;
        footerText.innerText = data[0].footerText;
    };

    if (langHTML.lang == "en") {

        title.innerText = data[1].title;
        subtitle.innerText = data[1].subtitle;
        ctaButton.innerText = data[1].ctaButton;
        featuresTitle.innerText = data[1].featuresTitle;
        feature1Title.innerText = data[1].feature1Title;
        feature1Desc.innerText = data[1].feature1Desc;
        feature2Title.innerText = data[1].feature2Title;
        feature2Desc.innerText = data[1].feature2Desc;
        feature3Title.innerText = data[1].feature3Title;
        aboutTitle.innerText = data[1].aboutTitle;
        aboutDesc.innerText = data[1].aboutDesc;
        footerText.innerText = data[1].footerText;
    };
    })
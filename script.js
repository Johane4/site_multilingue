let langDisplay = [
    {
        "title": "Bienvenue sur notre site",
        "subtitle": "Votre porte d'entrée vers une expérience incroyable",
        "ctaButton": "En savoir plus",
        "featuresTitle": "Nos caractéristiques",
        "feature1Title": "Design moderne",
        "feature1Desc": "Profitez d'un design à la pointe de la technologie.",
        "feature2Title": "Responsive",
        "feature2Desc": "Notre site s'adapte à tous vos appareils.",
        "feature3Title": "Facile à utiliser",
        "feature3Desc": "Une interface intuitive pour une expérience agréable.",
        "aboutTitle": "À propos de nous",
        "aboutDesc": "Nous sommes une équipe passionnée par la création de sites web performants et esthétiques.",
        "footerText": "© 2024 - Tous droits réservés. Mentions légales"
    },

    {
        "title": "Welcome to our website",
        "subtitle": "Your entryway to an unforgetable experience",
        "ctaButton": "See more",
        "featuresTitle": "Our features",
        "feature1Title": "Modern design",
        "feature1Desc": "Benfit from a top tier design.",
        "feature2Title": "Responsive",
        "feature2Desc": "Our website can adapt to every devices.",
        "feature3Title": "Easy to use",
        "feature3Desc": "A thoughtful UI for a smooth experience.",
        "aboutTitle": "About us",
        "aboutDesc": "We are a passionated team for creation of performing and beautiful websites.",
        "footerText": "© 2024 - All rights reserved. Legal mentions"
    }
];
console.log(langDisplay);

let stringyDisplay = JSON.stringify(langDisplay);
console.log(stringyDisplay);
localStorage.setItem("langDisplay", stringyDisplay);


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

FRbutt.addEventListener("click", () => {
    // alert("FR");
    let langfr = {
        lang : "fr"
    };

    console.log(langfr);
    let stringyfr = JSON.stringify(langfr);
    console.log(stringyfr);
    localStorage.setItem("lang", stringyfr);
        
    // console.log(`switched to ${langHTML.lang}`);
    let langueDisplay = JSON.parse(localStorage.getItem("langDisplay"));

    title.innerText = langDisplay[0].title;
    subtitle.innerText = langDisplay[0].subtitle;
    ctaButton.innerText = langDisplay[0].ctaButton;
    featuresTitle.innerText = langDisplay[0].featuresTitle;
    feature1Title.innerText = langDisplay[0].feature1Title;
    feature1Desc.innerText = langDisplay[0].feature1Desc;
    feature2Title.innerText = langDisplay[0].feature2Title;
    feature2Desc.innerText = langDisplay[0].feature2Desc;
    feature3Title.innerText = langDisplay[0].feature3Title;
    aboutTitle.innerText = langDisplay[0].aboutTitle;
    aboutDesc.innerText = langDisplay[0].aboutDesc;
    footerText.innerText = langDisplay[0].footerText;
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
    
    // console.log(`switched to ${langHTML.lang}`);
    let langueDisplay = JSON.parse(localStorage.getItem("langDisplay"));

    title.innerText = langDisplay[1].title;
    subtitle.innerText = langDisplay[1].subtitle;
    ctaButton.innerText = langDisplay[1].ctaButton;
    featuresTitle.innerText = langDisplay[1].featuresTitle;
    feature1Title.innerText = langDisplay[1].feature1Title;
    feature1Desc.innerText = langDisplay[1].feature1Desc;
    feature2Title.innerText = langDisplay[1].feature2Title;
    feature2Desc.innerText = langDisplay[1].feature2Desc;
    feature3Title.innerText = langDisplay[1].feature3Title;
    aboutTitle.innerText = langDisplay[1].aboutTitle;
    aboutDesc.innerText = langDisplay[1].aboutDesc;
    footerText.innerText = langDisplay[1].footerText;
});

let langue = JSON.parse(localStorage.getItem("lang"));
console.log(langue.lang);

langHTML.lang = `${langue.lang}`;

if (langHTML.lang == "fr") {
    let langueDisplay = JSON.parse(localStorage.getItem("langDisplay"));

    title.innerText = langDisplay[0].title;
    subtitle.innerText = langDisplay[0].subtitle;
    ctaButton.innerText = langDisplay[0].ctaButton;
    featuresTitle.innerText = langDisplay[0].featuresTitle;
    feature1Title.innerText = langDisplay[0].feature1Title;
    feature1Desc.innerText = langDisplay[0].feature1Desc;
    feature2Title.innerText = langDisplay[0].feature2Title;
    feature2Desc.innerText = langDisplay[0].feature2Desc;
    feature3Title.innerText = langDisplay[0].feature3Title;
    aboutTitle.innerText = langDisplay[0].aboutTitle;
    aboutDesc.innerText = langDisplay[0].aboutDesc;
    footerText.innerText = langDisplay[0].footerText;
};

if (langHTML.lang == "en") {
    let langueDisplay = JSON.parse(localStorage.getItem("langDisplay"));

    title.innerText = langDisplay[1].title;
    subtitle.innerText = langDisplay[1].subtitle;
    ctaButton.innerText = langDisplay[1].ctaButton;
    featuresTitle.innerText = langDisplay[1].featuresTitle;
    feature1Title.innerText = langDisplay[1].feature1Title;
    feature1Desc.innerText = langDisplay[1].feature1Desc;
    feature2Title.innerText = langDisplay[1].feature2Title;
    feature2Desc.innerText = langDisplay[1].feature2Desc;
    feature3Title.innerText = langDisplay[1].feature3Title;
    aboutTitle.innerText = langDisplay[1].aboutTitle;
    aboutDesc.innerText = langDisplay[1].aboutDesc;
    footerText.innerText = langDisplay[1].footerText;
};
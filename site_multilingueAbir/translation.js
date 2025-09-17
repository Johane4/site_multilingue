
// let btnFr = document.querySelector(".language-switch > button")
// let btnEn = document.querySelector(".language-switch button:nth-of-type(2)")

// btnFr.addEventListener('click', setLanguage("fr"))
// btnEn.addEventListener('click', setLanguage("en"))


async function translateLoader() {
    const res = await fetch('translationFr.json');
    const data = await res.json()
    // console.log(data);
    // dataSend(data)
    // if
    
    localStorage.setItem('lang', JSON.stringify(data))
}

// function dataSend(data) {
//     console.log(data);

// console.log(dataLoco.fr);

// }
function setLanguage(lan) {
    
    let dataLoco = JSON.parse(localStorage.getItem('lang'))
    document.querySelector('#title').innerHTML = dataLoco[lan].title
    document.querySelector('#subtitle').innerHTML = dataLoco[lan].subtitle
    document.querySelector('#cta-button').innerHTML = dataLoco[lan].ctaButton
    document.querySelector('#features-title').innerHTML = dataLoco[lan].featuresTitle
    document.querySelector('#feature1-title').innerHTML = dataLoco[lan].feature1Title
    document.querySelector('#feature1-desc').innerHTML = dataLoco[lan].feature1Desc
    document.querySelector('#feature2-title').innerHTML = dataLoco[lan].feature2Title
    document.querySelector('#feature2-desc').innerHTML = dataLoco[lan].feature2Desc
    document.querySelector('#feature3-title').innerHTML = dataLoco[lan].feature3Title
    document.querySelector('#feature3-desc').innerHTML = dataLoco[lan].feature3Desc
    document.querySelector('#aboutTitle').innerHTML = dataLoco[lan].aboutTitle
    document.querySelector('#aboutDesc').innerHTML = dataLoco[lan].aboutDesc
    document.querySelector('#footerText').innerHTML = dataLoco[lan].footerText
  
    
        
   
}


translateLoader()

// let btnFr = document.querySelector(".language-switch > button")
// let btnEn = document.querySelector(".language-switch button:nth-of-type(2)")

// btnFr.addEventListener('click', setLanguage("fr"))
// btnEn.addEventListener('click', setLanguage("en"))
// console.log(data);
// dataSend(data)
// if
// console.log(data.fr);
// console.log(data.en);

// localStorage.setItem('lang', JSON.stringify(data.fr))
// localStorage.setItem('lang', JSON.stringify(data.en))


//  async function translateLoader() {
   
// }


// console.log(data);


// function dataSend(data) {
    //     console.log(data);
    
    // console.log(dataLoco.fr);
    
    // }
    async function  setLanguage(lan) {
         const res = await fetch('translationFr.json');
        const data = await res.json()
        let dataLoco =  data ;
        console.log(dataLoco);
        
        
        // JSON.parse(localStorage.getItem('lang'))
        
        
        
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
        document.querySelector('#about-title').innerHTML = dataLoco[lan].aboutTitle
        document.querySelector('#about-desc').innerHTML = dataLoco[lan].aboutDesc
        document.querySelector('#footer-text').innerHTML = dataLoco[lan].footerText
        
        
        localStorage.setItem('lang', lan) 
        
        // localStorage.setItem('lang', JSON.stringify(dataLoco[lan])) 
    
}

setLanguage(localStorage.getItem('lang'))
        // localStorage.setItem('lang', JSON.stringify(dataLoco[lan])) 

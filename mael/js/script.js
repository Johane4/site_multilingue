async function setLanguage(){
    let json = await fetch("./js/translations.json");
    json = await json.json();
   
    let lang = localStorage.getItem("lang") || "fr";
    
    json = json[lang];
    
    for(key in json){
        document.getElementById(keyToId(key)).innerText = json[key]
    }
    document.querySelector("html").setAttribute("lang", lang)
}

function keyToId(key){
    let ans = key.search(/[A-Z]/);
    return ans == -1 ? key : key.replace(key.charAt(ans), `-${key.charAt(ans).toLowerCase()}`);
}

setLanguage();

let btn = document.querySelector(".language-switch").children
btn[0].addEventListener("click", function(){
    localStorage.setItem("lang", "fr")
    setLanguage();
})

btn[1].addEventListener("click", function(){
    localStorage.setItem("lang", "en")
    setLanguage();
})
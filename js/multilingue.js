const btnFr = document.querySelector(".language-switch button:nth-child(1)");
const btnEn = document.querySelector(".language-switch button:nth-child(2)");

btnFr.addEventListener("click", () => {
document.getElementById("title").textContent = "Bienvenue sur notre site";
document.getElementById("subtitle").textContent = "Votre porte d'entrée vers une expérience incroyable";
document.getElementById("cta-button").textContent = "En savoir plus";

});

btnEn.addEventListener("click", () => {
document.getElementById("title").textContent = "Welcome to our website";
document.getElementById("subtitle").textContent = "Your gateway to an amazing experience";
document.getElementById("cta-button").textContent = "Learn more";

});
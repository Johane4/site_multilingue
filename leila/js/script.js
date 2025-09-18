async function loadLang(lang) {
  const response = await fetch(`${lang}.json`);
  const translations = await response.json();
 
  // Ici on utilise directement les ID
  document.getElementById("title").textContent = translations.title;
  document.getElementById("subtitle").textContent = translations.subtitle;
  document.getElementById("cta-button").textContent = translations.ctaButton;
  document.getElementById("features-title").textContent = translations.featuresTitle;
  document.getElementById("feature1-title").textContent = translations.feature1Title;
  document.getElementById("feature1-desc").textContent = translations.feature1Desc;
  document.getElementById("feature2-title").textContent = translations.feature2Title;
  document.getElementById("feature2-desc").textContent = translations.feature2Desc;
  document.getElementById("feature3-title").textContent = translations.feature3Title;
  document.getElementById("feature3-desc").textContent = translations.feature3Desc;
  document.getElementById("about-title").textContent = translations.aboutTitle;
  document.getElementById("about-descn").textContent = translations.aboutDescn;
  document.getElementById("footer-text").textContent = translations.footerText;
}
 


// Quand la page charge
document.addEventListener("DOMContentLoaded", () => {
  // On vérifie si une langue est déjà stockée
  const savedLang = localStorage.getItem("lang") || "fr";
  loadLang(savedLang);
});
// Langue par défaut
// loadLang("fr");


// // IDs à mettre à jour selon ton HTML
// const IDS = [
//   'title','subtitle','cta',
//   'featuresTitle','feature1Title','feature1Desc',
//   'feature2Title','feature2Desc','feature3Title','feature3Desc',
//   'aboutTitle','aboutDesc','footerText'
// ];

// async function loadLang(lang) {
//   try {
//     // fetch du fichier fr.json ou en.json
//     const res = await fetch(`${lang}.json`);
//     if (!res.ok) throw new Error('Could not load ' + lang + '.json (status ' + res.status + ')');
//     const translations = await res.json();

//     // applique les traductions
//     IDS.forEach(id => {
//       const el = document.getElementById(id);
//       if (!el) return console.warn('Missing element for id:', id);
//       // pour les boutons/input tu pourrais vouloir placeholder, ici tout en textContent
//       el.textContent = translations[id] ?? el.textContent;
//     });

//     // sauvegarde la langue choisie
//     localStorage.setItem('site_lang', lang);
//   } catch (err) {
//     console.error('loadLang error:', err);
//     alert('Erreur chargement langue — regarde la console (F12).');
//   }
// }

// // boutons
// document.querySelectorAll('.btn-lang').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const lang = btn.getAttribute('data-lang');
//     loadLang(lang);
//   });
// });

// // au chargement on applique la langue sauvegardée (ou fr)
// document.addEventListener('DOMContentLoaded', () => {
//   const saved = localStorage.getItem('site_lang') || 'fr';
//   loadLang(saved);
// });

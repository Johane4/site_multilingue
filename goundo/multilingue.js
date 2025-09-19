function appliquerTraduction(en) {
  document.getElementById("title").innerText ("");
  document.getElementById("subtitle").innerText("");
  document.getElementById("ctaButton").innerText("");
}


async function appliquerTraduction() {
  const reponse = await fetch("");
  const traduction = await reponse.json();
  console.log(traduction);
}
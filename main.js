let p = document.querySelector("#fleche")
let nom = document.querySelector(".nom");
let rapport = document.querySelector("#listRapports");
const url = "http://localhost:90/gsb/visiteur/";


p.addEventListener("click", (evt) => {
    console.log(evt);
    nom.style.display = "inline-block";
    p.style.display = "none";

});
nom.addEventListener("click", (evt) => {
    console.log(evt);
    p.style.display = "inline-block";
    nom.style.display = "none";
});




fetch(url)                          // Le fetch va chercher l'instruction
    .then(response => response.json())  // parse la réponse en json
    .then((data) => {
        console.log(data);                 // récupère le tableau d'objets
        // Générer le visuel
        data.forEach(element => {
            //   element.rapports.forEach(details => {

            rapport.insertAdjacentHTML('beforeEnd',
                `<li>
                    <p>${element.id} </p>
                    <p>${element.nom}</p>
                    <p>${element.dateEmbauche}</p>                    
                </li >`);
            //});
        });
    })
    .catch((error) => {                 // afficher une erreur
        console.log(`Voici mon erreur ${error}`);
    });




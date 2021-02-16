const listRapports = document.querySelector('#listRapports');

const listCollectionRapports = (var1) => {
    const url = `localhost:90/gsb/${var1}`;

    fetch(url)                          // Le fetch va chercher l'instruction
        .then(response => response.json())  // parse la réponse en json
        .then((data) => {                   // récupère le tableau d'objets
            // Générer le visuel
            data.forEach (element => {
                console.log(element);
                movies.insertAdjacentHTML('beforeEnd',
                    `
                <li>
                    <img src="${movie.Poster}" alt="Affiche de ${movie.Title}">
                    <p>${movie.Title}</p>
                </li>
            `);
            }
        })
        .catch((error) => {                 // afficher une erreur
            console.log(`Voici mon erreur ${error}`);
        });
}
let p = document.querySelector("#fleche")
let nom = document.querySelector(".nom");
p.addEventListener("click", (evt) =>{
    console.log(evt);
    nom.style.display="inline-block";
    p.style.display="none";

   
});
nom.addEventListener("click", (evt) =>{
    console.log(evt);
    p.style.display="inline-block";
    nom.style.display="none";

   
});



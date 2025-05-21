// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.



fetch( "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json")
.then(response => response.json()) // transforme la réponse en JSON
.then(data => {
    // ici on utilise les données reçues
    // console.log(data);
    let presentation = document.getElementById("presentation");

    let titre = document.createElement("h1");
    titre.textContent = data.nomEntreprise;
    
    // console.log(titre);
    
    let slogan = document.createElement("p");
    slogan.textContent = data.slogan;
    
    // console.log(slogan);
    
    let cta = document.createElement("button");
    cta.textContent = data.bouton;
    // console.log(cta);
    
    presentation.appendChild(titre);
    presentation.appendChild(slogan);
    presentation.appendChild(cta);
    //  Niveau 3 – Afficher les produits
    
    // Pour chaque produit dans les données JSON,
    //  créer dynamiquement une div
    // créer un titre,
    // créer une description
    // créer une image.
    // Affiche ces informations dans une section dédiée, avec une carte pour chaque activité
    // si les données contiennent un lien vers une image.
    
    
    let produit = data.produits;
    console.log(data.produits);

    produit.forEach(e => {
        let prod= document.getElementById("prod");
       let carte= document.createElement("div");

        let image= document.createElement("img")
        image.src = e["image-url"];

       let soustitre = document.createElement("h3");
       soustitre.textContent=e.titre;
       
      let description= document.createElement("p");
      description.textContent=e.presentation;
        
    prod.appendChild(carte);
    carte.appendChild(image);
    carte.appendChild(soustitre);
    carte.appendChild(description);
      
    });


    


//     Niveau 4 – Afficher les témoignages

// Pour chaque témoignage dans les données JSON, 
// créer dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
    
    
    
})
// .catch(error => {
//     // ici on gère les erreurs
//     console.error('Erreur lors du fetch :', error);
//   });
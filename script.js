// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.

fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json"
)
  .then((response) => response.json()) // transforme la réponse en JSON
  .then((data) => {
    // ici on utilise les données reçues
    // console.log(data);
    let presentation = document.getElementById("presentation");

    let titre = document.createElement("h1");
    titre.textContent = data.nomEntreprise;

    // console.log(titre);

    let slogan = document.createElement("h3");
    slogan.textContent = data.slogan;

    // console.log(slogan);

    let cta = document.createElement("button");
    cta.textContent = data.bouton;
    // console.log(cta);
    
    let bnf = document.getElementById("benef");


    presentation.insertBefore(cta, presentation.firstChild)
    presentation.insertBefore(slogan, presentation.firstChild)
    presentation.insertBefore(titre, presentation.firstChild)

    //  ------------------

    let liste = data.listeBeneficesClients;
    let benefs = document.createElement("h4");

    liste.forEach((y) => {
      let benefclient = document.createElement("p");
      benefclient.textContent = y;

      bnf.appendChild(benefs);
      benefs.appendChild(benefclient);
    });

    //  Niveau 3 – Afficher les produits

    // Pour chaque produit dans les données JSON,
    //  créer dynamiquement une div
    // créer un titre,
    // créer une description
    // créer une image.
    // Affiche ces informations dans une section dédiée, avec une carte pour chaque produit.
    // si les données contiennent un lien vers une image.

    let produit = data.produits;
    console.log(data.produits);

    produit.forEach((e) => {
      let prod = document.getElementById("prod");
      let carte = document.createElement("div");
      carte.classList.add("prodcard");
    

      let image = document.createElement("img");
      image.src = e["image-url"];

      let soustitre = document.createElement("h3");
      soustitre.textContent = e.titre;

      let description = document.createElement("p");
      description.textContent = e.presentation;

      prod.appendChild(carte);
      carte.appendChild(image);
      carte.appendChild(soustitre);
      carte.appendChild(description);
    });
    //     Niveau 4 – Afficher les témoignages

    // Pour chaque témoignage dans les données JSON,
    // créer dynamiquement une div contenant le prénom, le commentaire.
    // Ajoute ces témoignages sous les activités dans la page.

    let avis = data.clients;
    console.log(data.clients);

    avis.forEach((i) => {
      let rate = document.getElementById("avis");
      let card = document.createElement("div");
    card.classList.add("clientcard");

      let nom = document.createElement("h4");
      nom.textContent = i.nom;

      let typeprest = document.createElement("p");
      typeprest.textContent = i.typePrestation;

      let comment = document.createElement("p");
      comment.textContent = i.commentaire;

      let not = document.createElement("p");
      not.textContent = i["note"];

      rate.appendChild(card);
      card.appendChild(nom);
      card.appendChild(typeprest);
      card.appendChild(comment);
      card.appendChild(not);
    });
  });
// .catch(error => {
//     // ici on gère les erreurs
//     console.error('Erreur lors du fetch :', error);
//   });


  
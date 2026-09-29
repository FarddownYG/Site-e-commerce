"use strict"

const MODE_DONNEES = "capture"
const PRODUITS_CAPTURE = [
  {
    "_id": 1,
    "title": "Long sleeve Jacket",
    "price": 150,
    "category": "women",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
  },
  {
    "_id": 2,
    "title": "Jacket with wollen hat",
    "price": 65,
    "category": "women",
    "image": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
  },
  {
    "_id": 3,
    "title": "Compact fashion t-shirt",
    "price": 55.99,
    "category": "women",
    "image": "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg"
  },
  {
    "_id": 4,
    "title": "Blue jins",
    "price": 50,
    "category": "women",
    "image": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg"
  },
  {
    "_id": 5,
    "title": "Skirts with full setup",
    "price": 695,
    "category": "women",
    "image": "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg"
  },
  {
    "_id": 6,
    "title": "Yellow Hoody",
    "price": 180,
    "category": "men",
    "image": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
  }
]

let PANIER = []

function addToCard(id) {
  // Chercher le produit dans le catalogue
  const produit = PRODUITS_CAPTURE.find(p => p._id === id)
  
  if (!produit) {
    console.log("Produit non trouvé")
    return
  }

  // Chercher si ce produit est déjà dans le panier
  const ligneExistante = PANIER.find(ligne => ligne._id === id)

  if (ligneExistante) {
    // Si oui : augmenter la quantité
    ligneExistante.quantite += 1
  } else {
    // Sinon : créer une nouvelle ligne
    PANIER.push({
      _id: produit._id,
      title: produit.title,
      prixUnitaire: produit.price,
      quantite: 1
    })
  }

  // Mettre à jour l'affichage du panier
  afficherPanier()
}

function afficherPanier() {
  // Trouver la div qui va contenir les articles du panier
  const panierContainer = document.querySelector('.panier-items')
  
  // Vider le contenu
  panierContainer.innerHTML = ''

  if (PANIER.length === 0) {
    panierContainer.innerHTML = '<p>Votre panier est vide</p>'
    mettreAJourCounter()
    return
  }
  
  // Boucler sur chaque article du PANIER
  PANIER.forEach(ligne => {
    // Calculer le sous-total
    const sousTotal = (ligne.prixUnitaire * ligne.quantite).toFixed(2)
    
    // Créer une ligne HTML pour cet article
    const html = `
      <div class="panier-ligne">
        <p><strong>${ligne.title}</strong></p>
        <p>Prix unitaire: ${ligne.prixUnitaire}€</p>
        <p>Quantité: ${ligne.quantite}</p>
        <p>Sous-total: ${sousTotal}€</p>
        <button onclick="deleteArticle(${ligne._id})">Supprimer</button>
      </div>
    `
    
    // Ajouter les lignes d'au dessusau panier
    panierContainer.innerHTML += html
  })

  // Afficher le total après tous les articles
  const total = calculerTotal()
  const totalHtml = `
    <div class="panier-total">
      <p><strong>Total: ${total}€</strong></p>
    </div>
  `
  //pareil qu'avant on ajoute la ligne totalHtml dans le panier
  panierContainer.innerHTML += totalHtml

  // Mettre à jour le compteur
  mettreAJourCounter()
}

function deleteArticle(id) {
  // Supprimer l'article du panier
  PANIER = PANIER.filter(ligne => ligne._id !== id) //en gros on veut affichier que les ligne qui sont pas egale au bouton supprimé
  
  // Mettre à jour l'affichage
  afficherPanier()
}

function calculerNombreArticles() {
  let nombre = 0
  PANIER.forEach(ligne => {
    nombre += ligne.quantite
  })
  return nombre
}

function calculerTotal() {
  let total = 0
  PANIER.forEach(ligne => {
    total += ligne.prixUnitaire * ligne.quantite
  })
  return total.toFixed(2)
}

function mettreAJourCounter() {
  const counter = document.querySelector('.counter')
  const nombre = calculerNombreArticles()
  const total = calculerTotal()
  counter.textContent = `${nombre} article - ${total}€`
}

function demarrer() {
  // Afficher les produits
  afficherProduits()
}

function afficherProduits() {
  // On recup le conteneur products
  const conteneur = document.querySelector('.products')
  
  // Pour chaque produit on va :
  PRODUITS_CAPTURE.forEach(produit => {
    // Créer une carte
    const carte = document.createElement('div')
    carte.className = 'carte-produit'

    // Et on y insere notre html
    carte.innerHTML = `
      <img src="${produit.image}">
      <h2>${produit.title}</h2>
      <p>${produit.category}</p>
      <p>${produit.price.toFixed(2)} €</p>
      <button onclick="addToCard(${produit._id})">Ajouter au panier</button>
    `
    
    // On ajoute la carte a la page
    conteneur.appendChild(carte)
  })
}

const toggleSideBar = () => {
  const panier = document.querySelector('.panier')
  const sideBar = document.querySelector('.sidebar')
  panier.addEventListener('click', () => {
    sideBar.classList.toggle('w-[600px]')
  })
}

demarrer()
toggleSideBar()

# Mini-boutique : du catalogue au panier

Évaluation individuelle - 3e année d'école d'ingénieurs - initiation au frontend.
Nom : Yanis | Gely Groupe : IR3 | Date : 29/09/2026

## Ce que vous allez réaliser

Construire une boutique affichant six produits, puis permettre à un visiteur de les ajouter à son panier. Vous devez être capable d'expliquer vos choix et de modifier votre propre code le lendemain.

## Déroulement : exactement 3 heures

| Horaire relatif | Travail | Points |
| 00:00 à 00:20 | Pseudocode sur papier ; copie ramassée à 00:20 | 4 |
| 00:20 à 02:35 | Développement, tests et remise du projet : 135 min | 9 |
| 02:35 à 03:00 | QCM individuel sur papier : 25 min | 3 |
| Le lendemain | Oral et modification en direct : 12 min par élève | 4 |
La note finale est sur 20. Le temps de remise du projet est inclus dans les 135 minutes. Un oral est prévu pour chaque élève.

## Règles et ressources

Travail personnel, sans IA, sans aide d'un tiers, sans échange de code. Assistants de génération et de conversation désactivés, y compris dans l'éditeur. Pas de code préparé à l'avance. La complétion classique de syntaxe est autorisée.
Pendant le développement : le sujet, l'aide-mémoire fourni, l'éditeur, le navigateur et ses outils de développement sont autorisés. Pas de recherche web, de messagerie ni d'autre documentation. Sur les deux parties papier : aucun ordinateur ni document extérieur.
Les fichiers de départ et les données sont fournis. Aucun framework, aucune bibliothèque, aucun outil de génération. Les boucles classiques sont acceptées : les méthodes avancées de tableaux ne sont pas exigées.

## Ce que vous rendez

Un dossier NOM_Prenom contenant exactement index.html, style.css et script.js. Le panier reste en mémoire : il peut être vide après un rechargement. Aucun serveur métier, paiement, compte utilisateur ou enregistrement permanent n'est demandé.
Le surveillant recueille une copie intermédiaire à 01:20. La version remise à 02:35 est conservée pour l'oral ; elle ne peut plus être remplacée après l'épreuve.

## Le lendemain : votre oral / 4

Vous ouvrirez la version déposée, démontrerez une action, expliquerez le trajet d'un clic jusqu'à la mise à jour de l'écran, puis réaliserez une petite modification annoncée pendant l'oral. Vous devrez prévoir un résultat et vérifier votre modification. Aucun support extérieur ni IA ; les outils de développement restent autorisés. Une correction en cours d'explication est possible.

---

# Les fonctionnalités à construire

## 1. Afficher les six produits

Créer les cartes à partir du tableau produits, par JavaScript. Chaque carte contient le titre, la catégorie, le prix avec deux décimales, une image avec un texte alternatif et un bouton « Ajouter au panier ».
Le catalogue doit être lisible. Une image indisponible ne doit pas empêcher d'utiliser la carte ; son téléchargement n'est pas évalué. Les titres des produits peuvent rester en anglais.

## 2. Gérer le panier en mémoire

Conserver les lignes du panier dans un tableau JavaScript. Chaque ligne permet de retrouver l'identifiant du produit, son titre, son prix unitaire et sa quantité, directement ou par recherche dans le catalogue.
Premier clic sur un produit : créer une ligne avec une quantité de 1. Clic supplémentaire sur ce même produit : augmenter la quantité, sans créer de nouvelle ligne. Utiliser l'identifiant \_id pour reconnaître un produit.
Chaque ligne affiche le titre, le prix unitaire, la quantité, le sous-total et un bouton « Supprimer ». Ce bouton retire toute la ligne, quelle que soit la quantité. Aucun bouton de diminution de quantité n'est demandé.

## 3. Recalculer et mettre à jour l'écran

Après chaque ajout ou suppression, actualiser le panier, le total et le nombre d'articles. Le nombre d'articles est la somme des quantités, pas le nombre de lignes.
Afficher « Votre panier est vide », 0 article et un total de 0,00 € quand le panier est vide. Le sous-total est prix × quantité. Le total est la somme des sous-totaux.

## 4. Organiser le code

Écrire des fonctions distinctes pour afficher le catalogue, ajouter un produit, supprimer une ligne et actualiser le panier. Des fonctions de calcul séparées sont encouragées. Les noms sont libres. Utiliser des boutons HTML et des événements JavaScript.

## Périmètre et données

Source : https://fakestoreapi.noksha.dev/api/products
L'API renvoie un objet dont data contient les produits. Le fichier fourni intègre une capture de six produits du 28/09/2026 et un chargement réseau facultatif. La capture est le mode utilisé pour cette épreuve ; le chargement n'est pas à écrire et n'est pas noté.
Champs utilisés : \_id (identifiant numérique), title (texte), price (nombre), category (texte), image (URL). Ignorer les autres champs, y compris discountedPrice et stock. Par convention pédagogique, les prix sont affichés en euros, sans taxes ou frais supplémentaires.
Il n'est demandé ni recherche, ni filtre, ni tri, ni remise, ni gestion de stock. La présentation reste simple : la logique et le DOM constituent l'essentiel de l'évaluation.

---

# Partie A - Pseudocode sur papier / 4

Nom : ........................................ Groupe : ................
Écrire en français structuré avec SI, SINON, POUR, TANT QUE, etc. Aucune syntaxe JavaScript particulière n'est attendue. Les noms des variables doivent rester compréhensibles. Vous pouvez utiliser une feuille supplémentaire identifiée.

## A1. Représenter une ligne de panier / 0,5

Proposer les informations nécessaires à une ligne. Expliquer le rôle de l'identifiant et de la quantité.

---

---

---

## A2. Ajouter un produit / 1,5

Écrire l'algorithme AJOUTER_PRODUIT(produit, panier). Le produit appartient au catalogue. Le panier peut être vide ou contenir déjà ce produit. Éviter les doublons et traiter les deux cas.

---

---

---

---

---

---

---

## A3. Calculer le total / 1

Écrire l'algorithme CALCULER_TOTAL(panier). Il doit fonctionner pour un panier vide et pour plusieurs lignes avec des quantités différentes.

---

---

---

---

---

## A4. Tracer l'exécution / 1

Le panier est initialement vide. Ajouter A (id 1, prix 150 €), puis B (id 2, prix 65 €), puis A une seconde fois. Après chaque ajout, écrire les lignes et leurs quantités, le nombre d'articles et le total.
| Étape | Lignes et quantités | Nombre d'articles | Total |
| Après A | | | |
| Après B | | | |
| Après A à nouveau | | | |

---

# Partie B - Développement / 9

## Scénario de recette à vérifier

Exécuter ces actions dans l'ordre sur votre projet. Une ligne désigne un produit distinct dans le panier. Le format 150.00 € est accepté comme 150,00 €.
| Action | Lignes | Articles | Total attendu |
| Ouvrir ou recharger la page | 0 | 0 | 0,00 € |
| Ajouter le produit 1, prix 150 € | 1 | 1 | 150,00 € |
| Ajouter encore le produit 1 | 1 | 2 | 300,00 € |
| Ajouter le produit 2, prix 65 € | 2 | 3 | 365,00 € |
| Ajouter le produit 3, prix 55,99 € | 3 | 4 | 420,99 € |
| Supprimer la ligne du produit 1 | 2 | 2 | 120,99 € |
| Supprimer les deux lignes restantes | 0 | 0 | 0,00 € |
Vérifier aussi qu'il est possible d'ajouter à nouveau un produit après avoir vidé le panier, que les autres lignes restent présentes après une suppression et qu'aucune erreur JavaScript ne bloque les actions.

## Conseils de gestion du temps

Consacrer environ 20 minutes à la structure et au style, 30 minutes au catalogue, 55 minutes au panier, puis 30 minutes aux tests, corrections et dépôt. Il vaut mieux une interface sobre qui fonctionne qu'une interface décorée avec un panier incorrect.

## Aide-mémoire autorisé pendant le développement

```js
const zone = document.querySelector("#zone");
const element = document.createElement("p");
element.textContent = "Bonjour";
zone.appendChild(element);
zone.replaceChildren(); // retire les enfants de la zone
bouton.addEventListener("click", () => {
  /* action */
});
image.src = uneURL;
image.alt = "Description";
const liste = [];
liste.push(unObjet);
liste.splice(indice, 1); // retire un élément à cet indice
for (let i = 0; i < liste.length; i++) {
  /* ... */
}
const nombre = Number("12");
const affichage = (12.5).toFixed(2); // renvoie '12.50'
```

Dans le HTML : relier style.css avec link et charger script.js avec un élément script portant l'attribut defer. Pour écrire du texte issu des données, textContent convient.
En bas de script.js, la fonction demarrer() est appelée une fois que le tableau produits est prêt. Compléter cette fonction et ajouter votre propre code dans la zone indiquée. Le chargement fourni reste en place.

---

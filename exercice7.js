let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal);

let promoExiste = (codePromo ?? null) !== null;

let reduction = 0;
if (promoExiste && estMembre) {
  reduction = sousTotal * (reductionPourcentage / 100);
}
console.log("Réduction :", reduction);

let totalFinal = sousTotal - reduction;
console.log("Total final :", totalFinal);

let statut = "Solde insuffisant";
let paiementAccepte = false;

if (soldeCompte >= totalFinal) {
  statut = "Paiement accepté";
  paiementAccepte = true;
}
console.log("Statut :", statut);

let nouveauSolde = soldeCompte;
if (paiementAccepte) {
  nouveauSolde = soldeCompte - totalFinal;
  console.log("Nouveau solde :", nouveauSolde);
}

console.log("===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal, "MAD");
console.log("Réduction :", reduction, "MAD");
console.log("Total     :", totalFinal, "MAD");
console.log("Statut    :", statut);
console.log("Solde     :", nouveauSolde, "MAD");
console.log("=========================");
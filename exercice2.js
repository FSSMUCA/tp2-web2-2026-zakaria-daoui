let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  let texte = String(valeurs[i]);

  if (valeurs[i] === "") {
    texte = "(chaine vide)";
  }

  if (valeurs[i]) {
    console.log(texte + " -> truthy");
  } else {
    console.log(texte + " -> falsy");
  }
}
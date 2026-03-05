let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
  let valeur = nombres[i];

  if (Number.isNaN(valeur)) {
    console.log(String(valeur) + " -> INVALIDE");
  } else if (valeur === Infinity || valeur === -Infinity) {
    console.log(String(valeur) + " -> INFINI");
  } else if (1 / valeur === -Infinity) {
    console.log(String(valeur) + " -> ZERO NEGATIF");
  } else if (Number.isInteger(valeur) && Number.isSafeInteger(valeur)) {
    console.log(String(valeur) + " -> ENTIER SUR");
  } else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
    console.log(String(valeur) + " -> ENTIER HORS LIMITES");
  } else {
    console.log(String(valeur) + " -> DECIMAL");
  }
}
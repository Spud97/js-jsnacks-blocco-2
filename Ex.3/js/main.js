num = [(4, 2, 7, 1, 3, 9, 5, 8)];
indicePari = [];
indiceDispari = [];
let somma = 0;

for (let i = 0; i < num.length; i++) {
  const numeroCorrente = num[i];
  if (numeroCorrente % 2 === 0) {
    indicePari.push(numeroCorrente);
  } else {
    indiceDispari.push(numeroCorrente);
  }
}

for (let j = 0; j < indiceDispari.length; j++) {
  somma = somma + indiceDispari[j];
}

console.log(somma);
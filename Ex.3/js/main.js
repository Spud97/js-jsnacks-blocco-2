num = [4, 2, 7, 1, 3, 9, 5, 8];
indicePari = [];
indiceDispari = [];
let somma = 0;

for (let i = 0; i < num.length; i++) {
  const numeroCorrente = i;
  if (numeroCorrente % 2 === 0) {
    indicePari.push(num[i]);
  } else {
    indiceDispari.push(num[i]);
  }
}

for (let j = 0; j < indiceDispari.length; j++) {
  const numeroDaSommare = indiceDispari[j];
  somma = (somma + numeroDaSommare);
}

console.log(somma);
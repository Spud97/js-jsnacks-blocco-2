const nomi = ["Mattia", "Giacomo", "Lorenzo", "Carlo", "Ezio"];
const cognomi = ["Rossi", "Medici", "Repossi", "Costa", "Auditore"];
let nomeIndex = 0
let cognomeIndex = 0
let nomeRandom = ""
let cognomeRandom = ""

for (let i = 0; i < nomi.length; i++) {
  nomeIndex = (parseInt (Math.floor(Math.random() * nomi.length)));
  nomeRandom = nomi[nomeIndex];
}

for (let j = 0; j < cognomi.length; j++) {
  cognomeIndex = (parseInt (Math.floor(Math.random() * cognomi.length)));
  cognomeRandom = cognomi[cognomeIndex];
}

console.log(nomeRandom + cognomeRandom);

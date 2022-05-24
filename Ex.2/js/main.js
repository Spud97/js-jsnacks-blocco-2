const nomi = ["Mattia", "Giacomo", "Lorenzo", "Carlo", "Ezio"];
const cognomi = ["Rossi", "Medici", "Repossi", "Costa", "Auditore"];
let nomeIndex = 0
let cognomeIndex = 0
let nomeRandom = ""
let cognomeRandom = ""


for (let i = 0; i < nomi.length; i++) {
  nomeIndex = (Math.floor(Math.random() * nomi.lenght));
  nomeRandom = (nomi[nomeIndex]);
  console.log(nomeRandom);
}

for (let i = 0; i < cognomi.length; i++) {
  cognomeIndex = (Math.floor(Math.random() * cognomi.lenght));
  cognomeRandom = (cognomi[cognomeIndex]);
  console.log(cognomeRandom);
}

console.log(toString(nomeRandom + cognomeRandom));

const num = prompt("Inserisci un numero");
const pari = [];
const dispari = [];

if (num % 2 === 0) {
  pari.push(parseInt(num));
  console.log(pari[0]);
} else {
  dispari.push(parseInt(num));
  console.log(dispari[0] + 1)
}
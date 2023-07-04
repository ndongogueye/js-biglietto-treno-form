

const prezzoPerKm = 0.21;
const prezzoBiglietto = kmDaFare * prezzoPerKm;

 let sconto = 0;
 if (etaUtente <18 ) {
    sconto = 20;
 }

 else if (etaUtente >= 65) {
    sconto = 40;
 }

 let scontoTotale = prezzoBiglietto * sconto / 100;

 const prezzoBigliettoScontato = prezzoBiglietto - scontoTotale;

console.log (prezzoBigliettoScontato)

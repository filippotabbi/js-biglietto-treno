// dichiarazione variabili
var etaPass = prompt("Inserisci la tua età");
var km = prompt("Inserisci chilometri");

//mi assicuro che l'età diventi un numero
etaPass = parseInt(etaPass);


km = parseFloat(km);

console.log(etaPass, km);

//dichiaro variabile prezzo al km e variabile sconto
//
var prezzoKm = 0.15;
var scontoApp = null;

//calcolo del prezzo
prezzoKm = prezzoKm * km;


if (etaPass < 18) {
    prezzoKm = prezzoKm * 0.8;
    scontoApp = "20%";
} else if (etaPass > 64) {
    prezzoKm = prezzoKm * 0.6;
    scontoApp = "40%";
}
//

prezzoKm = parseFloat(prezzoKm).toFixed(2);

//stampo nel p dell'html
var output = document.getElementById("output");
output.innerHTML = "La tua età: " + etaPass + "<br>";
output.innerHTML += "Chilometri da percorrere: " + km + " km<br>";
output.innerHTML += "Prezzo del biglietto: " + prezzoKm + " € <br>";

//mi assicuro che stampi lo sconto applicato solo se c'è uno sconto
if (scontoApp != null)
{
    output.innerText += "Sconto applicato: " + scontoApp;
}

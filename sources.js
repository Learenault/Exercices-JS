const exo1 = document.getElementById("exo1");
const exo2 = document.getElementById("exo2");
const exo3 = document.getElementById("exo3");
const exo4 = document.getElementById("exo4");
const reponse1 = document.getElementById("reponse1");
const reponse2 = document.getElementById("reponse2");
const reponse3 = document.getElementById("reponse3");
const reponse4 = document.getElementById("reponse4");
const enonces = document.getElementsByClassName("enonces");
const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const e3 = document.getElementById("e3");
const e4 = document.getElementById("e4");
// addEventListener 
exo1.addEventListener("click", ennonce1);
exo2.addEventListener("click", ennonce2);
exo3.addEventListener("click", ennonce3);
exo4.addEventListener("click", ennonce4);
demarer1.addEventListener("click", AgeT);
demarer2.addEventListener("click", exercice2);
demarer3.addEventListener("click", prenom);
demarer4.addEventListener("click", affiche4);
let tabReponse = ["reponse1","reponse2","reponse3"];

window.onload = function () {
  enonces.style.display = "none";
}


function ennonce1() {
  reponse1.classList.replace("rep-ouverte","rep-cache");
  reponse2.classList.replace("rep-ouverte","rep-cache");
  reponse3.classList.replace("rep-ouverte","rep-cache");
  reponse4.classList.replace("rep-ouverte","rep-cache");

  !e1.style.display == "none" ? e1.style.display = "none" : e1.style.display = "block";
  e4.style.display = "none";
  e3.style.display = "none";
  e2.style.display = "none";
}

function ennonce2() {
  reponse1.classList.replace("rep-ouverte","rep-cache");
  reponse2.classList.replace("rep-ouverte","rep-cache");
  reponse3.classList.replace("rep-ouverte","rep-cache");
  reponse4.classList.replace("rep-ouverte","rep-cache");

!e2.style.display == "none" ? e2.style.display = "none" : e2.style.display = "block";
  e1.style.display = "none";
  e3.style.display = "none";
  e4.style.display = "none";
}

function ennonce3() {
  reponse1.classList.replace("rep-ouverte","rep-cache");
  reponse2.classList.replace("rep-ouverte","rep-cache");
  reponse3.classList.replace("rep-ouverte","rep-cache");
  reponse4.classList.replace("rep-ouverte","rep-cache");

  !e3.style.display == "none" ? e3.style.display = "none" : e3.style.display = "block";
  e1.style.display = "none";
  e4.style.display = "none";
  e2.style.display = "none";
}

function ennonce4() {
  reponse1.classList.replace("rep-ouverte","rep-cache");
  reponse2.classList.replace("rep-ouverte","rep-cache");
  reponse3.classList.replace("rep-ouverte","rep-cache");
  reponse4.classList.replace("rep-ouverte","rep-cache");

  !e4.style.display == "none" ? e4.style.display = "none" : e4.style.display = "block";
    e1.style.display = "none";
    e3.style.display = "none";
    e2.style.display = "none";
}


// Exercice 1

function AgeT() {
  var age1 = 0;
  var age2 = 0;
  var age3 = 0;
  var age = window.prompt("Entrez votre age");
    while (age != "") {
    var age = window.prompt("Entrez votre age");
    if (age < 20) {
      age1++
    }
    if (age >= 40) {
      age3++;
    }
    if (age >= 20 && age <= 40) {
      age2++
    }
  }
  reponse1.classList.replace("rep-cache","rep-ouverte");
  reponse1.textContent = "Moins de 20 ans : " + age1 + "  Entre 20 et 40 ans : " + age2 + "   Plus de 40 ans : " + age3;
}



// Exercice 2

function exercice2() {
  var nb = prompt("entrez un nombre à multiplier");
  for (var i = 0; i <= 10; i++) {
    var table = nb * i;
    console.log(nb + " * " + i + " = " + table);
    reponse2.innerText += nb + " * " + i + " = " + table + "\n";
  }
  reponse2.classList.replace("rep-cache","rep-ouverte");
}

//Exercice 3
function prenom() {
  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
  var nom = prompt("Entrez un prénom");
  if (tab.indexOf(nom) > -1) {
    var indice = tab.indexOf(nom);
    tab.splice(indice, 1);
    tab.push(" ");
    reponse3.textContent = tab;
  } else {
    reponse3.textContent = "Le prénom n'est pas trouvé";
    reponse3.classList.replace("rep-cache","rep-ouverte");
  }
}

// Exercice 4 

function affiche4() {
  var PU = parseInt(prompt("Entrez un prix unitaire "));
  var QTECOM = parseInt(prompt("Quantité commandé "));
  var TOT = PU * QTECOM;
  var REM = 0;
  var PAP = TOT - REM;
  var PORT = 0;
  var Result = 0;
  AfficheRemise(TOT, PAP);
  AjoutPort(PAP, PORT, Result);
}

function AfficheRemise(TOT){
  var REM = 0;
  var PAP = TOT - REM;
  reponse4.textContent += "Le prix d'achats de vos articles est de " + TOT + " EUROS. " + "\n";

  if (TOT > 100 && TOT < 200){
    REM = TOT * 0.05;
    PAP = TOT - REM;
    reponse4.textContent += " Une remise de 5% est offerte, soit " + (REM) + " euros en moins sur votre prix d'achats. Le prix avec remise est de  : " + PAP + " EUROS." + "\n";
    return PAP;

  }
  if (TOT >= 200){
    REM = TOT * 0.1;
    PAP = TOT - REM;
    reponse4.textContent += " Une remise de 10% est offerte, soit " + REM + " euros en moins sur votre prix d'achats. Le prix avec remise est de  : " + PAP + " EUROS." + "\n";
    return PAP;
  } else {
    REM = 0;
    PAP = TOT - REM;
    reponse4.textContent += "  La remise est de 0%. Le prix à payer est toujours de " + TOT + " EUROS." + "\n";
    return PAP;
  }
}

function AjoutPort(PAP, PORT, Result) {
  if (AfficheRemise(PAP) > 500) {
    reponse4.textContent = "Aucun frais n'est ajouté" + "\n";
  } else {
    PORT = (AfficheRemise(PAP)) * 0.02;
    Result = (AfficheRemise(PAP)) + PORT;
    if (PORT < 6) {
      PORT = 6;
      Result = (AfficheRemise(PAP)) + PORT;
      reponse4.textContent += "Les frais de port sont de 6€ minimum" + "\n";
    }
    reponse4.textContent += " Des frais de port à hauteur de 2% s'ajoutent au prix remisé. Le prix total est de : " + Result + "EUROS" + "\n";
  }
}
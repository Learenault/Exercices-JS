
var valide = document.getElementById("submit");
var email = document.getElementById('email');
var nom= document.getElementById("nom");
var form= document.getElementById('form1');
var prenom=document.getElementById('prenom');
var code=document.getElementById('code');
var missNom = document.getElementById('missNom');
var missPrenom = document.getElementById('missPrenom');
var missCode = document.getElementById('missCode');
var missEmail = document.getElementById('missEmail');
var regExp1 = new RegExp("^[A-Za-z]+$");
var regExp2 = new RegExp("^.[a-z0-9]+");



// J'écoute l'évenement du click et j'appelle la fonction.

form.addEventListener('submit', validation);



function validation(e){
// var regExp1 = new RegExp("^[A-Za-z]+$");
  
    if (nom.value == "" || nom.value == null){
    missNom.textContent='* Nom manquant';
    missNom.style.color='red';
    e.preventDefault()}
    

    if(regExp1.test(nom.value)==false){
     nomAlpha.textContent='* Le nom doit être une chaine alphabétique';
     nomAlpha.style.color='red';
     e.preventDefault()}
    

    if(prenom.value == "" || prenom.value == null){
     missPrenom.textContent='* Prénom manquant';
     missPrenom.style.color='red';
     e.preventDefault()}


    if(regExp1.test(prenom.value)==false){
    prenomAlpha.textContent=' * Le prénom doit être une chaine alphabétique';
    prenomAlpha.style.color='red';
    e.preventDefault()}
       

    if(code.value.length!=5){
    missCode.textContent=' Le code postale doit comporter 5 chiffres';
    missCode.style.color='red';
     e.preventDefault()}
            
        

    if(email.value.indexOf("@") == -1){
    missEmail.textContent='* Le @ doit etre lisible';
    missEmail.style.color='red';
    e.preventDefault()}

  
    if(regExp2.test(email.value)==false){
    emailAlpha.textContent=' * Votre adresses mail doit comporter un point';
    emailAlpha.style.color='red';
    e.preventDefault()}

}
                    
            
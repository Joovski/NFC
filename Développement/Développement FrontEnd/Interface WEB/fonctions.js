// Connexion
function check(form) { 
    
if(form.identifiant.value == "Vallette" && form.motdepasse.value == "Vallette") {
        window.open('indexHistorique.html')
        window.close('connexion.html')
} else {
        alert("Mot de Passe ou Identifiant Incorrect")
       }
}

// Deconnexion
function deconnexion(form) {
        window.open('connexion.html')
        window.close('indexHistorique.html')
}

// Rafraichir la page
function rafraichir(form) {
        location.reload();
}
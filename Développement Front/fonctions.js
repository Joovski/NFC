function check(form) { 
    
if(form.identifiant.value == "admin" && form.motdepasse.value == "admin") {
        window.open('index.html')
} else {
        alert("Mot de Passe ou Identifiant Incorrect")
       }
}
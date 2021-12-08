<?php
    // Connexion à une BDD hébergé par XAMPP
    $mysqli = new mysqli('localhost','root','','nfcreader');

    // Récupération d'information
    $req = "select * from nfcreader";
    echo ($req);
?>
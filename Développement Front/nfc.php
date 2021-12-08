<?php

    $mysqli = new mysqli('localhost','root','','nfcreader');

    $req = "select * from nfcreader";
    echo ($req);
?>
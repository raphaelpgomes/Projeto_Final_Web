<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $tefone = $_POST["telefone"];

    echo "Nome: " . $nome . "<br>";
    echo "Email: " . $email . "<br>";
    echo "telefone:" .$tefone;
}
?>
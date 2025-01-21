<?php
require 'config.php'; 

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (empty($username) || empty($email) || empty($password)) {
        die("Tutti i campi sono obbligatori!");
    }

    try {
        $sql = "INSERT INTO utenti (username, password) VALUES (:username, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashed_password);

        if ($stmt->execute()) {
            echo "Registrazione completata con successo! <a href='login.html'>Accedi</a>";
        }
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            die("Il nome utente o l'email sono già in uso!");
        } else {
            die("Errore: " . $e->getMessage());
        }
    }
}
?>

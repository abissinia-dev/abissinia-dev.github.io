<?php
$host = 'localhost';     
$dbname = 'nome_database';
$username = 'nome_utente'; 
$password = 'password';  

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Errore di connessione al database: " . $e->getMessage());
}

// Recupero dei dati dal form
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    // Validazione dei campi
    if (empty($username) || empty($password) || empty($confirm_password)) {
        die("Tutti i campi sono obbligatori!");
    }

    if ($password !== $confirm_password) {
        die("Le password non corrispondono!");
    }

    if (strlen($password) < 6) {
        die("La password deve contenere almeno 6 caratteri!");
    }

    // Controllo se l'utente esiste già
    $sql = "SELECT id FROM utenti WHERE username = :username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
        die("Il nome utente è già in uso!");
    }

    // Hash della password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Inserimento nel database
    $sql = "INSERT INTO utenti (username, password) VALUES (:username, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $hashed_password);

    if ($stmt->execute()) {
        echo "Registrazione completata con successo! <a href='login.html'>Accedi</a>";
    } else {
        echo "Errore durante la registrazione. Riprova.";
    }
} else {
    echo "Richiesta non valida.";
}
?>

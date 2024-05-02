<?php
$servername = "localhost";
$username = "ezequielcampos";
$password = "71277157";
$database = "tiendadb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
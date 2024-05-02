<?php
session_start();
require_once './includes/auth.php';
include('./db_connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = mysqli_real_escape_string($conn, $data['password']);

    $sql = "CALL authenticate_user(?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $message = $row['message'];

    if (strpos($message, 'Usuario autenticado correctamente.') === 0) {
        $userId = substr($message, strlen('Usuario autenticado correctamente.'));
        $_SESSION['user_id'] = $userId;
        session_regenerate_id(); // Regenerar el ID de sesión después de un inicio de sesión exitoso
    }

    echo $message;
    $stmt->close();
}

$conn->close();
?>


<?php
include('./db_connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $username = $data['username'];
    $fullName = $data['fullName'];
    $address = $data['address'];
    $password = $data['password'];

    $sql = "CALL addusers(?, ?, ?, ?, ?, @p_result)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $email, $username, $fullName, $address, $password);
    
    if ($stmt->execute()) {
        $stmt->close();
        $response = $conn->query("SELECT @p_result AS mensaje");
        $result = $response->fetch_assoc();
        echo json_encode($result);
    } else {
        echo json_encode(array('error' => "Error al registrar usuario: " . $stmt->error));
    }

    $conn->close();
}
?>

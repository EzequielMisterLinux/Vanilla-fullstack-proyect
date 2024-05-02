<?php

require_once __DIR__ . '/vendor/autoload.php';


$mongo = new MongoDB\Client("mongodb://localhost:27017");

$collection = $mongo->mydb->tienda;


$imagen = isset($_FILES['fotografia']['name']) ? $_FILES['fotografia']['name'] : '';


$nombre = isset($_POST['nombre']) ? htmlspecialchars($_POST['nombre']) : '';

$descripcion = isset($_POST['descripcion']) ? htmlspecialchars($_POST['descripcion']) : '';

$precio = isset($_POST['precio']) ? floatval($_POST['precio']) : 0;


$insertOneResult = $collection->insertOne([
    'imagen' => $imagen,
    'nombre' => $nombre,
    'descripcion' => $descripcion,
    'precio' => $precio
]);


if ($insertOneResult->getInsertedCount() > 0) {
    $uploadDir = __DIR__ . 'uploads'; 
    $uploadFile = $uploadDir . basename($imagen);

    if (move_uploaded_file($_FILES['fotografia']['tmp_name'], $uploadFile)) {
        // File was moved successfully
    } else {
        // Failed to move the file
    }
}

header("Location: mongoStore.php");
?>
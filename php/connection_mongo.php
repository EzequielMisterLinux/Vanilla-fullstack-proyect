<?php
require_once __DIR__ . '../vendor/autoload.php';

$mongo = new MongoDB\Client("mongodb://localhost:27017");
$mydb = $mongo->mydb;
$tiendaCollection = $mydb->tienda;
?>


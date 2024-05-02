<?php
session_start();
$isLoggedIn = isset($_SESSION['user_id']);
?>

<?php
require_once __DIR__ . '/vendor/autoload.php';
$mongo = new MongoDB\Client("mongodb://localhost:27017");
$tiendaCollection = $mongo->mydb->tienda;
$productos = $tiendaCollection->find();
?>
    <div>
        
        <form method="post" action="data_tienda.php" enctype="multipart/form-data">
            <div class="input-box">
                <span class="icon"><ion-icon name="search-sharp"></ion-icon></span>
                <input type="file" name="fotografia" required>
                
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="search-sharp"></ion-icon></span>
                <input type="text" name="nombre" required>
                <label>Nombre producto</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="search-sharp"></ion-icon></span>
                <input type="number" step=".01" name="precio" required>
                <label>Precio</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="search-sharp"></ion-icon></span>
                <input type="text" name="descripcion" required>
                <label>Descripción</label>
            </div>
            <div class="input-box">
                <input type="text">
                <label>categoria</label>
            </div>
            <div class="btnLogin-popup">
                <a><button class="btnLogin-popup" type="submit">Add</button></a>
            </div>
        </form>
    
</div>

<div class="tienda-list tienda-section ocultar-productos" id="tienda-list">

<div class="input-box">
    
    <form action="mongoStore.php" method="post">
        <input type="text" name="search" required>
        <label for="search">Buscar producto</label>
        <button type="submit">Buscar</button>
    </form>
</div>

<?php
$cliente = new MongoDB\Client("mongodb://localhost:27017");
$baseDeDatos = $cliente->mydb;
$coleccion = $baseDeDatos->tienda;

$terminoBusqueda = $_POST['search'];

$filtro = ['nombre' => new MongoDB\BSON\Regex($terminoBusqueda, 'i')];
$resultado = $coleccion->find($filtro);


// Mostrar los resultados 
foreach ($resultado as $producto) {
    echo '<div class="tienda-item">';
    echo '<img src="./uploads' . htmlspecialchars($producto['./php/uploads']) . '" width="150" height="120" alt="' . $producto['nombre'] . '">';

    echo '<h3>' . $producto['nombre'] . '</h3>';
    echo '<p>' . $producto['descripcion'] . '</p>';
    echo '<b>$' . $producto['precio'] . '</b>';

    if ($isLoggedIn) {
        echo '<a id="loginBtn" href="carrito.php"><button class="btnLogin-popup">Agregar al carrito</button></a>';
    } else {
        echo '<a id="loginBtn" class="agregar-carrito"><button class="btnLogin-popup">Agregar al carrito</button></a>';
    }

    echo '</div>';
}
?>
</div>
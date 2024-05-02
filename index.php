<?php

session_start();
$isLoggedIn = isset($_SESSION['user_id']);
include('./php/db_connection.php');
require_once './php/includes/auth.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>famarcia</title>
<link rel="stylesheet" href="./css/header.css">
<link rel="stylesheet" href="./css/forms.css">
<link rel="stylesheet" href="./css/slider.css">
<link rel="stylesheet" href="./css/notification.css">
<link rel="stylesheet" href="./css/notificationRegister.css">
<link rel="stylesheet" href="./css/store.css">
<link rel="stylesheet" href="./css/node_modules/@fortawesome/fontawesome-free/css/all.min.css">
</head>

<body>
  
<header class="header-center">
  <nav class="nav-center nav-links">
      <h1>FarmaciaMiraflores</h1>
      <a href="#home" class="nav-link line-hover"><i class="fas fa-home"> home</i></a>
      <a href="#store" class="nav-link line-hover"><i class="fas fa-shopping-cart"> store</i></a>
      <a href="#" class="nav-link line-hover"><i class="fas fa-info-circle"> about</i></a>

  </nav>

  
  
  <div class="center-items">

    <div class="menu-header">
        <i class="fas fa-bars "></i>
    </div>
  

    
    <input class="input-header fas fa-search" placeholder="🔍 buscar" type="search"  >
    <?php echo renderNavButton(); ?>
  </div>
</header>

<div class="nav-mobile">
    <nav class="nav-links-mobile">
        
        <a href="#homeMenu" class="nav-link "><i class="fas fa-home">home</i></a>
        <a href="#storeMenu" class="nav-link "><i class="fas fa-shopping-cart">store</i></a>
        <a href="#" class="nav-link "><i class="fas fa-info-circle">about</i></a>

    </nav>
</div>

<div class="slider"></div>
<div class="store"></div>
<div class="cards-container">
<div class="login-card card"></div>
<div class="register-card card cards"></div>




</div>
<script type="module" src="./js/main.js"></script>
</body>
</html>




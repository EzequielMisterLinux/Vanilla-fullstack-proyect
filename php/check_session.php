<?php
session_start();

if (isset($_SESSION['user_id'])) {
    echo 'Usuario autenticado';
} else {
    echo 'Usuario no autenticado';
}
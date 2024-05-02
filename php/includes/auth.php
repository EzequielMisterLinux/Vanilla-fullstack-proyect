<?php
function isLoggedIn()
{
    return isset($_SESSION['user_id']);
}

function renderNavButton()
{
    if (isLoggedIn()) {
        return '<button class="nav-btn" data-toggle="open" onclick="handleLogout()"><i class="fas fa-sign-out-alt">logout</i></button>';
    } else {
        return '<button class="nav-btn" data-toggle="closed"><i class="fas fa-sign-in-alt">Login</i></button>';
    }
}

function renderLogoutScript()
{
    if (isLoggedIn()) {
        return '<script type="module" src="./js/auth.js"></script>';
    }
    return '';
}
?>
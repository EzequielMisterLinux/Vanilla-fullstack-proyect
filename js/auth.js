export const handleLogout = () => {
    fetch('http://localhost/project/php/logout.php')
        .then(() => {
            console.log('El usuario ha cerrado sesión correctamente.');
            window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

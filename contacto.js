document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    var messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    messageModal.show(); // Muestra el modal personalizado
});

/*
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    alert('Mensaje enviado');
});
*/
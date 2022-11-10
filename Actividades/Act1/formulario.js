function mostrarResultados() {
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var tel = document.getElementById("telefono").value;
    if (nombre == "" || mail == "" || tel == "") {
        alert('No completaste todos los datos!');
    } else {
        alert(`Gracias por enviar tus datos! Nombre: ${nombre}. Mail: ${mail}. Telefono ${tel}`);
        resetForm();
    }
}

function resetForm() {
    document.getElementById('formulario').reset();
}
function mostrarResultados() {
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    if (nombre == "" || mail == "") {
        alert('No completaste todos los datos!');
    } else {
        alert(`Gracias por enviar tus datos! Nombre: ${nombre}. Mail: ${mail}`);
        resetForm();
    }
}

function resetForm() {
    document.getElementById('formulario').reset();
}
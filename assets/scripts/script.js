// Ruta al archivo JSON
const url = './assets/scripts/nacionalidad.json';

// Función para cargar las opciones del select desde el JSON
async function loadnacionalidad() {
    try {
        const response = await fetch(url);
        const nacionalidad = await response.json();
        const selectElement = document.getElementById('opcion');

        // Limpiar las opciones actuales
        selectElement.innerHTML = '';

        // Agregar nuevas opciones obtenidas del JSON
        nacionalidad.forEach(nacionalidad => {
            const option = document.createElement('option');
            option.value = nacionalidad.name;
            option.textContent = nacionalidad.name;
            selectElement.appendChild(option);
        });

    } catch (error) {
        console.error('Error al cargar los nacionalidades:', error);
    }
}

// Llamar a la función para cargar los nacionalidades cuando la página se carga
document.addEventListener('DOMContentLoaded', loadnacionalidad);

// Función para manejar el envío del formulario
function submitForm(event) {
    // Evitar que el formulario se envíe y recargue la página
    event.preventDefault();

    // Recopilar los datos del formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        club: document.getElementById('opcion').value,
        comentarios: document.getElementById('comentarios').value
    };

    // Imprimir el objeto en la consola
    console.log(formData);
}

// Asignar la función al evento submit del formulario
document.getElementById('registroForm').addEventListener('submit', submitForm);
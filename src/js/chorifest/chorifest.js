//TIPO DE CHORIS
getTipoChori(showTipoChori);

// Función para mostrar los tipos de choris en el contenido
// Función para mostrar los tipos de choris en el contenido
function showTipoChori(listaTipoChoris) {
    const tipoChoriContent = document.getElementById('tipoChori');
    tipoChoriContent.innerHTML = '';

    const mainContainer = document.createElement('div');
    mainContainer.className = 'rol-selector';

    const spanElement = document.createElement('span');
    spanElement.textContent = 'TIPO DE CHORI';
    mainContainer.appendChild(spanElement);

    const selectContainer = document.createElement('div');
    selectContainer.className = 'form-group select';

    const selectElement = document.createElement('select');
    selectElement.className = 'option';
    selectElement.id = 'tipoChori-select'; // Agrega el ID aquí

    listaTipoChoris.forEach((tipoChori) => {
        const optionElement = document.createElement('option');
        optionElement.value = tipoChori.idTipoChori;
        optionElement.textContent = tipoChori.tipoDeChori;
        selectElement.appendChild(optionElement);
    });

    selectContainer.appendChild(selectElement);
    mainContainer.appendChild(selectContainer);
    tipoChoriContent.appendChild(mainContainer);
}

//----------------------------------------------------------------

getRol(showRoles);


function showRoles(listaRoles) {
    const rolContent = document.getElementById('roles');
    rolContent.innerHTML = '';

    const mainContainer = document.createElement('div');
    mainContainer.className = 'rol-selector';

    const spanElement = document.createElement('span');
    spanElement.textContent = 'ROL';
    mainContainer.appendChild(spanElement);

    const selectContainer = document.createElement('div');
    selectContainer.className = 'form-group select';

    const selectElement = document.createElement('select');
    selectElement.className = 'option';
    selectElement.id = 'roles-select'; // Agrega el ID aquí

    listaRoles.forEach((rol) => {
        const optionElement = document.createElement('option');
        optionElement.value = rol.idRol;
        optionElement.textContent = rol.nombreRol;
        selectElement.appendChild(optionElement);
    });

    selectContainer.appendChild(selectElement);
    mainContainer.appendChild(selectContainer);
    rolContent.appendChild(mainContainer);
}

const submitButton = document.getElementById('submitButton');
const form = document.getElementById('registroForm');

let formData; 

document.getElementById('registroForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    formData = {
        nombreCompleto: document.getElementById('nombreCompletoInput').value,
        email: document.getElementById('emailInput').value,
        telefono: document.getElementById('telefonoInput').value,
        idRol: document.getElementById('roles-select').value,
        idTipoChori: document.getElementById('tipoChori-select').value,
        tipoPan: document.getElementById('tipoPanInput').value,
        aderezo: document.getElementById('aderezosInput').value,
        verdura: document.getElementById('verdurasInput').value,
    };

    try {
        await postDB(formData);

        // Muestra el tooltip de éxito
        const tooltip = new bootstrap.Tooltip(submitButton, {
            title: '¡FORMULARIO ENVIADO!',
        });
        tooltip.show();
        
        setTimeout(() => {
            tooltip.dispose(); 
        }, 5000);

        setTimeout(() => {
        }, 3000);
    } catch (error) {
        console.error('Error al registrar:', error);
    }

});






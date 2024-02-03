//TIPO DE CHORIS
getTipoChori(showTipoChori);

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

    listaTipoChoris.forEach((tipoChori, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index + 1;
        optionElement.textContent = tipoChori;
        selectElement.appendChild(optionElement);
    });

    selectContainer.appendChild(selectElement);
    mainContainer.appendChild(selectContainer);
    tipoChoriContent.appendChild(mainContainer);
}

function getRolSelectorChoris(tipoChori) {
    const optionElement = document.createElement('option');
    optionElement.className = 'option';
    optionElement.value = tipoChori.IdChori;
    optionElement.innerText = tipoChori.TipoDeChori;
    return optionElement;
}

//----------------------------------------------------------------

getRol(showRoles);


// Función para mostrar los roles en el contenido
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

    listaRoles.forEach((rol, index) => {
        const optionElement = document.createElement('option');
        optionElement.value = index + 1;
        optionElement.textContent = rol;
        selectElement.appendChild(optionElement);
    });

    selectContainer.appendChild(selectElement);
    mainContainer.appendChild(selectContainer);
    rolContent.appendChild(mainContainer);
}


// Función para obtener el selector de roles
function getRolSelector(rol) {
    const optionElement = document.createElement('option');
    optionElement.className = 'option';
    optionElement.value = rol.IdRol;
    optionElement.innerText = rol.NombreRol;
    return optionElement;
}
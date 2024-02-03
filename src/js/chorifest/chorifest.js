getTipoChori(showTipoChori);

function showTipoChori(tipoChori) {
    const tipoChoriContent = document.getElementById('tipoChori');
    const newTipoChori = new TipoChori(tipoChori);
    const template = getTemplate(newTipoChori);
    tipoChoriContent.append(template);
}

function getTemplate(tipoChori) {
    const divAboutMeContentDetail = document.createElement('div');
    divAboutMeContentDetail.className = 'form-group select';
    divAboutMeContentDetail.innerHTML = `                                       
        <div class="form-group select">
            <select>
                <option class="option" value="1">${tipoChori.TipoDeChori}</option>
            </select>
        </div>
    `;
    return divAboutMeContentDetail;
}

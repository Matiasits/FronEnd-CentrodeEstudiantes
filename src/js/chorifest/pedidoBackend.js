function getTipoChori(show) {
    fetch("https://localhost:7222/tipoChori")
        .then((response) => response.json())
        .then((json) => show(json))
        .catch((error) => console.error('Error al obtener los tipos de choris:', error));
}

function getRol(show) {
    fetch("https://localhost:7222/rol")
        .then((response) => response.json())
        .then((json) => show(json))
        .catch((error) => console.log("Error al obtener los roles", error));
}
function getTipoChori(show) {
    fetch("https://localhost:7222/src/template/chorifest.html") // URL corregida
      .then((response) => response.json() )
      .then((listaTipoChoris) => {
        listaTipoChoris.forEach((tipoChori) => {
          console.log(tipoChori);
          show(tipoChori);
        });
      })
      .catch((error) => console.error('Error al obtener los tipos de choris:', error));
  };
  
  function getRol(show) {
    fetch("https://localhost:7222/Chotifest")
      .then((response) => response.json())
      .then((json) => {
        // Evitar el uso de eval() por motivos de seguridad
        try {
          const rol = JSON.parse(json);
          show(rol);
        } catch (error) {
          console.error('Error al parsear el JSON:', error);
        }
      })
      .catch((error) => console.log(JSON.stringify(error)));
  };
  

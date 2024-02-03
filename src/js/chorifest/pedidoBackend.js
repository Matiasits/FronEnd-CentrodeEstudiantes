function getTipoChori(show) {
  fetch("https://localhost:7222/tipoChori")
      .then((response) => response.json())
      .then((tipoChori) => {
          console.log(tipoChori);
          show(tipoChori);
      })
      .catch((error) => console.error('Error al obtener los tipos de choris:', error));
};


  function getRol(show) {
    fetch("https://localhost:7222/rol")
      .then((response) => response.json())
      .then((listaRoles) => {
          console.log(listaRoles);
          show(listaRoles);
        })
      
      .catch((error) => console.log("Error al obtener los roles",error));
  };
  

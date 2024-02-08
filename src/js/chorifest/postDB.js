async function postDB(formData) {
    try {
        const response = await fetch("https://localhost:7222/api/ChoriPanUsuario", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tipoChoriId: formData.idTipoChori,
                verdura: formData.verdura,
                pan: formData.tipoPan,
                aderezo: formData.aderezo,
                nombreCompleto: formData.nombreCompleto,
                correoElectronico: formData.email,
                telefono: formData.telefono,
                idRol: formData.idRol,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error al enviar datos al servidor: ${response.status}`);
        }

        const data = await response.json();
        console.log('Registro exitoso:', data);
        // Puedes realizar acciones adicionales después de un registro exitoso
    } catch (error) {
        console.error('Error al registrar:', error);
        // Puedes manejar el error de alguna manera
    }
}




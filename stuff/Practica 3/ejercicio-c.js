console.log("Ejercicio C");

function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente.");
        }, 5000);
    });
}

async function obtenerDatos() {
    const response = await simularPeticionAPI()
    console.log(response);
}

obtenerDatos();

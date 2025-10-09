console.log('Ejercicio B');

function verificarUsuario(usuario) {
    return new Promise(
        (resolve, reject) => {
            if (usuario === 'admin')
                return resolve('Acceso condedido');
            return reject('Acceso denegado')
        }
    );
}

// Usa .then() y .catch() para manejar el resultado
verificarUsuario("admin")
    .then(res => console.log(res))  // Acceso concedido
    .catch(err => console.error(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err)); // Acceso denegado
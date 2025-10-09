console.log({username: "ryan", score: 70.4});

let tiposDeDatos = {
    string: [
        '"Hello World"',
        "'Hello World'"
    ],
    number: [
        10000,
        -2.3
    ],
    array: [
        ['joe', 'ryan', 'martha'],
        [1, 2, 3],
        [true, false, true, false]
    ],
    object: [{
        username: 'ryan',
        score: 70.4,
        hours: 14,
        professional: true
    }]
}

console.log('hola');

// Funciones
function displayDataTypes() {
    let h1 = document.createElement('h1');
    h1.textContent = 'Tipos de Datos';
    document.body.appendChild(h1);

    let ul = document.createElement('ul');

    // Bucle for
    Object.entries(tiposDeDatos).forEach(
        ([tipo, valores]) => {
            // Variables

            let li = document.createElement('li');
            li.textContent = tipo[0].toUpperCase() + tipo.substring(1).toLowerCase();
            ul.appendChild(li);

            let innerLu = document.createElement('ul');
            valores.forEach(
                (ejemplo) => {
                    let innerLuLi = document.createElement('li');

                    // Condicional
                    innerLuLi.textContent = typeof ejemplo === 'string'
                        ? ejemplo : JSON.stringify(ejemplo);

                    innerLu.appendChild(innerLuLi);
                }
            )
            ul.appendChild(innerLu);
        }
    )

    document.body.appendChild(ul);
}

displayDataTypes();

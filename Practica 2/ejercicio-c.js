console.log("Ejercicio C");

const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

const luis = personas.find(
    persona => persona.nombre === "Luis"
)
console.log(luis);

personas.forEach(
    persona => {
        console.log(persona.nombre, persona.edad)
    }
)

const reduced = personas.reduce(
    (total, persona) => {
        total += persona.edad;
        return total;
    },
    0
)
console.log(reduced);

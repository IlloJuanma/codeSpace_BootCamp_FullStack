const objects = [
    {
        titulo: "Friends",
        tipo: "Serie"
    },
    {
        titulo: "The Office",
        tipo: "Serie"
    },
    {
        titulo: "Gladiator",
        tipo: "Pelicula"
    },
    {
        titulo: "Inception",
        tipo: "Documental"
    },
    {
        titulo: "Sons of Anarchy",
        tipo: "Serie"
    }
];
function getType(titulo) {
    const object = objects.find(obj => obj.titulo === titulo);
    return `${object.titulo} es una ${object.tipo}`;
}
console.log(getType("Sons of Anarchy"));
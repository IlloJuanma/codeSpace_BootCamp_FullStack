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
    },
    {
        titulo: "The Godfather",
        tipo: "Pelicula"
    },
    {
        titulo: "Breaking Bad",
        tipo: "Serie"
    },
    {
        titulo: "The Last Dance",
        tipo: "Documental"
    },
    {
        titulo: "Schindler's List",
        tipo: "Pelicula"
    },
    {
        titulo: "Planet Earth",
        tipo: "Documental"
    },
    {
        titulo: "Stranger Things",
        tipo: "Serie"
    },
    {
        titulo: "Interstellar",
        tipo: "Pelicula"
    },
    {
        titulo: "Black Mirror",
        tipo: "Serie"
    },
    {
        titulo: "Cosmos",
        tipo: "Documental"
    },
    {
        titulo: "The Dark Knight",
        tipo: "Pelicula"
    }
];

function addId(objects){
    return objects.map((object, index) =>{
        return { id: index, ...object };
    });
}
const updateObjects = addId(objects);
console.log(updateObjects);
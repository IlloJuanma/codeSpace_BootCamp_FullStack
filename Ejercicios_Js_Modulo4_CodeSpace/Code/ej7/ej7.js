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

function addMovie(objects,nombre, categoria){
    const newMovie ={
        titulo: nombre,
        tipo: categoria
    };
    if(objects.find(obj => obj.titulo == newMovie.titulo)){
        return alert("Error, no se puede añadir")
    }else{
        objects.push(newMovie);
        return objects;
    }

    // objects.push(newMovie);
    // return objects;
}
console.log(addMovie(objects,"Arcane", "serie"));
const url = "https://pokeapi.co/api/v2/pokemon";

async function getPokemons(nombre){
    try{
        const reponse = await fetch(url + `/${nombre}`);
        const data = await reponse.json();
        return data;
    }catch(e){
        console.error("Error al obtener los datos:", e);
    }
}

async function mostrarPokemon(nombre){
    const pokemon = await getPokemons(nombre);
    console.log(pokemon);
}

mostrarPokemon("pikachu");
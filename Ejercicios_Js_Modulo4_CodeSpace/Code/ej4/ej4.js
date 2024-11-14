const array = [14,0,1,55,16,0,5,22,4,0];

function borrarCeros(array){
    return array.filter(num => num!== 0);
}

console.log(borrarCeros(array));
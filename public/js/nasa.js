function getAPOD(){
    //url de la api para obtener la imagen del dia
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/ditto`;

    //realizar la solucitud utilizando fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data=>{
            document.getElementById('imagenNasa').src= data.sprites.front_default;
            console.log(data.sprites.front_default);
        })
}

function getPikachu(){
    //url de la api para obtener la imagen de Pikachu
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/pikachu`;

    //realizar la solucitud utilizando fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data=>{
            document.getElementById('imagenpikaku').src= data.sprites.front_default;
            console.log(data.sprites.front_default);
        })
}

getAPOD();
getPikachu();
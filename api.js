// document.getElementById('fetchPokemon').addEventListener('click', fetchPokemon);

// function fetchPokemon() {
//     const pokemonId = document.getElementById('pokemonId').value;
    
//     if (!pokemonId) {
//         alert('Please enter a valid Pokémon ID');
//         return;
//     }

//     const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Pokémon not found');
//             }
//             return response.json();
//         })
//         .then(pokemon => {
//             displayPokemon(pokemon);
//         })
//         .catch(error => {
//             alert(error.message);
//             document.getElementById('pokemonContainer').innerHTML = '';
//         });
// }

// function displayPokemon(pokemon) {
//     const pokemonContainer = document.getElementById('pokemonContainer');
    
//     pokemonContainer.innerHTML = `
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//         <h2>${pokemon.name.toUpperCase()}</h2>
//         <p>Height: ${pokemon.height / 10} m</p>
//         <p>Weight: ${pokemon.weight / 10} kg</p>
//         <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
//     `;
// }

// Para la primera Pokédex
document.getElementById('fetchPokemon1').addEventListener('click', function() {
    fetchPokemon('pokemonId1', 'pokemonContainer1');
});

// Para la segunda Pokédex
document.getElementById('fetchPokemon2').addEventListener('click', function() {
    fetchPokemon('pokemonId2', 'pokemonContainer2');
});

// Función reutilizable para obtener los datos del Pokémon
function fetchPokemon(pokemonIdInputId, pokemonContainerId) {
    const pokemonId = document.getElementById(pokemonIdInputId).value;

    if (!pokemonId) {
        alert('Please enter a valid Pokémon ID');
        return;
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(pokemon => {
            displayPokemon(pokemon, pokemonContainerId);
        })
        .catch(error => {
            alert(error.message);
            document.getElementById(pokemonContainerId).innerHTML = '';
        });
}

// Función para mostrar los detalles del Pokémon en el contenedor adecuado
function displayPokemon(pokemon, pokemonContainerId) {
    const pokemonContainer = document.getElementById(pokemonContainerId);

    pokemonContainer.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name.toUpperCase()}</h2>
        <p>Height: ${pokemon.height / 10} m</p>
        <p>Weight: ${pokemon.weight / 10} kg</p>
        <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    `;
}




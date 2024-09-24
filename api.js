document.getElementById('fetchPokemon').addEventListener('click', fetchPokemon);

function fetchPokemon() {
    const pokemonId = document.getElementById('pokemonId').value;
    
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
            displayPokemon(pokemon);
        })
        .catch(error => {
            alert(error.message);
            document.getElementById('pokemonContainer').innerHTML = '';
        });
}

function displayPokemon(pokemon) {
    const pokemonContainer = document.getElementById('pokemonContainer');
    
    pokemonContainer.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name.toUpperCase()}</h2>
        <p>Height: ${pokemon.height / 10} m</p>
        <p>Weight: ${pokemon.weight / 10} kg</p>
        <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    `;
}

// return a pokemon with the name
const getPokemonByName= async (name)=>{
    return new Promise((resolve, reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(response=>response.json())
        .then(data=>resolve(data))
    })
}

// return all pokemon's data
export const fetchPokemonsResouces= async (name)=>{
    return new Promise((resolve, reject)=>
    {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=964')
        .then(response=>response.json())
        .then(data=>{
            return Promise.all(data.results.map(async pokemon=>{
                let pokemonDetails = await getPokemonByName(pokemon.name); 
                return pokemonDetails
            }))
        })
        .then(data=>{
            resolve(data);
        })
    })
}
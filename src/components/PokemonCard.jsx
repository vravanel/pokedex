const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemmonCard() {
    const pokemon = pokemonList[0];
    let imageElement = null;
    if (pokemon.imgSrc) {
        imageElement = <img src={pokemon.imgSrc} alt={pokemon.name} />;
     } else {
        imageElement = <p> ??? </p>;
     }
    return <figure> 
        {imageElement}  
     <figcaption>{pokemon.name}</figcaption>
    </figure>
}

export default PokemmonCard;
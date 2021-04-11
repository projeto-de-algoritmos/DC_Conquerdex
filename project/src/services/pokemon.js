import api from './api';
import axios from 'axios';
class PokemonService {    
    async getPokemons(setPokemons, pokemonsToSort){
        const pokemons = [];
        const response = await api.get(`generation/1`);
        for(var pokemon of response.data.pokemon_species){
            let poke_gen = await axios.get(pokemon.url);
            let poke_info = await axios.get(poke_gen.data.varieties[0].pokemon.url);
            console.log(poke_info.data);
            pokemons.push(poke_info.data);
        }
        setPokemons(pokemons);
        pokemonsToSort.setPokemonArray(pokemons);
    }
}

const pokemonService = new PokemonService();
Object.freeze(pokemonService);
export default pokemonService;
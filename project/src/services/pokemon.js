import api from './api';
import axios from 'axios';
class PokemonService {
    constructor(){}
    
    async getPokemons(offset, limit, setPokemons){
        let params = `offset=${offset}&limit=${limit}`
        let pokemons = [];
        let response = await api.get(`pokemon?${params}`);
        for(var pokemon of response.data.results){
            let poke_info = await axios.get(pokemon.url);
            pokemons.push(poke_info.data);
        }
        setPokemons(pokemons);
    }
}

const pokemonService = new PokemonService();
Object.freeze(pokemonService);
export default pokemonService;
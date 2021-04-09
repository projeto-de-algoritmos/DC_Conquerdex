import api from './api';
class PokemonService {
    constructor(){}
    
    async getPokemons(){
        let response = await api.get('pokemon');
        console.log(response);
        return response;
    }
}

const pokemonService = new PokemonService();
Object.freeze(pokemonService);
export default pokemonService;
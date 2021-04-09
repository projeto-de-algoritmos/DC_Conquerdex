import pokemonService from '../../services/pokemon';
import {
  Center,
  Flex,
  VStack,
  SimpleGrid,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
function App() {
  let pokemons = pokemonService.getPokemons();
  return (
    <>
    </>
  );
}

export default App;

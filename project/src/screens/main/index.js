import pokemonService from '../../services/pokemon';
import {
  Center,
  Flex,
  VStack,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
function App() {
  let pokemons = pokemonService.getPokemons(0, 20);
  return (
    <>
    <VStack height="100vh">
      <Center w="100vw" bg="tomato" h="8vh" align="center" color="white">
          <Text>CONQUERDEX</Text>
      </Center>
    </VStack>
    </>
  );
}

export default App;

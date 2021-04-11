import pokemonService from "./services/pokemon";
import util from "./utils/util";
import {
  Center,
  Flex,
  VStack,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    pokemonService.getPokemons(setPokemons);
  }, []);

  const renderType = (typeList) => {
    return typeList.map((type, index) => (
      <Box
        w="60px"
        bg={util.getColor(type.type.name)}
        align="center"
        borderRadius="10px"
        key={index}
      >
        <Center>
          <Text
            fontFamily="Bangers"
            textColor="white"
            fontSize="12px"
            fontWeight="light"
          >
            {type.type.name.toUpperCase()}
          </Text>
        </Center>
      </Box>
    ));
  };

  return (
    <>
      <VStack mb="100px">
        <HStack w="100%" bg="tomato" h="8vh">
          <Center w="100vw" align="center" color="white">
            <Text fontFamily="Bangers" fontSize="7xl">
              CONQUERDEX
            </Text>
          </Center>
        </HStack>
      </VStack>
      <VStack>
        <Text fontFamily="Bangers" fontSize="3xl">Como deseja ordenar sua Conquerdex?</Text>
        <RadioGroup d="flex" >
          <Radio value="1">
            <Text fontFamily="Bangers" mr="20px" fontSize="xl">Nome</Text>
          </Radio>
          <Radio value="2">
            <Text fontFamily="Bangers" mr="20px" fontSize="xl">Tipo</Text>
          </Radio>
          <Radio value="3">
            <Text fontFamily="Bangers" fontSize="xl">Id</Text>
          </Radio>
        </RadioGroup>
        <SimpleGrid columns={6} justifyContent="space-around">
          {pokemons.map((pokemon, index) => (
            <Box p="10px" key={index}>
              <Center
                w="220px"
                h="220px"
                bg="gray.200"
                borderRadius="10px"
                border="1px"
              >
                <VStack>
                  <img src={pokemon.sprites.front_default} />
                  <Text
                    fontFamily="Bangers"
                    textColor={util.getColor(pokemon.types[0].type.name)}
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Text>
                  <HStack>{renderType(pokemon.types)}</HStack>
                </VStack>
              </Center>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default App;

import pokemonService from '../../services/pokemon';
import util from '../../utils/util';
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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [pokemons, setPokemons] = useState([]);
  pokemonService.getPokemons(0, 50, setPokemons);

  const renderType = (typeList) => {
    // console.log(typeList);
    return typeList.map((type) => (
    <Box w="60px" bg={util.getColor(type.type.name)} align="center" borderRadius="10px">
        <Center>
            <Text fontFamily="Bangers" textColor="white" fontSize="12px" fontWeight="light">
              {type.type.name.toUpperCase()}
            </Text>
        </Center>
      </Box>
    ))
  }
  const renderPokemons = (pokemonsList) => {
    return pokemonsList.map((pokemon)=> (
      <Box
      p="10px">
     <Center
        w="220px"
        h="220px"
        bg="gray.200"
        borderRadius="10px"
        border="1px"
      >
        <VStack>

        <img src={pokemon.sprites.front_default}/>
        <Text fontFamily="Bangers" textColor={util.getColor(pokemon.types[0].type.name)}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
          <HStack>
            {renderType(pokemon.types)}
          </HStack>
        </VStack>
      </Center>
      </Box>
    ));
  }
  
  const renderLine = (pokemons) => {
    // console.log(pokemons.slice((0*5), (0*5)+4));
    return [0, 1, 2, 3, 4,5,6,7].map((line) => (
      <HStack justifyContent="space-around">
        {renderPokemons(pokemons.slice((line*5), (line*5)+5))}
      </HStack>
    ))
  }
  return (
    <>
      <VStack mb="100px">
        <HStack w="100vw" bg="tomato" h="8vh">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button}>
                  {isOpen ? "Close" : "Open"}
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem onClick={() => alert("Kagebunshin")}>
                    Create a Copy
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          <Center w="100vw" align="center" color="white">
            <Text fontFamily="Bangers" fontSize="7xl">
              CONQUERDEX
            </Text>
          </Center>
        </HStack>
      </VStack>
      <VStack>
          {renderLine(pokemons)}
      </VStack>
    </>
  );
}

export default App;

// import pokemonService from '../../services/pokemon';
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
function App() {
  // let pokemons = pokemonService.getPokemons();
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
        <HStack justifyContent="space-around">
          <Center
            w="200px"
            h="200px"
            bg="gray.200"
            borderRadius="10px"
            border="1px"
          >
            <VStack>
              <Box w="100px" h="100px" bg="red" />
              <HStack>
                <Box w="10px" h="10px" bg="green" />
                <Box w="10px" h="10px" bg="blue" />
              </HStack>
            </VStack>
          </Center>
        </HStack>
      </VStack>
    </>
  );
}

export default App;

import pokemonService from "./services/pokemon";
import util from "./utils/util";
import {
  Center,
  VStack,
  Box,
  SimpleGrid,
  Text,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DivideAndConquer from "./DivideAndConquer";
import { ReactComponent as Pokeball } from "./assets/pokeball.svg";
import ReactAudioPlayer from "react-audio-player";
import pokemonMusic from "./assets/pokemon_tema.mp3";
import volumeUp from "./assets/volume_up_white.svg";
import volumeOff from "./assets/volume_off_white.svg";
import CustomSpinner from "./utils/CustomSpinner";

const dc = new DivideAndConquer();

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    pokemonService.getPokemons(setPokemons, dc, setLoading);
  }, []);

  const orderPokemons = (index) => {
    setValue(index);
    switch (index) {
      case "1":
        dc.sortPokemon(0, 150, setPokemons, "name").then((orderedPokemons) =>
          setPokemons(orderedPokemons)
        );
        break;
      case "2":
        dc.sortPokemon(0, 150, setPokemons, "types").then((orderedPokemons) =>
          setPokemons(orderedPokemons)
        );
        break;
      case "3":
        dc.sortPokemon(0, 150, setPokemons, "id").then((orderedPokemons) =>
          setPokemons(orderedPokemons)
        );
        break;
      default:
        break;
    }
  };

  const renderType = (typeList) => {
    return typeList?.map((type, index) => (
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
      <CustomSpinner loading={loading} />
      <VStack mb="100px">
        <HStack w="100%" bg="tomato" h="8vh" px="100px">
          <Button
            onClick={() => setMuted(!muted)}
            bg={muted ? "red" : "green.400"}
            h="50px"
            borderRadius="25px"
            shadow="dark-lg"
            disabled={loading}
          >
            <ReactAudioPlayer
              src={pokemonMusic}
              autoPlay={true}
              volume={0.01}
              loop={true}
              muted={muted}
            />
            {muted ? <img src={volumeOff} /> : <img src={volumeUp} />}
          </Button>
          <Center w="100vw" align="center" color="white">
            <Text fontFamily="Bangers" fontSize="7xl">
              CONQUERDEX
            </Text>
          </Center>
        </HStack>
      </VStack>
      <VStack>
        <HStack>
          <Text fontFamily="Bangers" fontSize="3xl">
            Como deseja ordenar sua Conquerdex?
          </Text>
        </HStack>
        <RadioGroup d="flex" onChange={orderPokemons} value={value}>
          <Radio value="1">
            <Text fontFamily="Bangers" mr="20px" fontSize="xl">
              Nome
            </Text>
          </Radio>
          <Radio value="2">
            <Text fontFamily="Bangers" mr="20px" fontSize="xl">
              Tipo
            </Text>
          </Radio>
          <Radio value="3">
            <Text fontFamily="Bangers" fontSize="xl">
              Id
            </Text>
          </Radio>
        </RadioGroup>
        <SimpleGrid columns={6} justifyContent="space-around">
          {pokemons?.map((pokemon, index) => (
            <Box p="10px" key={index}>
              <Box
                alignSelf="flex-start"
                justifySelf="flex-start"
                position="absolute"
                p="5px"
              >
                <Pokeball fill={util.getColor(pokemon?.types[0].type.name)} />
              </Box>
              <Center
                w="220px"
                h="220px"
                bg="gray.100"
                borderRadius="10px"
                border="1px"
              >
                <VStack>
                  <img src={pokemon?.sprites.front_default} />
                  <Text
                    fontFamily="Bangers"
                    textColor={util.getColor(pokemon?.types[0].type.name)}
                  >
                    {pokemon?.name.charAt(0).toUpperCase() +
                      pokemon?.name.slice(1)}
                  </Text>
                  <HStack>{renderType(pokemon?.types)}</HStack>
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

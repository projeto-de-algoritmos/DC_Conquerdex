import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

function CustomSpinner({ loading }) {
  return (
    <>
      {loading ? (
        <Flex
          position="absolute"
          top="0"
          left="0"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100vw"
          bg="#35353540"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            zIndex="10"
          />
        </Flex>
      ) : (
        <Box />
      )}
    </>
  );
}

export default CustomSpinner;

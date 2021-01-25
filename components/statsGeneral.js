import { Box, Center, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function statGeneral() {

  const [ancho, setAncho] = useState(); 

  useEffect(() => {
    setAncho(screen.width);
  },[]);

  return (
    <Box h="24px" w={ancho-ancho*0.2} bg="blue.200" borderRadius="20px">
      <Center>
        <Text fontStyle="italic" fontWeight="1000">Mensaje de la barra inferior: Aqui se colocará la información de interés sobre las Bicicletas</Text>
      </Center>
    </Box>
  );
}
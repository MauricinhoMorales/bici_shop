import { Box, Center, Text, Flex, Stack, Image, Spacer, Button, HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ItemCompra({
  codigo,
  nombre,
  clase,
  tipo,
  descripcion,
  precio,
  cantidad
}) {

  const [ancho, setAncho] = useState("");
  const [altura, setAltura] = useState("");

  const Router = useRouter();

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  const handleClick = () => {
    console.log(`Se clickeo el item ${nombre}`)
    Router.replace(`compras/${codigo}`);
  };

  return (
    <Box as="button" h="66px" w={ancho * 0.4} borderWidth="2px" borderRadius="10px" onClick={handleClick}>
      <HStack direction="row">
        {clase === "Bicicleta" ? (
          <Image src="../bicicleta.png" w={ancho * 0.055} h={altura * 0.08} padding="5px" />
        ) : (clase === "Accesorio" ?
          (<Image src="../accesorio.png" w={ancho * 0.055} h={altura * 0.08} padding="5px"/>) :
          (<Image src="../repuesto.png" w={ancho * 0.055} h={altura * 0.08} padding="5px" />)
          )}
        <Stack direction="column">
          <Text fontWeight="1000" fontSize="15px" w={ancho * 0.2}>NOMBRE: {nombre}</Text>
          <Text fontWeight="1000" fontSize="15px" w={ancho * 0.2}>TIPO: {tipo}</Text>
        </Stack>
        <Stack direction="column">
          <Text fontWeight="1000" fontSize="15px" w={ancho * 0.1}>PRECIO: ${precio}</Text>
          <Text fontWeight="1000" fontSize="15px" w={ancho * 0.1}>DISPONIBLES: {cantidad}</Text>
        </Stack>
      </HStack>
    </Box>
  );
}
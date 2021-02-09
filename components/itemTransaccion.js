import { Box, Center, Text, Flex, Stack, Image, Spacer, Button, HStack, Icon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LogIn, LogOut } from 'react-feather';

export default function ItemCompra({
  accion,
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

  return (
    <Box as="button" h="48px" w={ancho * 0.8} borderWidth="2px" borderRadius="10px">
      <HStack>
        {accion == "Publicar" ? (
          <>
            <Icon as={LogIn} color="blue.500" h="22px" w="22px" marginLeft="10px" />
            <Text fontWeight="1000" fontSize="15px" w={ancho * 0.1}>ACCIÓN: {accion}</Text>
            <Text fontWeight="1000" fontSize="15px" w={ancho * 0.2}>NOMBRE: {nombre}</Text>
            <Text fontWeight="1000" fontSize="15px" w={ancho * 0.2}>TIPO: {tipo}</Text>
            <Text fontWeight="1000" fontSize="15px" w={ancho * 0.1}>PRECIO: ${precio}</Text>
            <Text fontWeight="1000" fontSize="15px" w={ancho * 0.15}>DISPONIBLES: {cantidad}</Text>
          </>
        ) : (
            <>
              <Icon as={LogOut} color="green.500" h="22px" w="22px" marginLeft="10px" />
              <Text fontWeight="1000" fontSize="15px" w={ancho * 0.1}>ACCIÓN: {accion}</Text>
              <Text fontWeight="1000" fontSize="15px" w={ancho * 0.2}>NOMBRE: {nombre}</Text>
              <Text fontWeight="1000" fontSize="15px" w={ancho * 0.2}>TIPO: {tipo}</Text>
              <Text fontWeight="1000" fontSize="15px" w={ancho * 0.1}>PRECIO: ${precio}</Text>
              <Text fontWeight="1000" fontSize="15px" w={ancho * 0.15}>PAGO TOTAL: ${cantidad*precio}</Text>
            </>
          )}
      </HStack>
    </Box>
  );
}
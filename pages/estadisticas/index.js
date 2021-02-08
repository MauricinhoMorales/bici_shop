import { Flex, VStack, Stack, Text, Box, Center, Button, cookieStorageManager } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StatGeneral from '../../components/statsGeneral'

export default function Estadisticas() {

  const [altura, setAltura] = useState();
  const [ancho, setAncho] = useState();

  const Router = useRouter();

  const handleClickInventario = () => {
    Router.replace('/estadisticas/inventario');
  };

  const handleClickVentas = () => {
    Router.replace('/estadisticas/ventas');
  };

  const handleClickTransacciones = () => {
    Router.replace('/estadisticas/transacciones');
  };

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  return (
    <>
      <Head>
        <title>Estadisticas</title>
      </Head>
      <Flex w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="0" align="center">
          <Text fontSize='5xl' fontWeight="1000" fontFamily="inherit" textColor="black">ESTADISTICAS</Text>
          <Center>
            <VStack direction="column" spacing="10px" >
              <Button width={ancho * 0.8} height={altura * 0.2} bgColor={process.env.COLOR_BOTON} borderRadius="20px" onClick={handleClickInventario}>
                <Text fontSize='5xl' fontStyle="italic" fontFamily="fantasy" color={process.env.COLOR_LETRAS_BOTON}>INVENTARIO</Text>
              </Button>
              <Button width={ancho * 0.8} height={altura * 0.2} bgColor={process.env.COLOR_BOTON} borderRadius="20px" onClick={handleClickVentas}>
                <Text fontSize='5xl' fontStyle="italic" fontFamily="fantasy" color={process.env.COLOR_LETRAS_BOTON}>VENTAS TOTALES</Text>
              </Button>
              <Button width={ancho*0.8} height={altura*0.2} bgColor={process.env.COLOR_BOTON} borderRadius="20px" onClick={handleClickTransacciones}>
                <Text fontSize='5xl' fontStyle="italic" fontFamily="fantasy" color={process.env.COLOR_LETRAS_BOTON}>TRANSACCIONES</Text>
                </Button>
            </VStack>
          </Center>
          <Box h="20px" />
          <StatGeneral />
        </Stack>
      </Flex>
    </>
  );
}

import { color, Flex, Stack, Text, Box, InputGroup, Input, InputRightElement, InputLeftElement, Button, Switch, Icon, Center, Grid, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import Head from 'next/head';
import ItemTransaccion from '../../../components/itemTransaccion';

export default function Estadisticas_Transacciones() {

  const [lista, setLista] = useState([]);
  const [ancho, setAncho] = useState("");
  const [altura, setAltura] = useState("");

  const [publicaciones, setPublicaciones] = useState("false");
  const [compras, setCompras] = useState("false");

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  useEffect(() => {
    fetch("../transacciones.json").then(
      response => response.json()
    ).then(
      datos => {
        setLista(datos)
      }
    )
  })

  return (
    <>
      <Head>
        <title>Transacciones</title>
      </Head>
      <Flex w="100%" h="100%" direction="column">
        <Stack flex={1} padding="2em" spacing="12px" align="center" direction="column">
          <Text fontSize='4xl' fontWeight="1000" fontFamily="inherit" textColor="black" alignSelf="center">TRANSACCIONES</Text>
          <Stack direction="row">
            <Text>Publicaciones</Text>
            <Switch colorScheme="yellow" value={publicaciones} onChange={() => setPublicaciones(publicaciones == "true" ? "false" : "true")} />
            <Box w="8px" />
            <Text>Compras</Text>
            <Switch colorScheme="yellow" value={compras} onChange={() => setCompras(compras == "true" ? "false" : "true")} />
          </Stack>
          {lista.filter(item =>
            ((item.accion == "Publicar" && publicaciones == "true") || (item.accion == "Comprar" && compras == "true") || (publicaciones == "false" && compras == "false"))).map((item) => {
                return (
                  <ItemTransaccion
                    key={item.codigo}
                    accion={item.accion}
                    codigo={item.codigo}
                    clase={item.clase}
                    nombre={item.nombre}
                    tipo={item.tipo}
                    precio={item.precio}
                    cantidad={item.cantidad}
                    descripcion={item.descripcion} />
                );
              })}
        </Stack>
      </Flex>
    </>
  );
}
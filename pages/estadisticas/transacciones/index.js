import { color, Flex, Stack, Text, Box, InputGroup, Input, InputRightElement, InputLeftElement, Button, Switch, Icon, Center, Grid, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import Head from 'next/head';
import ItemTransaccion from '../../../components/itemTransaccion';

export default function Estadisticas_Transacciones() {

  const lista = [
    {
      "accion": "Publicar",
      "codigo": "COD-1",
      "nombre": "Bicicleta Adidas TERREX",
      "clase": "Bicicleta",
      "tipo": "Bicicleta de Montaña",
      "precio": 20.50,
      "cantidad": 20,
      "descripcion": "Descripcion COD-1",
    },
    {
      "accion": "Publicar",
      "codigo": "COD-2",
      "nombre": "Bicicleta Airbone",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Acrobática",
      "precio": 17.85,
      "cantidad": 25,
      "descripcion": "Descripcion COD-2",
    },
    {
      "accion": "Comprar",
      "codigo": "COD-3",
      "nombre": "Casco MX Ultra",
      "clase": "Accesorio",
      "tipo": "Casco",
      "precio": 5.00,
      "cantidad": 12,
      "descripcion": "Descripcion COD-3",
    },
    {
      "accion": "Publicar",
      "codigo": "COD-4",
      "nombre": "Botella  Adidas Five Ten",
      "clase": "Accesorio",
      "tipo": "Termo",
      "precio": 2.99,
      "cantidad": 30,
      "descripcion": "Descripcion COD-4",
    },
    {
      "accion": "Comprar",
      "codigo": "COD-5",
      "nombre": "Ruedas BBB",
      "clase": "Repuesto",
      "tipo": "Rueda",
      "precio": 9.99,
      "cantidad": 30,
      "descripcion": "Descripcion COD-5",
    },
    {
      "accion": "Publicar",
      "codigo": "COD-6",
      "nombre": "Bicicleta Acrobática Basso",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Acrobática",
      "precio": 27.50,
      "cantidad": 5,
      "descripcion": "Descripcion COD-6",
    },
    {
      "accion": "Publicar",
      "codigo": "COD-7",
      "nombre": "Bicicleta BioLite",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Urbana",
      "precio": 14.75,
      "cantidad": 20,
      "descripcion": "Descripcion COD-7",
    },
    {
      "accion": "Comprar",
      "codigo": "COD-8",
      "nombre": "Manillas CAMPZ",
      "clase": "Repuesto",
      "tipo": "Manilla",
      "precio": 6.60,
      "cantidad": 10,
      "descripcion": "Descripcion COD-8",
    }
  ]

  const [ancho, setAncho] = useState("");
  const [altura, setAltura] = useState("");

  const [publicaciones, setPublicaciones] = useState("false");
  const [compras, setCompras] = useState("false");

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

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
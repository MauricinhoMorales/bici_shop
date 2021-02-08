import { color, Flex, Stack, Text, Box, InputGroup, Input, InputRightElement, InputLeftElement, Button, Switch, Icon, Center, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import Head from 'next/head';
import ItemCompra from '../../components/ItemCompra';

export default function Compras() {

  const lista = [
    {
      "codigo": "COD-1",
      "nombre": "Bicicleta Adidas TERREX",
      "clase": "Bicicleta",
      "tipo": "Bicicleta de Montaña",
      "precio": 20.50,
      "cantidad": 20,
      "descripcion": "Descripcion COD-1",
    },
    {
      "codigo": "COD-2",
      "nombre": "Bicicleta Airbone",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Acrobática",
      "precio": 17.85,
      "cantidad": 25,
      "descripcion": "Descripcion COD-2",
    },
    {
      "codigo": "COD-3",
      "nombre": "Casco MX Ultra",
      "clase": "Accesorio",
      "tipo": "Casco",
      "precio": 5.00,
      "cantidad": 12,
      "descripcion": "Descripcion COD-3",
    },
    {
      "codigo": "COD-4",
      "nombre": "Botella  Adidas Five Ten",
      "clase": "Accesorio",
      "tipo": "Termo",
      "precio": 2.99,
      "cantidad": 30,
      "descripcion": "Descripcion COD-4",
    },
    {
      "codigo": "COD-5",
      "nombre": "Ruedas BBB",
      "clase": "Repuesto",
      "tipo": "Rueda",
      "precio": 9.99,
      "cantidad": 30,
      "descripcion": "Descripcion COD-5",
    },
    {
      "codigo": "COD-6",
      "nombre": "Bicicleta Acrobática Basso",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Acrobática",
      "precio": 27.50,
      "cantidad": 5,
      "descripcion": "Descripcion COD-6",
    },
    {
      "codigo": "COD-7",
      "nombre": "Bicicleta BioLite",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Urbana",
      "precio": 14.75,
      "cantidad": 20,
      "descripcion": "Descripcion COD-7",
    },
    {
      "codigo": "COD-8",
      "nombre": "Manillas CAMPZ",
      "clase": "Repuesto",
      "tipo": "Manilla",
      "precio": 6.60,
      "cantidad": 10,
      "descripcion": "Descripcion COD-8",
    },
    {
      "codigo": "COD-9",
      "nombre": "Guantes Adidas",
      "clase": "Accesorio",
      "tipo": "Guantes",
      "precio": 4.30,
      "cantidad": 20,
      "descripcion": "Descripcion COD-9",
    },
    {
      "codigo": "COD-10",
      "nombre": "Guantes Centurion",
      "clase": "Accesorio",
      "tipo": "Guantes",
      "precio": 3.00,
      "cantidad": 35,
      "descripcion": "Descripcion COD-10",
    },
    {
      "codigo": "COD-11",
      "nombre": "Frenos Columbia",
      "clase": "Repuesto",
      "tipo": "Frenos",
      "precio": 8.90,
      "cantidad": 15,
      "descripcion": "Descripcion COD-11",
    },
    {
      "codigo": "COD-12",
      "nombre": "Bicicleta AbsoluteBLACK",
      "clase": "Bicicleta",
      "tipo": "Bicicleta Acrobática",
      "precio": 30.00,
      "cantidad": 7,
      "descripcion": "Descripcion COD-12",
    }
  ]

  const [ancho, setAncho] = useState("");
  const [altura, setAltura] = useState("");
  const [buscador, setBuscador] = useState("");

  const [bicicleta, setBicicleta] = useState("false");
  const [accesorio, setAccesorio] = useState("false");
  const [repuesto, setRepuesto] = useState("false");

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  return (
    <>
      <Head>
        <title>Compras</title>
      </Head>
      <Flex w="100%" h="100%">
        <Stack flex={1} padding="2em" spacing="12px" align="center" direction="column">
          <Center>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Buscar Articulo . . ."
              w={ancho * 0.3}
              value={buscador}
              onChange={(value) => setBuscador(value.target.value)}
            />
          </InputGroup>
          </Center>
          <Stack direction="row">
            <Text>Bicicletas</Text>
            <Switch colorScheme="yellow" value={bicicleta} onChange={() => setBicicleta(bicicleta == "true" ? "false" : "true")} />
            <Box w="8px" />
            <Text>Accesorios</Text>
            <Switch colorScheme="yellow" value={accesorio} onChange={() => setAccesorio(accesorio == "true" ? "false" : "true")} />
            <Box w="8px" />
            <Text>Repuestos</Text>
            <Switch colorScheme="yellow" value={repuesto} onChange={() => setRepuesto(repuesto == "true" ? "false" : "true")} />
          </Stack>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          {lista.filter(item => (item.nombre.includes(buscador) || item.tipo.includes(buscador)) &&
            ((item.clase == "Bicicleta" && bicicleta == "true") || (item.clase == "Accesorio" && accesorio == "true") ||
              (item.clase == "Repuesto" && repuesto == "true") || (bicicleta == "false" && accesorio == "false" && repuesto == "false"))).map((item) => {
                return (
                  <ItemCompra
                    key={item.codigo}
                    codigo={item.codigo}
                    clase={item.clase}
                    nombre={item.nombre}
                    tipo={item.tipo}
                    precio={item.precio}
                    cantidad={item.cantidad}
                    descripcion={item.descripcion} />
                );
              })}
              </Grid>
        </Stack>
      </Flex>
    </>
  );
}
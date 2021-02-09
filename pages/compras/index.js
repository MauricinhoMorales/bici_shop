import { color, Flex, Stack, Text, Box, InputGroup, Input, InputRightElement, InputLeftElement, Button, Switch, Icon, Center, Grid, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useStateIfMounted } from "use-state-if-mounted";
import { SearchIcon } from '@chakra-ui/icons'
import Head from 'next/head';
import ItemCompra from '../../components/ItemCompra';
import PubSub from 'pubsub-js'

export default function Compras() {

  var MY_TOPIC = "Hola";

  const [lista, setLista] = useState([]);

  const [ancho, setAncho] = useState("");
  const [altura, setAltura] = useState("");
  const [buscador, setBuscador] = useState("");

  const [bicicleta, setBicicleta] = useState("false");
  const [accesorio, setAccesorio] = useState("false");
  const [repuesto, setRepuesto] = useState("false");

  useEffect(() => {
    fetch("inventario.json").then(
      response => response.json()
    ).then(
      datos => {
        setLista(datos)
      }
    )
  })

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  useEffect(() => {
    const token = PubSub.subscribe('Publicacion', function (msg, data) {
      console.log('Hola soy Inventario, Recibi una publicacion:');
      console.log(msg, data);
      //AQUI DEBERIA ACTUALIZARSE EL ARCHIVO JSON DE INVENTARIO

      return () => {
        PubSub.unsubscribe(token);
      };
    })
  }, [])

  useEffect(() => {
    const token = PubSub.subscribe('Compra', function (msg, data) {
      console.log('Hola soy Inventario, Recibi una Compras');
      console.log(msg, data);
      //AQUI DEBERIA ACTUALIZARSE EL ARCHIVO JSON DE INVENTARIO
      
      return () => {
        PubSub.unsubscribe(token);
      };
    })
  }, [])

  return (
    <>
      <Head>
        <title>Compras</title>
      </Head>
      <Flex w="100%" h="100%" direction="column">
        <Stack flex={1} padding="2em" spacing="5px" align="center" direction="column">
          <Text fontSize='5xl' fontWeight="1000" fontFamily="inherit" textColor="black">COMPRAR</Text>
          {/* <Button onClick={() => {
            setLista([...lista, {
              "codigo": "COD-13",
              "nombre": "Bicicleta Nike Solution",
              "clase": "Bicicleta",
              "tipo": "Bicicleta de Montaña",
              "precio": 20.00,
              "cantidad": 10,
              "descripcion": "Descripcion COD-13",
            }]);
          }}> Clickea </Button> */}
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
                (item.clase == "Repuesto" && repuesto == "true") || (bicicleta == "false" && accesorio == "false" && repuesto == "false")) && (item.cantidad!=0)).map((item) => {
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
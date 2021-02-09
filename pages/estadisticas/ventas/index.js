import {
  Flex,
  VStack,
  Stack,
  Text,
  Box,
  Center,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  Spacer
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { ArrowRight, Minus, DollarSign } from 'react-feather'

export default function Estadisticas_Ventas() {

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
      "tipo": "Ruedas",
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
  const [altura, setAltura] = useState("");
  const [ancho, setAncho] = useState("");

  const [tiposBicicleta, setTiposBicicleta] = useState(["Bicicleta de Montaña", "Bicicleta Acrobática", "Bicicleta de Ruta", "Bicicleta Híbrida", "Bicicleta Urbana", "Bicicleta de Turismo", "Bicicleta Playera", "Otra"]);
  const [tiposAccesorio, setTiposAccesorio] = useState(["Casco", "Guantes", "Lentes", "Termo", "Rodilleras", "Coderas", "Dispositivos", "Otro"]);
  const [tiposRepuesto, setTiposRepuesto] = useState(["Ruedas", "Manilla", "Silla", "Cadena","Piñones", "Radios", "Frenos", "Otro"]);

  const [TotalBicicletas, setTotalBicicletas] = useState(0);
  const [TotalAccesorios, setTotalAccesorios] = useState(0);
  const [TotalRepuestos, setTotalRepuestos] = useState(0);

  const Router = useRouter();

  const handleClick = () => {
    console.log(obj);
    Router.replace('/publicaciones');
  };

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  useEffect(()=>{
    setTotalBicicletas(lista.filter(e => (e.clase=="Bicicleta")).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad*currentValue.precio, 0));
    setTotalAccesorios(lista.filter(e => (e.clase=="Accesorio")).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad*currentValue.precio, 0));
    setTotalRepuestos(lista.filter(e => (e.clase=="Repuesto")).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad*currentValue.precio, 0));
  }, [lista]);

  return (
    <>
      <Head>
        <title>Ventas</title>
      </Head>
      <Center w={ancho} h={altura * 0.863} >
        <Box w={ancho * 0.85} h={altura * 0.8} borderRadius="20px" bgColor="white" borderColor="gray.200" border="0px">
          <Stack direction="column" padding="15px" spacing="10px">
            <Text fontSize='4xl' fontWeight="1000" fontFamily="inherit" textColor="black" alignSelf="center">VENTAS TOTALES</Text>
            <Stack direction="row" padding="15px">
              <Stack direction="column">
                <Box h="34px" w={ancho *  0.26} bg="blue.100" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontWeight="1000" fontSize="24px">BICICLETAS</Text>
                  </Center>
                </Box>
                <Box h="10px" />
                <List >
                  <ListItem>
                    <Flex direction="row">
                      <Center>
                        <ListIcon as={Minus} color="white" h="22px" w="22px" marginLeft="10px" />
                      </Center>
                      <Center fontSize="20px" color="gray.500">Tipo de Bicicleta </Center>
                      <Spacer />
                      <Center fontSize="20px" marginRight="20px" color="gray.500"> Ganancia:</Center>
                    </Flex>
                  </ListItem>
                  <Box h="15px" />
                  {
                    tiposBicicleta.sort().map((item) => {
                      return (
                        <>
                          <ListItem key={item}>
                            <Flex direction="row">
                              <Center>
                                {
                                  lista.filter(e => (e.tipo == item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) == 0 ?
                                    <ListIcon as={Minus} color="red.500" h="22px" w="22px" marginLeft="10px" /> :
                                    <ListIcon as={DollarSign} color="green.500" h="22px" w="22px" marginLeft="10px" />
                                }
                              </Center>
                              <Center fontSize="20px"> {item} </Center>
                              <Spacer />
                              <Center fontSize="20px" marginRight="20px">$ {lista.filter(e => (e.tipo == item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad*currentValue.precio, 0)} </Center>
                            </Flex>
                          </ListItem>
                          <Box h="15px" />
                        </>
                      );
                    })
                  }
                </List>
                <Box h="34px" w={ancho *  0.26} bg="blue.700" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontSize="22px" color="white">GANANCIA TOTAL: ${TotalBicicletas}</Text>
                  </Center>
                </Box>
              </Stack>

              <Stack direction="column">
                <Box h="8px" />
                <Divider orientation="vertical" h={altura * 0.55} borderColor="gray.300" />
              </Stack>


              <Stack direction="column">
                <Box h="34px" w={ancho *  0.26} bg="blue.100" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontWeight="1000" fontSize="24px">ACCESORIOS </Text>
                  </Center>
                </Box>
                <Box h="10px" />
                <List >
                <ListItem>
                    <Flex direction="row">
                      <Center>
                        <ListIcon as={Minus} color="white" h="22px" w="22px" marginLeft="10px" />
                      </Center>
                      <Center fontSize="20px" color="gray.500">Tipo de Accesorio</Center>
                      <Spacer />
                      <Center fontSize="20px" marginRight="20px" color="gray.500"> Ganancia:</Center>
                    </Flex>
                  </ListItem>
                  <Box h="15px" />
                  {
                    tiposAccesorio.sort().map((item) => {
                      return (
                        <>
                          <ListItem key={item}>
                            <Flex direction="row">
                              <Center>
                                {
                                  lista.filter(e => (e.tipo == item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) == 0 ?
                                    <ListIcon as={Minus} color="red.500" h="22px" w="22px" marginLeft="10px" /> :
                                    <ListIcon as={DollarSign} color="green.500" h="22px" w="22px" marginLeft="10px" />
                                }
                              </Center>
                              <Center fontSize="20px"> {item} </Center>
                              <Spacer />
                              <Center fontSize="20px" marginRight="20px">$ {lista.filter(e => (e.tipo == item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad*currentValue.precio, 0)} </Center>
                            </Flex>
                          </ListItem>
                          <Box h="15px" />
                        </>
                      );
                    })
                  }
                </List>
                <Box h="34px" w={ancho *  0.26} bg="blue.700" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontSize="22px" color="white">GANANCIA TOTAL: ${TotalAccesorios}</Text>
                  </Center>
                </Box>
              </Stack>

              <Stack direction="column">
                <Box h="8px" />
                <Divider orientation="vertical" h={altura * 0.55} borderColor="gray.300" />
              </Stack>


              <Stack direction="column">
                <Box h="34px" w={ancho *  0.26} bg="blue.100" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontWeight="1000" fontSize="24px">REPUESTOS</Text>
                  </Center>
                </Box>
                <Box h="10px" />
                <List >
                <ListItem>
                    <Flex direction="row">
                      <Center>
                        <ListIcon as={Minus} color="white" h="22px" w="22px" marginLeft="10px" />
                      </Center>
                      <Center fontSize="20px" color="gray.500">Tipo de Repuesto</Center>
                      <Spacer />
                      <Center fontSize="20px" marginRight="20px" color="gray.500"> Ganancia:</Center>
                    </Flex>
                  </ListItem>
                  <Box h="15px" />
                  {
                    tiposRepuesto.sort().map((item) => {
                      return (
                        <>
                          <ListItem key={item}>
                            <Flex direction="row">
                              <Center>
                                {
                                  lista.filter(e => (e.tipo == item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) == 0 ?
                                    <ListIcon as={Minus} color="red.500" h="22px" w="22px" marginLeft="10px" /> :
                                    <ListIcon as={DollarSign} color="green.500" h="22px" w="22px" marginLeft="10px" />
                                }
                              </Center>
                              <Center fontSize="20px"> {item} </Center>
                              <Spacer />
                              <Center fontSize="20px" marginRight="20px">$ {lista.filter(e => (e.tipo == item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad*currentValue.precio, 0)} </Center>
                            </Flex>
                          </ListItem>
                          <Box h="15px" />
                        </>
                      );
                    })
                  }
                </List>
                <Box h="34px" w={ancho * 0.26} bg="blue.700" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontSize="22px" color="white">GANANCIA TOTAL: ${TotalRepuestos}</Text>
                  </Center>
                </Box>
              </Stack>

            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

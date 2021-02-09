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
import { ArrowRight, CheckCircle, XCircle } from 'react-feather'

export default function Estadisticas_Inventario() {

  const [lista, setLista] = useState([]);
  const [altura, setAltura] = useState("");
  const [ancho, setAncho] = useState("");

  const [tiposBicicleta, setTiposBicicleta] = useState(["Bicicleta de Montaña", "Bicicleta Acrobática", "Bicicleta de Ruta", "Bicicleta Híbrida", "Bicicleta Urbana", "Bicicleta de Turismo", "Bicicleta Playera", "Otra"]);
  const [tiposAccesorio, setTiposAccesorio] = useState(["Casco", "Guantes", "Lentes", "Termo", "Rodilleras", "Coderas", "Dispositivos", "Otro"]);
  const [tiposRepuesto, setTiposRepuesto] = useState(["Rueda", "Manilla", "Silla", "Cadena","Piñones", "Radios", "Frenos", "Otro"]);
  const [TotalBicicletas, setTotalBicicletas] = useState(0);
  const [TotalAccesorios, setTotalAccesorios] = useState(0);
  const [TotalRepuestos, setTotalRepuestos] = useState(0);

  const Router = useRouter();

  useEffect(() => {
    fetch("../inventario.json").then(
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

  useEffect(()=>{
    setTotalBicicletas(lista.filter(e => (e.clase=="Bicicleta")).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0));
    setTotalAccesorios(lista.filter(e => (e.clase=="Accesorio")).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0));
    setTotalRepuestos(lista.filter(e => (e.clase=="Repuesto")).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0));
  }, [lista]);

  return (
    <>
      <Head>
        <title>Inventario</title>
      </Head>
      <Center w={ancho} h={altura * 0.863} >
        <Box w={ancho * 0.85} h={altura * 0.8} borderRadius="20px" bgColor="white" borderColor="gray.200" border="0px">
          <Stack direction="column" padding="15px" spacing="10px">
            <Text fontSize='4xl' fontWeight="1000" fontFamily="inherit" textColor="black" alignSelf="center">INVENTARIO</Text>
            <Stack direction="row" padding="15px">
              <Stack direction="column">
                <Box h="34px" w={ancho * 0.26} bg="blue.100" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontWeight="1000" fontSize="22px">BICICLETAS</Text>
                  </Center>
                </Box>
                <Box h="10px" />
                <List >
                <ListItem>
                    <Flex direction="row">
                      <Center>
                        <ListIcon as={XCircle} color="white" h="22px" w="22px" marginLeft="10px" />
                      </Center>
                      <Center fontSize="20px" color="gray.500">Tipo de Repuesto</Center>
                      <Spacer />
                      <Center fontSize="20px" marginRight="20px" color="gray.500">Und. Disp:</Center>
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
                                lista.filter(e => (e.tipo==item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) == 0 ? 
                                <ListIcon as={XCircle} color="red.500" h="22px" w="22px" marginLeft="10px"/> :
                                <ListIcon as={CheckCircle} color="green.500" h="22px" w="22px" marginLeft="10px"/>
                              }
                              </Center>
                              <Center fontSize="20px"> {item} </Center>
                              <Spacer/>
                              <Center fontSize="20px" marginRight="20px"> {lista.filter(e => (e.tipo==item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0)} </Center>
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
                    <Text fontStyle="italic" fontWeight="1000" fontSize="22px" color="white">UNIDADES TOTALES: {TotalBicicletas}</Text>
                  </Center>
                </Box>
              </Stack>

              <Stack direction="column">
                <Box h="8px" />
                <Divider orientation="vertical" h={altura * 0.55} borderColor="gray.300" />
              </Stack>


              <Stack direction="column">
                <Box h="34px" w={ancho * 0.26} bg="blue.100" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontWeight="1000" fontSize="22px">ACCESORIOS </Text>
                  </Center>
                </Box>
                <Box h="10px" />
                <List >
                <ListItem>
                    <Flex direction="row">
                      <Center>
                        <ListIcon as={XCircle} color="white" h="22px" w="22px" marginLeft="10px" />
                      </Center>
                      <Center fontSize="20px" color="gray.500">Tipo de Repuesto</Center>
                      <Spacer />
                      <Center fontSize="20px" marginRight="20px" color="gray.500">Und. Disp:</Center>
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
                                lista.filter(e => (e.tipo==item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) == 0 ? 
                                <ListIcon as={XCircle} color="red.500" h="22px" w="22px" marginLeft="10px"/> :
                                <ListIcon as={CheckCircle} color="green.500" h="22px" w="22px" marginLeft="10px"/>
                              }
                              </Center>
                              <Center fontSize="20px"> {item} </Center>
                              <Spacer/>
                              <Center fontSize="20px" marginRight="20px"> {lista.filter(e => (e.tipo==item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) } </Center>
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
                    <Text fontStyle="italic" fontWeight="1000" fontSize="22px" color="white">UNIDADES TOTALES: {TotalAccesorios}</Text>
                  </Center>
                </Box>
              </Stack>

              <Stack direction="column">
                <Box h="8px" />
                <Divider orientation="vertical" h={altura * 0.55} borderColor="gray.300" />
              </Stack>


              <Stack direction="column">
                <Box h="34px" w={ancho * 0.26} bg="blue.100" borderRadius="10px">
                  <Center>
                    <Text fontStyle="italic" fontWeight="1000" fontSize="22px">REPUESTOS</Text>
                  </Center>
                </Box>
                <Box h="10px" />
                <List >
                <ListItem>
                    <Flex direction="row">
                      <Center>
                        <ListIcon as={XCircle} color="white" h="22px" w="22px" marginLeft="10px" />
                      </Center>
                      <Center fontSize="20px" color="gray.500">Tipo de Repuesto</Center>
                      <Spacer />
                      <Center fontSize="20px" marginRight="20px" color="gray.500">Und. Disp:</Center>
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
                                lista.filter(e => (e.tipo==item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0) == 0 ? 
                                <ListIcon as={XCircle} color="red.500" h="22px" w="22px" marginLeft="10px"/> :
                                <ListIcon as={CheckCircle} color="green.500" h="22px" w="22px" marginLeft="10px"/>
                              }
                              </Center>
                              <Center fontSize="20px"> {item} </Center>
                              <Spacer/>
                              <Center fontSize="20px" marginRight="20px"> {lista.filter(e => (e.tipo==item)).reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0)} </Center>
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
                    <Text fontStyle="italic" fontWeight="1000" fontSize="22px" color="white">UNIDADES TOTALES: {TotalRepuestos}</Text>
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

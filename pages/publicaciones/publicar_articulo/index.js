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
  NumberInput
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Publicaciones() {

  const [altura, setAltura] = useState("");
  const [ancho, setAncho] = useState("");
  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipos, setTipos] = useState(["Tipo 1", "Tipo 2", "Tipo 3", "Tipo 4"]);

  const Router = useRouter();

  const handleClick = () => {

    Router.replace('/publicaciones');
  };

  const handleChangeNombre = (event) => setNombre(event.target.value);
  const handleChangePrecio = (event) => setPrecio(event.target.value);

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  return (
    <>
      <Head>
        <title>Publicaciones</title>
      </Head>
      <Center w={ancho} h={altura * 0.863} >

        <Box w={ancho * 0.85} h={altura * 0.8} borderRadius="20px" bgColor="white" borderColor="gray.200" border="0px">
          <Stack direction="column" padding="15px" spacing="10px">
            <Text fontSize='4xl' fontWeight="1000" fontFamily="inherit" textColor="black" alignSelf="center">BICICLETA</Text>
            <Stack direction="row" padding="15px">
              <Box w={ancho * 0.4} h={altura * 0.45} borderRadius="20px" bgImage="url('bicicleta.jpg')" />
              <Stack w={ancho * 0.4} h={altura * 0.45} padding="15px" spacing="8px" direction="column">
                <FormControl isRequired>
                  <FormLabel>TIPO DE BICICLETA: {tipo}</FormLabel>
                  <Select placeholder="Selecciona el Tipo de Bicicleta a publicar">
                    <option> Bicileta de Montaña </option>
                    <option> Bicicleta Acrobática</option>
                    <option> Bicicleta de Ruta</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>NOMBRE DEL PRODUCTO: {nombre}</FormLabel>
                  <Input 
                    value={nombre}
                    onChange={handleChangeNombre}/>
                </FormControl>
                <FormControl id="amount" isRequired>
                  <FormLabel>PRECIO DEL PRODUCTO :{precio}</FormLabel>
                  <NumberInput 
                    value={precio}
                    onChange={(value) => setPrecio(value)}
                    min={1} max={10000} precision={2} step={0.2}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl id="amount" isRequired>
                  <FormLabel>CANTIDAD A OFERTAR: {cantidad}</FormLabel>
                  <NumberInput min={1} max={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Stack>
            </Stack>
            <FormControl isRequired>
              <FormLabel>DESCRIPCIÓN DEL PRODUCTO:{}</FormLabel>
              <Input />
            </FormControl>
            <Center>
              <Button width={ancho * 0.2} height={altura * 0.05} bgColor="yellow.500" borderRadius="20px" onClick={handleClick}>
                <Text fontSize='md' fontFamily="serif" color={process.env.COLOR_LETRAS_BOTON}>PUBLICAR</Text>
              </Button>
            </Center>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

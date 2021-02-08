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
  Image
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Publicacion_Accesorio() {

  const [altura, setAltura] = useState("");
  const [ancho, setAncho] = useState("");
  
  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(1.00);
  const [cantidad, setCantidad] = useState(1);
  const [descripcion, setDescripcion] = useState("");
  const [tipos, setTipos] = useState(["Accesorio 1", "Accesorio 2", "Accesorio 3"]);
  const [obj,setObject] = useState({tipo: "", nombre:"", precio: 1, cantidad: 1, descripcion:""});

  const Router = useRouter();

  const handleClick = () => {
    console.log(obj);
    Router.replace('/publicaciones');
  };

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  useEffect(() => {
    setObject({ ...obj, tipo: {tipo} })
  }, [tipo]);

  useEffect(() => {
    setObject({ ...obj, nombre: {nombre} })
  }, [nombre]);

    useEffect(() => {
    setObject({ ...obj, precio: {precio} })
  }, [precio]);

  useEffect(() => {
    setObject({ ...obj, cantidad: {cantidad} })
  }, [cantidad]);

  useEffect(() => {
    setObject({ ...obj, descripcion: {descripcion} })
  }, [descripcion]);

  return (
    <>
      <Head>
        <title>Publicacion Accesorio</title>
      </Head>
      <Center w={ancho} h={altura * 0.863} >

        <Box w={ancho * 0.85} h={altura * 0.8} borderRadius="20px" bgColor="white" borderColor="gray.200" border="0px">
          <Stack direction="column" padding="15px" spacing="10px">
            <Text fontSize='4xl' fontWeight="1000" fontFamily="inherit" textColor="black" alignSelf="center">ACCESORIO</Text>
            <Stack direction="row" padding="15px">
              <Image src="../../accesorio.png" w={ancho*0.25} h={altura*0.35} marginLeft={ancho*0.1} marginRight={ancho*0.1} marginTop={altura*0.05} marginBottom={altura*0.05}/>
              <Stack w={ancho * 0.4} h={altura * 0.45} padding="15px" spacing="8px" direction="column">
                <FormControl isRequired>
                  <FormLabel>TIPO DE ACCESORIO: {tipo}</FormLabel>
                  <Select value={tipo} onChange={(value) => setTipo(value.target.value)} placeholder="Selecciona el Tipo de ACCESORIO">
                    {tipos.map((item) => {
                      return (
                        <option key={item}>{item}</option>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>NOMBRE DEL PRODUCTO: {nombre}</FormLabel>
                  <Input 
                    value={nombre}
                    onChange={(value) => setNombre(value.target.value)}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>PRECIO DE UNA UNIDAD :{precio}</FormLabel>
                  <NumberInput 
                    value={precio}
                    onChange={(value) => setPrecio(parseFloat(value))}
                    min={1} max={10000} precision={2} step={0.01}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>CANTIDAD A OFERTAR: {cantidad}</FormLabel>
                  <NumberInput 
                  value={cantidad}
                  onChange={(value) => setCantidad(parseInt(value))}
                  min={1} max={1000}>
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
              <FormLabel>DESCRIPCIÓN DEL PRODUCTO:{descripcion}</FormLabel>
              <Input value={descripcion}
                    onChange={(value) => setDescripcion(value.target.value)}/>
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

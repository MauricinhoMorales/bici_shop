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
  useToast
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PubSub from 'pubsub-js';

export default function Compra_Articulo() {

  const toast = useToast();
  const [altura, setAltura] = useState("");
  const [ancho, setAncho] = useState("");

  const [tipo, setTipo] = useState("Tipo de Bicicleta");
  const [nombre, setNombre] = useState("Ejemplo");
  const [precio, setPrecio] = useState(1.00);
  const [cantidadComprar, setCantidadComprar] = useState(1);
  const [cantidadOfertada, setCantidadOfertada] = useState(15);
  const [descripcion, setDescripcion] = useState("Descripcion predeterminada");

  const Router = useRouter();

  const handleClick = () => {
    if (cantidadComprar>cantidadOfertada) {
      return (
        toast({
          title: "Compra Inválida",
          description: "El producto ya no esta disponible",
          status: "error",
          duration: 4000,
          isClosable: true,
        })
      )
    } else {
      PubSub.publish('Compra',nombre);
      Router.replace('/compras');
      return (
        toast({
          title: "Compra realizada",
          description: "Se ha realizado la compra exitosamente",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
      );
    }
  };

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  useEffect(()=>{
    const token = PubSub.subscribe('AbrirCompra', function (msg, data) {
      console.log('Hola soy Compras de Articulo especifico, Recibi una publicacion:');
      console.log(msg, data);
      //AQUI DEBERIA ACTUALIZARSE EL ARCHIVO JSON DE INVENTARIO

      // TAMBIEN EL ARCHIVO JSON DE TRANSACCIONES
      return () => {
        PubSub.unsubscribe(token);
      };
    })
  },[])

  return (
    <>
      <Head>
        <title>Compra de Articulo</title>
      </Head>
      <Center w={ancho} h={altura * 0.863} >

        <Box w={ancho * 0.85} h={altura * 0.8} borderRadius="20px" bgColor="white" borderColor="gray.200" border="0px">
          <Stack direction="column" padding="15px" spacing="10px">
            <Text fontSize='4xl' fontWeight="1000" fontFamily="inherit" textColor="black" alignSelf="center">ARTICULO</Text>
            <Stack direction="row" padding="15px">
              <Image src="../../bicicleta2.png" w={ancho * 0.35} h={altura * 0.35} marginLeft={ancho * 0.05} marginRight={ancho * 0.05} marginTop={altura * 0.05} marginBottom={altura * 0.05} />
              <Stack w={ancho * 0.4} h={altura * 0.45} padding="15px" spacing="8px" direction="column">
                <FormControl>
                  <FormLabel>TIPO DE PRODUCTO:</FormLabel>
                  <Text fontSize="18px" borderWidth="1px" borderRadius="5px" padding="5px" paddingLeft="15px">{tipo}</Text>
                </FormControl>
                <FormControl>
                  <FormLabel>NOMBRE DEL PRODUCTO:</FormLabel>
                  <Text fontSize="18px" borderWidth="1px" borderRadius="5px" padding="5px" paddingLeft="15px">{nombre}</Text>
                </FormControl>

                <Stack direction="row">
                  <FormControl>
                    <FormLabel>CANTIDAD DISPONIBLE:</FormLabel>
                    <Text fontSize="18px" borderWidth="1px" borderRadius="5px" padding="5px" paddingLeft="15px">{cantidadOfertada}</Text>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>CANTIDAD A COMPRAR:</FormLabel>
                    <NumberInput
                      value={cantidadComprar}
                      onChange={(value) => setCantidadComprar(value)}
                      min={1} max={cantidadOfertada}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Stack>

                <Stack direction="row">
                <FormControl>
                  <FormLabel>PRECIO DE UNA UNIDAD:</FormLabel>
                  <Text fontSize="18px" borderWidth="1px" borderRadius="5px" padding="5px" paddingLeft="15px">{precio} $</Text>
                </FormControl>
                <FormControl>
                  <FormLabel>PRECIO TOTAL:</FormLabel>
                  <Text fontSize="18px" borderWidth="1px" borderRadius="5px" padding="5px" paddingLeft="15px">{precio*cantidadComprar} $</Text>
                </FormControl>
                </Stack>

              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>DESCRIPCIÓN DEL PRODUCTO:</FormLabel>
              <Text fontSize="18px" borderWidth="1px" borderRadius="5px" padding="5px" paddingLeft="15px">{descripcion}</Text>
            </FormControl>
            <Center>
              <Button width={ancho * 0.2} height={altura * 0.05} bgColor="yellow.500" borderRadius="20px" onClick={handleClick}>
                <Text fontSize='md' fontFamily="serif" color={process.env.COLOR_LETRAS_BOTON}>COMPRAR</Text>
              </Button>
            </Center>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

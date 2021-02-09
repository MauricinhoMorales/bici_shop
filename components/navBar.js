import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Flex,
  Stack,
  Image,
} from '@chakra-ui/react';
import {
  BarChart,
  ShoppingBag,
  Edit
} from 'react-feather';
import NavItem from './navItem.js';

export default function NavBar() {

  
  const [ancho, setAncho] = useState("");
  const [altura, setAltura] = useState("");

  const Router = useRouter();

  useEffect(() => {
    setAltura(screen.height);
    setAncho(screen.width);
  }, []);

  const handleSelected = (route) => {
    Router.push(`/${route}`);
  };

  return (
      <Flex bg="yellow.500" w={ancho*0.1} h={altura*0.863} justify="center">
        <Stack spacing="20">
          <Image src="/logo.png" w="25" h="25" onClick={() => handleSelected('')}/>
          <NavItem
            title="Publicar"
            icon={Edit}
            handleSelect={handleSelected}
            route="publicaciones"
          />
          <NavItem
            title="Comprar"
            icon={ShoppingBag}
            handleSelect={handleSelected}
            route="compras"
          />
          <NavItem
            title="Estadisticas"
            icon={BarChart}
            handleSelect={handleSelected}
            route="estadisticas"
          />
        </Stack>
      </Flex>
  );
}

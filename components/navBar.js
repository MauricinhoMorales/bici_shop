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

  const [selectionState, setSelectionState] = useState([
    true,
    false,
    false,
  ]);

  const Router = useRouter();

  const handleSelected = (route) => {
    Router.replace(`/${route}`);
  };

  useEffect(() => {
    if (Router.pathname.includes('/publicaciones')) {
      setSelectionState([true, false, false]);
    } else if (Router.pathname.includes('/compras')) {
      setSelectionState([false, true, false]);
    } else {
      setSelectionState([false, false, true]);
    }
  }, [Router]);

  return (
      <Flex w="18em" h="100%">
        <Stack spacing="20">
          <Image src="/logo.png" w="25" h="25"/>
          <NavItem
            title="Publicar"
            icon={Edit}
            isSelected={selectionState}
            handleSelect={handleSelected}
            option={0}
            route="publicaciones"
          />
          <NavItem
            title="Comprar"
            icon={ShoppingBag}
            isSelected={selectionState}
            handleSelect={handleSelected}
            option={1}
            route="compras"
          />
          <NavItem
            title="Estadisticas"
            icon={BarChart}
            isSelected={selectionState}
            handleSelect={handleSelected}
            option={2}
            route="estadisticas"
          />
        </Stack>
      </Flex>
  );
}

import { Flex, Center} from '@chakra-ui/react';
import NavBar from './navBar';

export default function Layout() {
  return (
    <>
      <Flex bg="blue.500" w="150px" h="100vh" overflowY="hidden" justify="center">
          <NavBar/>
      </Flex>
    </>
  );
}

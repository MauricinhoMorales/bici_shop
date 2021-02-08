import { Heading, Icon, Wrap, WrapItem, Stack, Text } from '@chakra-ui/react';

export default function NavItem({
  title,
  icon,
  handleSelect,
  isSelected,
  route,
}) {
  return (
    <Wrap
      spacing="10px"
      w="100%"
      h="3.5em"
      justify="center"
      padding="1em"
      onClick={() => handleSelect(route)}>
      <WrapItem textAlign="center">
        <Icon as={icon} w={10} h={10} color="white"/>
      </WrapItem>
      <WrapItem textAlign="center">
        <Text textColor="white" fontWeight="800">
          {title}
        </Text>
      </WrapItem>
    </Wrap>
  );
}

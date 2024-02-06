import { dadosProps } from "@/interfaces/dadosProps";
import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { jsx } from "@emotion/react";

export default function Todo({todo}: {todo:dadosProps}) {
  return (
    <Flex flexDir="row" padding="18px 300px" borderBottom="solid 1px rgb(97, 97, 97)">
      <Checkbox marginRight="8px" />
      <Text fontSize="18px">{todo.text}</Text>
    </Flex>
  );
}

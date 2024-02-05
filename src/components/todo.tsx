import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { jsx } from "@emotion/react";

export default function Todo({todo}: {todo:any}) {
  return (
    <Flex flexDir="row" padding="18px 300px">
      <Checkbox marginRight="8px" />
      <Text fontSize="18px">{todo.text}</Text>
    </Flex>
  );
}

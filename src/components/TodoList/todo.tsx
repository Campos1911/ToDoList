import { dadosProps } from "@/interfaces/dadosProps";
import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Todo( {todo}: {todo:dadosProps} ) {
  return (
    <>
      <Flex
        flexDir="row"
        padding="10px 300px"
        borderBottom="solid 1px rgb(48, 48, 66)"
      >
        <Checkbox marginRight="8px" />
        <Text marginTop="3px" fontSize="12px">
          {todo.text}
        </Text>
        <Button
          color="white"
          marginLeft="8px"
          size="xs"
          variant="outline"
          _hover={{ bgColor: "white", color: "black" }}
        >
          X
        </Button>
      </Flex>
    </>
  );
}

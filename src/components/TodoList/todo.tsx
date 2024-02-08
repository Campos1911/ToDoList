import { dadosProps } from "@/interfaces/dadosProps";
import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Todo({ todo }: { todo: dadosProps }) {
  const removeTodo = () => {
    fetch("http://localhost:5000/todos/" + todo.id, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));
  };

  const checkedTodo = () => {
    fetch("http://localhost:5000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todo.text, isComplete: !todo.isComplete }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Flex
        flexDir="row"
        padding="10px 300px"
        borderBottom="solid 1px rgb(48, 48, 66)"
      >
        <Checkbox marginRight="8px" onChange={checkedTodo} />
        <Text
          as={todo.isComplete ? "s" : "p"}
          color="white"
          marginTop="3px"
          fontSize="12px"
        >
          {todo.text}
        </Text>
        <Button
          color="white"
          marginLeft="8px"
          size="xs"
          variant="outline"
          _hover={{ bgColor: "white", color: "black" }}
          onClick={removeTodo}
        >
          X
        </Button>
      </Flex>
    </>
  );
}

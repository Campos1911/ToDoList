"use client";

import { Input, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./page.css";
export default function Home() {
  type dadosType = {
    id: number;
    text: string;
    isComplete: boolean;
  };

  const [dados, setDados] = useState([
    {
      id: 1,
      text: "Testando ToDo",
      isComplete: false,
    },
    {
      id: 2,
      text: "Testando ToDo 2",
      isComplete: false,
    },
    {
      id: 3,
      text: "Testando ToDo 3",
      isComplete: false,
    },
  ]);

  return (
    <Flex flexDir="column" alignItems="center" padding="30px" marginTop="14vh">
      <Text
        fontSize="36px"
        fontWeight="bold"
        color="white"
        marginRight="28vw"
        marginBottom="5vh"
      >
        T O D O
      </Text>
      <Input
        placeholder="Insira a próxima tarefa a ser completada"
        width="770px"
        textColor="white"
        focusBorderColor="white"
        padding="26px 10px"
        marginBottom="2vh"
        backgroundColor="rgb(27, 27, 50)"
        border="none"
      />
      <div className="todo-list">
        {dados.map((todo) => (
          <Flex flexDir="row" backgroundColor="rgb(27, 27, 50)" padding="18px 300px">
            <Checkbox marginRight="8px" />
            <Text fontSize="18px">{todo.text}</Text>
          </Flex>
        ))}
      </div>
    </Flex>
  );
}

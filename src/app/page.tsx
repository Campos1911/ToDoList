"use client";

import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import Todo from "../components/TodoList/todo";

import "./page.css";
import { dadosProps } from "@/interfaces/dadosProps";

export default function Home() {
  type dadosType = {
    id: number;
    text: string;
    isComplete: boolean;
  };

  const [dados, setDados] = useState<dadosProps[]>([
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
      <Flex>
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
        <Button
          backgroundColor="rgb(2, 0, 59)"
          transition="0.5s"
          color="white"
          marginLeft="1vh"
          marginTop="1vh"
          type="submit"
        >
          ✓
        </Button>
      </Flex>
      <div className="todo-list">
        {dados.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </Flex>
  );
}

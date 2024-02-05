"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./page.css";
export default function Home() {
  type dadosData = {
    id: number;
    text: string;
    category: string;
    isComplete: boolean;
  };

  const [dados, setDados] = useState([
    {
      id: 1,
      text: "Testando ToDo",
      category: "Estudo",
      isComplete: false,
    },
    {
      id: 2,
      text: "Testando ToDo 2",
      category: "Aulas",
      isComplete: false,
    },
    {
      id: 3,
      text: "Testando ToDo 3",
      category: "Teste",
      isComplete: false,
    },
  ]);

  return (
    <Flex flexDir="column" alignItems="center" padding="30px" marginTop="20vh">
      <Text fontSize="32px" fontWeight="bold" color="white" marginRight="30vw">
        T O D O
      </Text>
      <div className="todo-list">
        {dados.map((todo) => (
          <div className="todo-apparence">
            <div className="todo">
              <Text>{todo.text}</Text>
              <Text>({todo.category})</Text>
            </div>
            <Flex marginBottom="30px" border="2px solid white" padding="10px" borderRadius="5px">
              <Button marginRight="5px">Completar</Button>
              <Button>X</Button>
            </Flex>
          </div>
        ))}
      </div>
    </Flex>
  );
}

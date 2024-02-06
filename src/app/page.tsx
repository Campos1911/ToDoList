"use client";

import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

import Todo from "../components/TodoList/todo";
import Todoform from "../components/Todo Form/todoform";

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
    {
      id: 4,
      text: "Testando ToDo 4",
      isComplete: false,
    },
  ]);

  const addTask = (text:string) => {
    const newTask = [
      ...dados,
      {
        id: Math.floor(Math.random() * (10000)),
        text,
        isComplete: false
      },
    ];

    setDados(newTask);
  };

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
      <Todoform addTask={addTask} />
      <div className="todo-list">
        {dados.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </Flex>
  );
}

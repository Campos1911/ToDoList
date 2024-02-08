"use client";

import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import Todo from "../components/TodoList/todo";
import Todoform from "../components/Todo Form/todoform";

import "./page.css";
import { dadosProps } from "@/interfaces/dadosProps";

export default function Home() {
  type dadosType = {
    text: string;
    isComplete: boolean;
  };

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDados(data));
  });

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
      <Todoform />
      <div className="todo-list">
      {dados.map((todo:dadosProps) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </Flex>
  );
}

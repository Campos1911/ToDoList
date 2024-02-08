"use client";

import { Input, Button, Flex, Text, Select } from "@chakra-ui/react";
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
    <Flex flexDir="column" alignItems="center" padding="10px" marginTop="14vh">
      <Flex flexDir="row">
        <Text
          marginRight="14vw"
          fontSize="36px"
          fontWeight="bold"
          color="white"
          marginBottom="9vh"
        >
          T O D O
        </Text>
        <Flex marginTop="1vh">
          <Select color="black" borderColor="black" _hover={{ borderColor: "rgb(27, 27, 50)"}}  focusBorderColor="null">
            <option value="">Escolha um filtro</option>
            <option value="done">Concluídas</option>
            <option value="awaiting">Não concluídas</option>
          </Select>
        </Flex>
      </Flex>
      <Todoform />
      <div className="todo-list">
        {dados.map((todo: dadosProps) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </Flex>
  );
}

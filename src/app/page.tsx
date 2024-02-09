"use client";

import { Flex, Text, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { dadosProps } from "@/interfaces/dadosProps";

import Todo from "../components/TodoList/todo";
import Todoform from "../components/Todo Form/todoform";

import "./page.css";

export default function Home() {
  type dadosType = {
    //Criando o tipo dos dados
    text: string;
    isComplete: boolean;
  };

  const [dados, setDados] = useState([]); //Pega os dados vindos do Data Base Local
  const [filter, setFilter] = useState("All"); //Estado inicial mostra todos os objetos

  useEffect(() => { //Use Effect para executar o fetch apenas uma vez
    fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDados(data)); //Depois de consumir ela passa para a const "dados"
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
          <Select /**Usado para fazer o filtro**/
            color="black"
            borderColor="black"
            _hover={{ borderColor: "rgb(27, 27, 50)" }}
            focusBorderColor="null"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todos</option>
            <option value="Completo">Concluídas</option>
            <option value="Incompleto">Não concluídas</option>
          </Select>
        </Flex>
      </Flex>
      <Todoform />
      <div className="todo-list">
        {dados //Aqui o ".filter() seguido do .map() são os responsáveis por mostrar os objetos da To Do List"
          .filter((todo: dadosProps) =>
            filter === "All" //Validações do filtro
              ? true
              : filter === "Completo"
              ? todo.isComplete
              : !todo.isComplete
          )
          .map((todo: dadosProps) => ( //Map para pegar as tarefas
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
    </Flex>
  );
}

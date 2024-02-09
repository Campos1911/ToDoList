import { dadosProps } from "@/interfaces/dadosProps";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Todo({ todo }: { todo: dadosProps }) {
  
  
  const removeTodo = () => {
    fetch("http://localhost:5000/todos/" + todo.id, { //Função para deletar a tarefa desejada
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));
  };

  const checkedTodo = () => {
    //Função responsável por fazer a mudança do "isComplete" -> usado para alterar a task como riscada
    fetch("http://localhost:5000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: todo.text, isComplete: !todo.isComplete }), //Aqui o "isComplete" é atualizado com um estado inverso do seu atuak
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
        <Text
          as={todo.isComplete ? "s" : "p"}
          color="white"
          marginTop="3px"
          fontSize="16px"
        >
          {todo.text}
        </Text>
        <Button
          marginTop="5px"
          color="white"
          backgroundColor="rgb(0, 196, 29)"
          size="xs"
          marginLeft="8px"
          onClick={checkedTodo}
        >
          ✓
        </Button>
        <Button
          color="white"
          marginTop="5px"
          size="xs"
          marginLeft="8px"
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

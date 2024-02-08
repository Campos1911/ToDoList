import { dadosProps } from "@/interfaces/dadosProps";
import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";

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
        <Button
          marginTop="5px"
          color="white"
          backgroundColor="rgb(0, 196, 29)"
          size="xs"
          marginRight="8px"
          onClick={checkedTodo}
        >
          ✓
        </Button>
        <Text
          as={todo.isComplete ? "s" : "p"}
          color="white"
          marginTop="3px"
          fontSize="16px"
        >
          {todo.text}
        </Text>
        <Button
          color="white"
          marginLeft="8px"
          marginTop="5px"
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

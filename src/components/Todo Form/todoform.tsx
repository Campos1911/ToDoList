import React, { Component, useState } from "react";

import { Flex, Input, Button } from "@chakra-ui/react";

import { dadosProps } from "@/interfaces/dadosProps";


const todoform = () => {
  const [value, setValue] = useState({text: "", isComplete: false});

  const dbWrite = () => {
    fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((anterior) => ({ ...anterior, [name]: value }));
    console.log(value);
  }

  const handleClick = () => {
    if(!value) return
    dbWrite();
  };

  return (
    <Flex>
      <Input
        placeholder="Insira a próxima tarefa a ser completada"
        width="770px"
        textColor="white"
        focusBorderColor="white"
        padding="26px 10px"
        marginBottom="2vh"
        marginLeft="7vh"
        backgroundColor="rgb(27, 27, 50)"
        border="none"
        onChange={handleChange}
        name="text"
      />
      <Button
        backgroundColor="rgb(2, 0, 59)"
        transition="0.5s"
        color="white"
        marginLeft="1vh"
        marginTop="1vh"
        type="submit"
        onClick={handleClick}
      >
        ✓
      </Button>
    </Flex>
  );
};

export default todoform;

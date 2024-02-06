import React, { Component, useState } from "react";

import { Flex, Input, Button } from "@chakra-ui/react";

import { dadosProps } from "@/interfaces/dadosProps";


const todoform = ({addTask}:any) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if(!value) return
    addTask(value);
    setValue("");
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
        onChange={(e) => setValue(e.target.value)}
        value={value}
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

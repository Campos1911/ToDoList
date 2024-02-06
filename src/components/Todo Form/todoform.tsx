import React from 'react';

import { Flex, Input, Button } from '@chakra-ui/react';

const todoform = () => {
  return (
    <Flex>
        <Input
          placeholder="Insira a próxima tarefa a ser completada"
          width="770px"
          textColor="white"
          focusBorderColor="white"
          padding="26px 10px"
          marginBottom="2vh"
          marginLeft="3xvh"
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
  )
}

export default todoform
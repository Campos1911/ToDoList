"use client";

import { Flex, Text, Progress } from "@chakra-ui/react";
export default function Home() {

  const teste = () => {
    window.alert("Olá mundo")
  }

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center" flexDir={"column"}>
      <Text>Este é o template de React para CT Junior, criado em 2023</Text>
    </Flex>
  );
}

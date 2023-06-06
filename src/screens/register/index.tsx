import { Box, Button, Input, Slider, Text } from "native-base"
import React from "react"
import { UseExerciceTime } from "./hooks/UseExerciceTime";
import { Container } from "./styles";

const Register = () => {
  const {
    setExerciseTime,
    setWeight,
    setWaterConsumption,
    setMood,
    handleSave
  } = UseExerciceTime();

  return (
    <>
      <Container>
        <Box>
          <Text>Tempo de exercicio</Text>
          <Input keyboardType="numeric" placeholder="exerciseTime" onChange={(e) => setExerciseTime(e.nativeEvent.text)} />
          <Text>Peso</Text>
          <Input keyboardType="numeric" placeholder="weigth" onChange={(e) => setWeight(e.nativeEvent.text)} />
          <Text>Consumo de agua</Text>
          <Input keyboardType="numeric" placeholder="waterConsumption" onChange={(e) => setWaterConsumption(e.nativeEvent.text)} />
          <Text>Humor</Text>
          <Input keyboardType="numeric" placeholder="mood" onChange={(e) => setMood(e.nativeEvent.text)} />        <Button onPress={() => handleSave()}>Salvar</Button>
        </Box>
      </Container>
    </>
  )
}

export {
  Register,
}
import { Box, Button, Input, Text } from "native-base"
import React from "react"
import { UseExerciceTime } from "./hooks/UseExerciceTime";

const Register = () => {
  const {     
    setExerciseTime, 
    setWeight, 
    setWaterConsumption, 
    setMood,
    handleSave
 } = UseExerciceTime();

 
  return(
    <>
      <Box>
        <Text>exerciseTime</Text>
        <Input placeholder="exerciseTime" onChange={(e) => setExerciseTime(e.nativeEvent.text)}/>
        <Text>weigth</Text>
        <Input placeholder="weigth" onChange={(e) => setWeight(e.nativeEvent.text)}/>
        <Text>waterConsumption</Text>
        <Input placeholder="waterConsumption" onChange={(e) => setWaterConsumption(e.nativeEvent.text)}/>
        <Text>mood</Text>
        <Input placeholder="mood" onChange={(e) => setMood(e.nativeEvent.text)}/>
        <Button onPress={() => handleSave()}>Salvar</Button>
      </Box>
    </>

  )
}
export {
  Register,
}
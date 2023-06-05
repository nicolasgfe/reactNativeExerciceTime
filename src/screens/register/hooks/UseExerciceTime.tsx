import { useNavigation } from "@react-navigation/native";
import { save } from "../../../data/repository/FitnessRepository";
import { useState } from "react";
import { AppNavigatorProps } from "../../../navigation/app/interface";
import { RegisterFitnessEntryDto } from "../../../domain";

const UseExerciceTime = () => {
  const [exerciseTime, setExerciseTime] = useState("")
  const [weight, setWeight] = useState("")
  const [waterConsumption, setWaterConsumption] = useState("")
  const [mood, setMood] = useState("")
  const navigation = useNavigation<AppNavigatorProps>();

  const obj: RegisterFitnessEntryDto = {
    exerciseTime: parseFloat(exerciseTime),
    weight: parseFloat(weight),
    waterConsumption: parseFloat(waterConsumption),
    mood: parseFloat(mood),
    date: new Date()
  }

  const handleSave = () => {
    save(obj);
    navigation.navigate("Home");
  }

  return {
    setExerciseTime,
    setWeight,  
    setWaterConsumption,
    setMood,
    handleSave
  }
};

export {
  UseExerciceTime
}
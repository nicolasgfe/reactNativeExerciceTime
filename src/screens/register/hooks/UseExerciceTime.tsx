import { useNavigation } from "@react-navigation/native";
import { save } from "../../../data/repository/FitnessRepository";
import { useState } from "react";
import { AppNavigatorProps } from "../../../navigation/app/interface";
import { RegisterFitnessEntryDto } from "../../domain/FitnessEntry";

const UseExerciceTime = () => {
  const [exerciseTime, setExerciseTime] = useState("")
  const [weigth, setWeigth] = useState("")
  const [waterConsumption, setWaterConsumption] = useState("")
  const [mood, setMood] = useState("")
  const navigation = useNavigation<AppNavigatorProps>();

  const obj: RegisterFitnessEntryDto = {
    exerciseTime: parseFloat(exerciseTime),
    weight: parseFloat(weigth),
    waterConsumption: parseFloat(waterConsumption),
    mood: parseFloat(mood),
    data: new Date().getDate()
  }

  const handleSave = () => {
    save(obj);
    navigation.navigate("Home");
  }

  return {
    setExerciseTime,
    setWeigth,
    setWaterConsumption,
    setMood,
    handleSave
  }
};

export {
  UseExerciceTime
}
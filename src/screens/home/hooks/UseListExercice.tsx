import {useCallback, useState} from "react";
import { findAll } from "../../../data/repository/FitnessRepository";
import { useFocusEffect } from "@react-navigation/native";
import { FitnessEntryDto } from "../../../domain/FitnessEntry";

const UseListExercices = () => {
  const [data, setData]= useState<FitnessEntryDto[]>([])
  useFocusEffect(
    useCallback(() => {
      const fetchExercices = async () => {
        const result = await findAll();
        setData(result);
      }
    fetchExercices();
    }, [])
  );
  return {
    data
  }
}

export {
  UseListExercices
}

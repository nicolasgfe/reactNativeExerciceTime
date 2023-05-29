import { RegisterFitnessEntryDto } from "../../domain/FitnessEntry";
import { FitnessEntry } from "../model";
import { realm } from "../realm";
import Realm from "realm";

export const save = (entry: RegisterFitnessEntryDto) => {
 realm.write(() => {
  realm.create(
    FitnessEntry.schemaName,
    {
      id: new Realm.BSON.UUID(),
      ...entry,
    }
  )
 })
}

export const findAll = (): RegisterFitnessEntryDto[] => {
  const entries = realm.objects<FitnessEntry>(FitnessEntry.schemaName)
  return entries.map(entry => ({
    id: entry.id.toHexString(),
    exerciseTime: entry.exerciseTime,
    mood: entry.mood,
    waterConsumption: entry.waterConsumption,
    weigth: entry.weigth,
    date: entry.date
  }));
}
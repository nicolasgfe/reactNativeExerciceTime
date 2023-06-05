import { FitnessEntryDto, RegisterFitnessEntryDto } from '../../domain';
import { FitnessEntry } from '../model';
import { realm } from '../realm';
import Realm from 'realm';

export const save = (entry: RegisterFitnessEntryDto) => {
  realm.write(() => {
    realm.create(FitnessEntry.schemaName, {
      id: new Realm.BSON.UUID(),
      ...entry,
    });
  });
};

export const findAll = (): FitnessEntryDto[] => {
  const entries = realm.objects<FitnessEntry>(FitnessEntry.schemaName);
  return entries.map(entry => ({
    id: entry.id.toHexString(),
    exerciseTime: entry.exerciseTime,
    mood: entry.mood,
    waterConsumption: entry.waterConsumption,
    weight: entry.weight,
    date: entry.date,
  }));
};

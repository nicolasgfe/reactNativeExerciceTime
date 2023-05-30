export interface RegisterFitnessEntryDto {
  exerciseTime: number;
  weight: number;
  waterConsumption: number;
  mood: number;
  date: Date;
}

export interface FitnessEntry extends RegisterFitnessEntryDto{
  id: string,
}
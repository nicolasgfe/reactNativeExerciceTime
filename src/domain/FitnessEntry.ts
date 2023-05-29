export interface RegisterFitnessEntryDto {
  exerciseTime: number;
  weigth: number;
  waterConsumption: number;
  mood: number;
  date: Date;
}

export interface FitnessEntry extends RegisterFitnessEntryDto{
  id: string,
}
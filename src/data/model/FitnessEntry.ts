import Realm from "realm";

class FitnessEntry extends Realm.Object<FitnessEntry> {
  id!: Realm.BSON.UUID;
  exerciseTime!: number;
  weigth!: number;
  waterConsumption!: number;
  mood!: number;
  date!: Date;

  static schemaName = "FitnessEntry";
  
  static schema = {
    name: FitnessEntry.schemaName,
    properties: {
      id: "uuid",
      exerciseTime: "number",
      weigth: "number",
      waterConsumption: "number",
      mood: "number",
      date: "date"
    },
    primatyKey: "id",
  }
}

export default FitnessEntry;
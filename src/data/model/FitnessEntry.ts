import Realm from 'realm';

class FitnessEntry extends Realm.Object<FitnessEntry> {
  id!: Realm.BSON.UUID;
  exerciseTime!: number;
  weight!: number;
  waterConsumption!: number;
  mood!: number;
  date!: Date;

  static schemaName = 'FitnessEntry';

  static schema = {
    name: FitnessEntry.schemaName,
    properties: {
      id: 'uuid',
      exerciseTime: 'int',
      weight: 'float',
      waterConsumption: 'float',
      mood: 'int',
      date: 'date',
    },
    primaryKey: 'id',
  };
}

export default FitnessEntry;
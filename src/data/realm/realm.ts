import Realm from "realm";
import { FitnessEntry } from "../model";

const realm = new Realm({
  schema: [FitnessEntry],
  schemaVersion: 1
})

export default realm
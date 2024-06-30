import { EnergyConsumption } from "../energyConsumption/EnergyConsumption";
import { HvacSystem } from "../hvacSystem/HvacSystem";
import { Recommendation } from "../recommendation/Recommendation";

export type Building = {
  address: string | null;
  builtYear: number | null;
  createdAt: Date;
  energyConsumptions?: Array<EnergyConsumption>;
  hvacSystems?: Array<HvacSystem>;
  id: string;
  name: string | null;
  recommendations?: Array<Recommendation>;
  totalFloors: number | null;
  updatedAt: Date;
};

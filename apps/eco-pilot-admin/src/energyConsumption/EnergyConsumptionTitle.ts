import { EnergyConsumption as TEnergyConsumption } from "../api/energyConsumption/EnergyConsumption";

export const ENERGYCONSUMPTION_TITLE_FIELD = "id";

export const EnergyConsumptionTitle = (record: TEnergyConsumption): string => {
  return record.id?.toString() || String(record.id);
};

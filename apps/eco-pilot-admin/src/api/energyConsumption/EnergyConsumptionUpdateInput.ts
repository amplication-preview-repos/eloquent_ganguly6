import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";

export type EnergyConsumptionUpdateInput = {
  building?: BuildingWhereUniqueInput | null;
  date?: Date | null;
  electricityUsage?: number | null;
  gasUsage?: number | null;
  waterUsage?: number | null;
};

import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";

export type EnergyConsumptionCreateInput = {
  building?: BuildingWhereUniqueInput | null;
  date?: Date | null;
  electricityUsage?: number | null;
  gasUsage?: number | null;
  waterUsage?: number | null;
};

import { Building } from "../building/Building";

export type EnergyConsumption = {
  building?: Building | null;
  createdAt: Date;
  date: Date | null;
  electricityUsage: number | null;
  gasUsage: number | null;
  id: string;
  updatedAt: Date;
  waterUsage: number | null;
};

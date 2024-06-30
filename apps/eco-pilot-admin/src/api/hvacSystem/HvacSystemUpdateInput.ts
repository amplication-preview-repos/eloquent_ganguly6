import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";

export type HvacSystemUpdateInput = {
  building?: BuildingWhereUniqueInput | null;
  maintenanceDate?: Date | null;
  status?: "Option1" | null;
  typeField?: string | null;
};

import { Building } from "../building/Building";

export type HvacSystem = {
  building?: Building | null;
  createdAt: Date;
  id: string;
  maintenanceDate: Date | null;
  status?: "Option1" | null;
  typeField: string | null;
  updatedAt: Date;
};

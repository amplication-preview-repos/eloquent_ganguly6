import { SortOrder } from "../../util/SortOrder";

export type EnergyConsumptionOrderByInput = {
  buildingId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  electricityUsage?: SortOrder;
  gasUsage?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  waterUsage?: SortOrder;
};

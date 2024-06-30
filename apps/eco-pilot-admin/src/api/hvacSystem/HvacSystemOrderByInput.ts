import { SortOrder } from "../../util/SortOrder";

export type HvacSystemOrderByInput = {
  buildingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  maintenanceDate?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type BuildingOrderByInput = {
  address?: SortOrder;
  builtYear?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  totalFloors?: SortOrder;
  updatedAt?: SortOrder;
};

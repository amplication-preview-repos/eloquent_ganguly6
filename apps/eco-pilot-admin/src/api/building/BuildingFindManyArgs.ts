import { BuildingWhereInput } from "./BuildingWhereInput";
import { BuildingOrderByInput } from "./BuildingOrderByInput";

export type BuildingFindManyArgs = {
  where?: BuildingWhereInput;
  orderBy?: Array<BuildingOrderByInput>;
  skip?: number;
  take?: number;
};

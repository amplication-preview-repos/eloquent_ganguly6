import { EnergyConsumptionWhereInput } from "./EnergyConsumptionWhereInput";
import { EnergyConsumptionOrderByInput } from "./EnergyConsumptionOrderByInput";

export type EnergyConsumptionFindManyArgs = {
  where?: EnergyConsumptionWhereInput;
  orderBy?: Array<EnergyConsumptionOrderByInput>;
  skip?: number;
  take?: number;
};

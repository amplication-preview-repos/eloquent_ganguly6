import { EnergyConsumptionUpdateManyWithoutBuildingsInput } from "./EnergyConsumptionUpdateManyWithoutBuildingsInput";
import { HvacSystemUpdateManyWithoutBuildingsInput } from "./HvacSystemUpdateManyWithoutBuildingsInput";
import { RecommendationUpdateManyWithoutBuildingsInput } from "./RecommendationUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  address?: string | null;
  builtYear?: number | null;
  energyConsumptions?: EnergyConsumptionUpdateManyWithoutBuildingsInput;
  hvacSystems?: HvacSystemUpdateManyWithoutBuildingsInput;
  name?: string | null;
  recommendations?: RecommendationUpdateManyWithoutBuildingsInput;
  totalFloors?: number | null;
};

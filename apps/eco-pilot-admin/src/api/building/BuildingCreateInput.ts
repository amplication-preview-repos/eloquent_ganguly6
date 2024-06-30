import { EnergyConsumptionCreateNestedManyWithoutBuildingsInput } from "./EnergyConsumptionCreateNestedManyWithoutBuildingsInput";
import { HvacSystemCreateNestedManyWithoutBuildingsInput } from "./HvacSystemCreateNestedManyWithoutBuildingsInput";
import { RecommendationCreateNestedManyWithoutBuildingsInput } from "./RecommendationCreateNestedManyWithoutBuildingsInput";

export type BuildingCreateInput = {
  address?: string | null;
  builtYear?: number | null;
  energyConsumptions?: EnergyConsumptionCreateNestedManyWithoutBuildingsInput;
  hvacSystems?: HvacSystemCreateNestedManyWithoutBuildingsInput;
  name?: string | null;
  recommendations?: RecommendationCreateNestedManyWithoutBuildingsInput;
  totalFloors?: number | null;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EnergyConsumptionListRelationFilter } from "../energyConsumption/EnergyConsumptionListRelationFilter";
import { HvacSystemListRelationFilter } from "../hvacSystem/HvacSystemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type BuildingWhereInput = {
  address?: StringNullableFilter;
  builtYear?: IntNullableFilter;
  energyConsumptions?: EnergyConsumptionListRelationFilter;
  hvacSystems?: HvacSystemListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  recommendations?: RecommendationListRelationFilter;
  totalFloors?: IntNullableFilter;
};

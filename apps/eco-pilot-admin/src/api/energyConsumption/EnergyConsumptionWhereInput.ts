import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EnergyConsumptionWhereInput = {
  building?: BuildingWhereUniqueInput;
  date?: DateTimeNullableFilter;
  electricityUsage?: FloatNullableFilter;
  gasUsage?: FloatNullableFilter;
  id?: StringFilter;
  waterUsage?: FloatNullableFilter;
};

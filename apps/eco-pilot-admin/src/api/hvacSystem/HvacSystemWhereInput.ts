import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HvacSystemWhereInput = {
  building?: BuildingWhereUniqueInput;
  id?: StringFilter;
  maintenanceDate?: DateTimeNullableFilter;
  status?: "Option1";
  typeField?: StringNullableFilter;
};

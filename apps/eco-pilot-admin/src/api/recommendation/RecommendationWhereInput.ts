import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecommendationWhereInput = {
  building?: BuildingWhereUniqueInput;
  dateRecommended?: DateTimeNullableFilter;
  id?: StringFilter;
  implemented?: BooleanNullableFilter;
  priority?: "Option1";
  recommendationText?: StringNullableFilter;
};

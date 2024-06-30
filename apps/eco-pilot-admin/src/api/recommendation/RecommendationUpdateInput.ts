import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";

export type RecommendationUpdateInput = {
  building?: BuildingWhereUniqueInput | null;
  dateRecommended?: Date | null;
  implemented?: boolean | null;
  priority?: "Option1" | null;
  recommendationText?: string | null;
};

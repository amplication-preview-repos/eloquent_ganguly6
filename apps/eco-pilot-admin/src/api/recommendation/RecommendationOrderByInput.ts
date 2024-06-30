import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  buildingId?: SortOrder;
  createdAt?: SortOrder;
  dateRecommended?: SortOrder;
  id?: SortOrder;
  implemented?: SortOrder;
  priority?: SortOrder;
  recommendationText?: SortOrder;
  updatedAt?: SortOrder;
};

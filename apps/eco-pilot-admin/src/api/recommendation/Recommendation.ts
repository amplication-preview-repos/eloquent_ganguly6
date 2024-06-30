import { Building } from "../building/Building";

export type Recommendation = {
  building?: Building | null;
  createdAt: Date;
  dateRecommended: Date | null;
  id: string;
  implemented: boolean | null;
  priority?: "Option1" | null;
  recommendationText: string | null;
  updatedAt: Date;
};

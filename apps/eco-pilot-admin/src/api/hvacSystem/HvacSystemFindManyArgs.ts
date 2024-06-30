import { HvacSystemWhereInput } from "./HvacSystemWhereInput";
import { HvacSystemOrderByInput } from "./HvacSystemOrderByInput";

export type HvacSystemFindManyArgs = {
  where?: HvacSystemWhereInput;
  orderBy?: Array<HvacSystemOrderByInput>;
  skip?: number;
  take?: number;
};

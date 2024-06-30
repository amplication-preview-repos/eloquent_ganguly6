import { HvacSystem as THvacSystem } from "../api/hvacSystem/HvacSystem";

export const HVACSYSTEM_TITLE_FIELD = "typeField";

export const HvacSystemTitle = (record: THvacSystem): string => {
  return record.typeField?.toString() || String(record.id);
};

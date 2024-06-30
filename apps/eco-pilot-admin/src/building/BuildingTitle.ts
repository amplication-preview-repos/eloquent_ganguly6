import { Building as TBuilding } from "../api/building/Building";

export const BUILDING_TITLE_FIELD = "name";

export const BuildingTitle = (record: TBuilding): string => {
  return record.name?.toString() || String(record.id);
};

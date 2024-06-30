import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { BUILDING_TITLE_FIELD } from "./BuildingTitle";

export const BuildingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="builtYear" source="builtYear" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="totalFloors" source="totalFloors" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EnergyConsumption"
          target="buildingId"
          label="EnergyConsumptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="building"
              source="building.id"
              reference="Building"
            >
              <TextField source={BUILDING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="electricityUsage" source="electricityUsage" />
            <TextField label="gasUsage" source="gasUsage" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="waterUsage" source="waterUsage" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="HvacSystem"
          target="buildingId"
          label="HVACSystems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="building"
              source="building.id"
              reference="Building"
            >
              <TextField source={BUILDING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="maintenanceDate" source="maintenanceDate" />
            <TextField label="status" source="status" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Recommendation"
          target="buildingId"
          label="Recommendations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="building"
              source="building.id"
              reference="Building"
            >
              <TextField source={BUILDING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateRecommended" source="dateRecommended" />
            <TextField label="ID" source="id" />
            <BooleanField label="implemented" source="implemented" />
            <TextField label="priority" source="priority" />
            <TextField label="recommendationText" source="recommendationText" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

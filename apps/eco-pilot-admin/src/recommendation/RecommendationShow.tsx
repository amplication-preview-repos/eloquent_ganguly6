import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { BUILDING_TITLE_FIELD } from "../building/BuildingTitle";

export const RecommendationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

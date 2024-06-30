import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { BUILDING_TITLE_FIELD } from "../building/BuildingTitle";

export const RecommendationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recommendations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { BuildingTitle } from "../building/BuildingTitle";

export const RecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="building.id"
          reference="Building"
          label="building"
        >
          <SelectInput optionText={BuildingTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateRecommended" source="dateRecommended" />
        <BooleanInput label="implemented" source="implemented" />
        <SelectInput
          source="priority"
          label="priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="recommendationText"
          multiline
          source="recommendationText"
        />
      </SimpleForm>
    </Create>
  );
};

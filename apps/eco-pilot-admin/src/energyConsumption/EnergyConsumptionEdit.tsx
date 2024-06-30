import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BuildingTitle } from "../building/BuildingTitle";

export const EnergyConsumptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="building.id"
          reference="Building"
          label="building"
        >
          <SelectInput optionText={BuildingTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="electricityUsage" source="electricityUsage" />
        <NumberInput label="gasUsage" source="gasUsage" />
        <NumberInput label="waterUsage" source="waterUsage" />
      </SimpleForm>
    </Edit>
  );
};

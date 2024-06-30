import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EnergyConsumptionTitle } from "../energyConsumption/EnergyConsumptionTitle";
import { HvacSystemTitle } from "../hvacSystem/HvacSystemTitle";
import { RecommendationTitle } from "../recommendation/RecommendationTitle";

export const BuildingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <NumberInput step={1} label="builtYear" source="builtYear" />
        <ReferenceArrayInput
          source="energyConsumptions"
          reference="EnergyConsumption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EnergyConsumptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="hvacSystems"
          reference="HvacSystem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HvacSystemTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="recommendations"
          reference="Recommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="totalFloors" source="totalFloors" />
      </SimpleForm>
    </Edit>
  );
};

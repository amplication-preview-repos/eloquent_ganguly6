/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EnergyConsumptionListRelationFilter } from "../../energyConsumption/base/EnergyConsumptionListRelationFilter";
import { HvacSystemListRelationFilter } from "../../hvacSystem/base/HvacSystemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../../recommendation/base/RecommendationListRelationFilter";

@InputType()
class BuildingWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  builtYear?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => EnergyConsumptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EnergyConsumptionListRelationFilter)
  @IsOptional()
  @Field(() => EnergyConsumptionListRelationFilter, {
    nullable: true,
  })
  energyConsumptions?: EnergyConsumptionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => HvacSystemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HvacSystemListRelationFilter)
  @IsOptional()
  @Field(() => HvacSystemListRelationFilter, {
    nullable: true,
  })
  hvacSystems?: HvacSystemListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RecommendationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecommendationListRelationFilter)
  @IsOptional()
  @Field(() => RecommendationListRelationFilter, {
    nullable: true,
  })
  recommendations?: RecommendationListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  totalFloors?: IntNullableFilter;
}

export { BuildingWhereInput as BuildingWhereInput };

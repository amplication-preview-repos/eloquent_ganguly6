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
import { BuildingWhereUniqueInput } from "../../building/base/BuildingWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumHvacSystemStatus } from "./EnumHvacSystemStatus";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class HvacSystemWhereInput {
  @ApiProperty({
    required: false,
    type: () => BuildingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereUniqueInput)
  @IsOptional()
  @Field(() => BuildingWhereUniqueInput, {
    nullable: true,
  })
  building?: BuildingWhereUniqueInput;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  maintenanceDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumHvacSystemStatus,
  })
  @IsEnum(EnumHvacSystemStatus)
  @IsOptional()
  @Field(() => EnumHvacSystemStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  typeField?: StringNullableFilter;
}

export { HvacSystemWhereInput as HvacSystemWhereInput };
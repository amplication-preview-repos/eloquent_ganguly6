/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Building } from "./Building";
import { BuildingCountArgs } from "./BuildingCountArgs";
import { BuildingFindManyArgs } from "./BuildingFindManyArgs";
import { BuildingFindUniqueArgs } from "./BuildingFindUniqueArgs";
import { CreateBuildingArgs } from "./CreateBuildingArgs";
import { UpdateBuildingArgs } from "./UpdateBuildingArgs";
import { DeleteBuildingArgs } from "./DeleteBuildingArgs";
import { EnergyConsumptionFindManyArgs } from "../../energyConsumption/base/EnergyConsumptionFindManyArgs";
import { EnergyConsumption } from "../../energyConsumption/base/EnergyConsumption";
import { HvacSystemFindManyArgs } from "../../hvacSystem/base/HvacSystemFindManyArgs";
import { HvacSystem } from "../../hvacSystem/base/HvacSystem";
import { RecommendationFindManyArgs } from "../../recommendation/base/RecommendationFindManyArgs";
import { Recommendation } from "../../recommendation/base/Recommendation";
import { BuildingService } from "../building.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Building)
export class BuildingResolverBase {
  constructor(
    protected readonly service: BuildingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "read",
    possession: "any",
  })
  async _buildingsMeta(
    @graphql.Args() args: BuildingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Building])
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "read",
    possession: "any",
  })
  async buildings(
    @graphql.Args() args: BuildingFindManyArgs
  ): Promise<Building[]> {
    return this.service.buildings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Building, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "read",
    possession: "own",
  })
  async building(
    @graphql.Args() args: BuildingFindUniqueArgs
  ): Promise<Building | null> {
    const result = await this.service.building(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Building)
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "create",
    possession: "any",
  })
  async createBuilding(
    @graphql.Args() args: CreateBuildingArgs
  ): Promise<Building> {
    return await this.service.createBuilding({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Building)
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async updateBuilding(
    @graphql.Args() args: UpdateBuildingArgs
  ): Promise<Building | null> {
    try {
      return await this.service.updateBuilding({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Building)
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "delete",
    possession: "any",
  })
  async deleteBuilding(
    @graphql.Args() args: DeleteBuildingArgs
  ): Promise<Building | null> {
    try {
      return await this.service.deleteBuilding(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [EnergyConsumption], {
    name: "energyConsumptions",
  })
  @nestAccessControl.UseRoles({
    resource: "EnergyConsumption",
    action: "read",
    possession: "any",
  })
  async findEnergyConsumptions(
    @graphql.Parent() parent: Building,
    @graphql.Args() args: EnergyConsumptionFindManyArgs
  ): Promise<EnergyConsumption[]> {
    const results = await this.service.findEnergyConsumptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [HvacSystem], { name: "hvacSystems" })
  @nestAccessControl.UseRoles({
    resource: "HvacSystem",
    action: "read",
    possession: "any",
  })
  async findHvacSystems(
    @graphql.Parent() parent: Building,
    @graphql.Args() args: HvacSystemFindManyArgs
  ): Promise<HvacSystem[]> {
    const results = await this.service.findHvacSystems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Recommendation], { name: "recommendations" })
  @nestAccessControl.UseRoles({
    resource: "Recommendation",
    action: "read",
    possession: "any",
  })
  async findRecommendations(
    @graphql.Parent() parent: Building,
    @graphql.Args() args: RecommendationFindManyArgs
  ): Promise<Recommendation[]> {
    const results = await this.service.findRecommendations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
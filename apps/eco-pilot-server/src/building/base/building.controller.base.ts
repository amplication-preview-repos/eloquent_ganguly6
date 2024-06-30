/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BuildingService } from "../building.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BuildingCreateInput } from "./BuildingCreateInput";
import { Building } from "./Building";
import { BuildingFindManyArgs } from "./BuildingFindManyArgs";
import { BuildingWhereUniqueInput } from "./BuildingWhereUniqueInput";
import { BuildingUpdateInput } from "./BuildingUpdateInput";
import { EnergyConsumptionFindManyArgs } from "../../energyConsumption/base/EnergyConsumptionFindManyArgs";
import { EnergyConsumption } from "../../energyConsumption/base/EnergyConsumption";
import { EnergyConsumptionWhereUniqueInput } from "../../energyConsumption/base/EnergyConsumptionWhereUniqueInput";
import { HvacSystemFindManyArgs } from "../../hvacSystem/base/HvacSystemFindManyArgs";
import { HvacSystem } from "../../hvacSystem/base/HvacSystem";
import { HvacSystemWhereUniqueInput } from "../../hvacSystem/base/HvacSystemWhereUniqueInput";
import { RecommendationFindManyArgs } from "../../recommendation/base/RecommendationFindManyArgs";
import { Recommendation } from "../../recommendation/base/Recommendation";
import { RecommendationWhereUniqueInput } from "../../recommendation/base/RecommendationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BuildingControllerBase {
  constructor(
    protected readonly service: BuildingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Building })
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBuilding(
    @common.Body() data: BuildingCreateInput
  ): Promise<Building> {
    return await this.service.createBuilding({
      data: data,
      select: {
        address: true,
        builtYear: true,
        createdAt: true,
        id: true,
        name: true,
        totalFloors: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Building] })
  @ApiNestedQuery(BuildingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async buildings(@common.Req() request: Request): Promise<Building[]> {
    const args = plainToClass(BuildingFindManyArgs, request.query);
    return this.service.buildings({
      ...args,
      select: {
        address: true,
        builtYear: true,
        createdAt: true,
        id: true,
        name: true,
        totalFloors: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Building })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async building(
    @common.Param() params: BuildingWhereUniqueInput
  ): Promise<Building | null> {
    const result = await this.service.building({
      where: params,
      select: {
        address: true,
        builtYear: true,
        createdAt: true,
        id: true,
        name: true,
        totalFloors: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Building })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBuilding(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() data: BuildingUpdateInput
  ): Promise<Building | null> {
    try {
      return await this.service.updateBuilding({
        where: params,
        data: data,
        select: {
          address: true,
          builtYear: true,
          createdAt: true,
          id: true,
          name: true,
          totalFloors: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Building })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBuilding(
    @common.Param() params: BuildingWhereUniqueInput
  ): Promise<Building | null> {
    try {
      return await this.service.deleteBuilding({
        where: params,
        select: {
          address: true,
          builtYear: true,
          createdAt: true,
          id: true,
          name: true,
          totalFloors: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/energyConsumptions")
  @ApiNestedQuery(EnergyConsumptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EnergyConsumption",
    action: "read",
    possession: "any",
  })
  async findEnergyConsumptions(
    @common.Req() request: Request,
    @common.Param() params: BuildingWhereUniqueInput
  ): Promise<EnergyConsumption[]> {
    const query = plainToClass(EnergyConsumptionFindManyArgs, request.query);
    const results = await this.service.findEnergyConsumptions(params.id, {
      ...query,
      select: {
        building: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        electricityUsage: true,
        gasUsage: true,
        id: true,
        updatedAt: true,
        waterUsage: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/energyConsumptions")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async connectEnergyConsumptions(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: EnergyConsumptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      energyConsumptions: {
        connect: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/energyConsumptions")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async updateEnergyConsumptions(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: EnergyConsumptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      energyConsumptions: {
        set: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/energyConsumptions")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async disconnectEnergyConsumptions(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: EnergyConsumptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      energyConsumptions: {
        disconnect: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/hvacSystems")
  @ApiNestedQuery(HvacSystemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HvacSystem",
    action: "read",
    possession: "any",
  })
  async findHvacSystems(
    @common.Req() request: Request,
    @common.Param() params: BuildingWhereUniqueInput
  ): Promise<HvacSystem[]> {
    const query = plainToClass(HvacSystemFindManyArgs, request.query);
    const results = await this.service.findHvacSystems(params.id, {
      ...query,
      select: {
        building: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        maintenanceDate: true,
        status: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hvacSystems")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async connectHvacSystems(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: HvacSystemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hvacSystems: {
        connect: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hvacSystems")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async updateHvacSystems(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: HvacSystemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hvacSystems: {
        set: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hvacSystems")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async disconnectHvacSystems(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: HvacSystemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hvacSystems: {
        disconnect: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/recommendations")
  @ApiNestedQuery(RecommendationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Recommendation",
    action: "read",
    possession: "any",
  })
  async findRecommendations(
    @common.Req() request: Request,
    @common.Param() params: BuildingWhereUniqueInput
  ): Promise<Recommendation[]> {
    const query = plainToClass(RecommendationFindManyArgs, request.query);
    const results = await this.service.findRecommendations(params.id, {
      ...query,
      select: {
        building: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateRecommended: true,
        id: true,
        implemented: true,
        priority: true,
        recommendationText: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recommendations")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async connectRecommendations(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        connect: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recommendations")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async updateRecommendations(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        set: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recommendations")
  @nestAccessControl.UseRoles({
    resource: "Building",
    action: "update",
    possession: "any",
  })
  async disconnectRecommendations(
    @common.Param() params: BuildingWhereUniqueInput,
    @common.Body() body: RecommendationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recommendations: {
        disconnect: body,
      },
    };
    await this.service.updateBuilding({
      where: params,
      data,
      select: { id: true },
    });
  }
}

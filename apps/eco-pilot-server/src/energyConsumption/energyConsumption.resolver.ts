import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EnergyConsumptionResolverBase } from "./base/energyConsumption.resolver.base";
import { EnergyConsumption } from "./base/EnergyConsumption";
import { EnergyConsumptionService } from "./energyConsumption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EnergyConsumption)
export class EnergyConsumptionResolver extends EnergyConsumptionResolverBase {
  constructor(
    protected readonly service: EnergyConsumptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

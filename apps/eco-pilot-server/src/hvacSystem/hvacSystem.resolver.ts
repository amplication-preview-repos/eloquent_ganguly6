import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HvacSystemResolverBase } from "./base/hvacSystem.resolver.base";
import { HvacSystem } from "./base/HvacSystem";
import { HvacSystemService } from "./hvacSystem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HvacSystem)
export class HvacSystemResolver extends HvacSystemResolverBase {
  constructor(
    protected readonly service: HvacSystemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

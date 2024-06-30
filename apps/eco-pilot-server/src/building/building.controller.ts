import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BuildingService } from "./building.service";
import { BuildingControllerBase } from "./base/building.controller.base";

@swagger.ApiTags("buildings")
@common.Controller("buildings")
export class BuildingController extends BuildingControllerBase {
  constructor(
    protected readonly service: BuildingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

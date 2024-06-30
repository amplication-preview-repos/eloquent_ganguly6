import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HvacSystemService } from "./hvacSystem.service";
import { HvacSystemControllerBase } from "./base/hvacSystem.controller.base";

@swagger.ApiTags("hvacSystems")
@common.Controller("hvacSystems")
export class HvacSystemController extends HvacSystemControllerBase {
  constructor(
    protected readonly service: HvacSystemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

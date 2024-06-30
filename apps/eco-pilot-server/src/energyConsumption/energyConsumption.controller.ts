import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnergyConsumptionService } from "./energyConsumption.service";
import { EnergyConsumptionControllerBase } from "./base/energyConsumption.controller.base";

@swagger.ApiTags("energyConsumptions")
@common.Controller("energyConsumptions")
export class EnergyConsumptionController extends EnergyConsumptionControllerBase {
  constructor(
    protected readonly service: EnergyConsumptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EnergyConsumptionModuleBase } from "./base/energyConsumption.module.base";
import { EnergyConsumptionService } from "./energyConsumption.service";
import { EnergyConsumptionController } from "./energyConsumption.controller";
import { EnergyConsumptionResolver } from "./energyConsumption.resolver";

@Module({
  imports: [EnergyConsumptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [EnergyConsumptionController],
  providers: [EnergyConsumptionService, EnergyConsumptionResolver],
  exports: [EnergyConsumptionService],
})
export class EnergyConsumptionModule {}

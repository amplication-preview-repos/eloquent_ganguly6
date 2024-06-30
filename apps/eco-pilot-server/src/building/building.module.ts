import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BuildingModuleBase } from "./base/building.module.base";
import { BuildingService } from "./building.service";
import { BuildingController } from "./building.controller";
import { BuildingResolver } from "./building.resolver";

@Module({
  imports: [BuildingModuleBase, forwardRef(() => AuthModule)],
  controllers: [BuildingController],
  providers: [BuildingService, BuildingResolver],
  exports: [BuildingService],
})
export class BuildingModule {}

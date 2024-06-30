import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HvacSystemModuleBase } from "./base/hvacSystem.module.base";
import { HvacSystemService } from "./hvacSystem.service";
import { HvacSystemController } from "./hvacSystem.controller";
import { HvacSystemResolver } from "./hvacSystem.resolver";

@Module({
  imports: [HvacSystemModuleBase, forwardRef(() => AuthModule)],
  controllers: [HvacSystemController],
  providers: [HvacSystemService, HvacSystemResolver],
  exports: [HvacSystemService],
})
export class HvacSystemModule {}

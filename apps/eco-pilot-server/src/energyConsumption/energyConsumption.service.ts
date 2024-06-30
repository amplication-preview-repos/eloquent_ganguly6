import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnergyConsumptionServiceBase } from "./base/energyConsumption.service.base";

@Injectable()
export class EnergyConsumptionService extends EnergyConsumptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

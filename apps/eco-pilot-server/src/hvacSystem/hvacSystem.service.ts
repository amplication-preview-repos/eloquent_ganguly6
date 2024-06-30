import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HvacSystemServiceBase } from "./base/hvacSystem.service.base";

@Injectable()
export class HvacSystemService extends HvacSystemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

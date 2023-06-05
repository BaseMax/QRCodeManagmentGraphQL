import { Module } from "@nestjs/common";
import { QRCodeService } from "./qrcode.service";
import { QRCodeResolver } from "./qrcode.resolver";
import { PrismaService } from "prisma/prisma.service";

@Module({
  providers: [QRCodeResolver, QRCodeService, PrismaService],
})
export class QRCodeModule {}

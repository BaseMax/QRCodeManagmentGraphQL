import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { QrCodeResolver } from './qr-code.resolver';

@Module({
  providers: [QrCodeResolver, QrCodeService]
})
export class QrCodeModule {}

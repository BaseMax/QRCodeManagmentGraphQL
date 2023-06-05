import { Test, TestingModule } from '@nestjs/testing';
import { QRCodeResolver } from './qrcode.resolver';
import { QRCodeService } from './qrcode.service';

describe('QrcodeResolver', () => {
  let resolver: QRCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QRCodeResolver, QRCodeService],
    }).compile();

    resolver = module.get<QRCodeResolver>(QRCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

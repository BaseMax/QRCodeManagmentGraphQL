import { Test, TestingModule } from '@nestjs/testing';
import { QrCodeResolver } from './qr-code.resolver';
import { QrCodeService } from './qr-code.service';

describe('QrCodeResolver', () => {
  let resolver: QrCodeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrCodeResolver, QrCodeService],
    }).compile();

    resolver = module.get<QrCodeResolver>(QrCodeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

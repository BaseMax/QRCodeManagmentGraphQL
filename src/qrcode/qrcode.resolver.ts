import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QRCodeService } from './qrcode.service';
import { QRCode } from './qrcode.model';

@Resolver(() => QRCode)
export class QRCodeResolver {
  constructor(private qrCodeService: QRCodeService) {}

  @Query(() => [QRCode], { name: 'getQRCodesByData' })
  async getQRCodesByData(@Args('data') data: string): Promise<QRCode[]> {
    return this.qrCodeService.getQRCodesByData(data);
  }

  @Mutation(() => QRCode, { name: 'generateQRCode' })
  async generateQRCode(@Args('text') text: string): Promise<QRCode> {
    return this.qrCodeService.generateQRCode(text);
  }

  @Query(() => QRCode, { name: 'convertQRCodeToData' })
  async convertQRCodeToData(@Args('qrCodeId') qrCodeId: string): Promise<QRCode | null> {
    return this.qrCodeService.convertQRCodeToData(qrCodeId);
  }

  @Mutation(() => QRCode, { name: 'saveQRCodeWithSlug' })
  async saveQRCodeWithSlug(@Args('slug') slug: string, @Args('text') text: string): Promise<QRCode> {
    return this.qrCodeService.saveQRCodeWithSlug(slug, text);
  }

  @Query(() => QRCode, { name: 'getQRCodeBySlug' })
  async getQRCodeBySlug(@Args('slug') slug: string): Promise<QRCode | null> {
    return this.qrCodeService.getQRCodeBySlug(slug);
  }

  @Query(() => [QRCode], { name: 'getAllQRCodes' })
  async getAllQRCodes(): Promise<QRCode[]> {
    return this.qrCodeService.getAllQRCodes();
  }

  @Query(() => QRCode, { name: 'getQRCodeById' })
  async getQRCodeById(@Args('qrCodeId') qrCodeId: string): Promise<QRCode | null> {
    return this.qrCodeService.getQRCodeById(qrCodeId);
  }

  @Mutation(() => QRCode, { name: 'convertTextToQRCode' })
  async convertTextToQRCode(@Args('text') text: string): Promise<QRCode> {
    return this.qrCodeService.convertTextToQRCode(text);
  }

  @Mutation(() => QRCode, { name: 'convertBinaryToQRCode' })
  async convertBinaryToQRCode(@Args('binaryData') binaryData: string): Promise<QRCode> {
    return this.qrCodeService.convertBinaryToQRCode(binaryData);
  }
}

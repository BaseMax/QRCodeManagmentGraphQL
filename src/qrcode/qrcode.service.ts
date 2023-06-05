import { Injectable } from '@nestjs/common';
import { QRCode } from './qrcode.model';
import * as QRCodeGenerator from 'qrcode';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class QRCodeService {
  constructor(private prisma: PrismaService) {}

  async getQRCodesByData(data: string): Promise<QRCode[]> {
    return this.prisma.qRCode.findMany({ where: { data } });
  }

  async generateQRCode(text: string): Promise<QRCode> {
    const image = await QRCodeGenerator.toDataURL(text);
    return await this.prisma.qRCode.create({
          data: { image, data: text, slug: '' },
        });
  }

  async convertQRCodeToData(qrCodeId: string): Promise<QRCode | null> {
    return this.prisma.qRCode.findUnique({ where: { id: qrCodeId } });
  }

  async saveQRCodeWithSlug(slug: string, text: string): Promise<QRCode> {
    const image = await QRCodeGenerator.toDataURL(text);
    return await this.prisma.qRCode.create({
          data: { image, data: text, slug },
        });
  }

  async getQRCodeBySlug(slug: string): Promise<QRCode | null> {
    return this.prisma.qRCode.findUnique({ where: { slug } });
  }

  async getAllQRCodes(): Promise<QRCode[]> {
    return this.prisma.qRCode.findMany();
  }

  async getQRCodeById(qrCodeId: string): Promise<QRCode | null> {
    return this.prisma.qRCode.findUnique({ where: { id: qrCodeId } });
  }

  async convertTextToQRCode(text: string): Promise<QRCode> {
    const image = await QRCodeGenerator.toDataURL(text);
    return await this.prisma.qRCode.create({
          data: { image, data: text, slug: '' },
        });
  }

  async convertBinaryToQRCode(binaryData: string): Promise<QRCode> {
    const buffer = Buffer.from(binaryData, 'binary');
    const image = await QRCodeGenerator.toDataURL(buffer);
    return await this.prisma.qRCode.create({
          data: { image, data: buffer.toString('base64'), slug: '' },
        });
  }
}

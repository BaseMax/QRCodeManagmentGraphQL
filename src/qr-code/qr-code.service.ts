import { Injectable } from '@nestjs/common';
import { CreateQrCodeInput } from './dto/create-qr-code.input';
import { UpdateQrCodeInput } from './dto/update-qr-code.input';

@Injectable()
export class QrCodeService {
  create(createQrCodeInput: CreateQrCodeInput) {
    return 'This action adds a new qrCode';
  }

  findAll() {
    return `This action returns all qrCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qrCode`;
  }

  update(id: number, updateQrCodeInput: UpdateQrCodeInput) {
    return `This action updates a #${id} qrCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} qrCode`;
  }
}

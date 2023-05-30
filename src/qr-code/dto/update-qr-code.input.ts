import { CreateQrCodeInput } from './create-qr-code.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateQrCodeInput extends PartialType(CreateQrCodeInput) {
  id: number;
}

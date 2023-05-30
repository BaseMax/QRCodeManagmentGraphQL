import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QrCodeService } from './qr-code.service';
import { CreateQrCodeInput } from './dto/create-qr-code.input';
import { UpdateQrCodeInput } from './dto/update-qr-code.input';

@Resolver('QrCode')
export class QrCodeResolver {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Mutation('createQrCode')
  create(@Args('createQrCodeInput') createQrCodeInput: CreateQrCodeInput) {
    return this.qrCodeService.create(createQrCodeInput);
  }

  @Query('qrCode')
  findAll() {
    return this.qrCodeService.findAll();
  }

  @Query('qrCode')
  findOne(@Args('id') id: number) {
    return this.qrCodeService.findOne(id);
  }

  @Mutation('updateQrCode')
  update(@Args('updateQrCodeInput') updateQrCodeInput: UpdateQrCodeInput) {
    return this.qrCodeService.update(updateQrCodeInput.id, updateQrCodeInput);
  }

  @Mutation('removeQrCode')
  remove(@Args('id') id: number) {
    return this.qrCodeService.remove(id);
  }
}

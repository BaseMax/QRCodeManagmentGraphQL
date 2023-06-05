import { CreateQrcodeInput } from './create-qrcode.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQrcodeInput extends PartialType(CreateQrcodeInput) {
  @Field(() => Int)
  id: number;
}

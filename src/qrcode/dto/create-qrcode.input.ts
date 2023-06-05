import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQrcodeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

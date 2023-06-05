import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class QRCode {
  @Field(() => ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  image: string;

  @Field()
  data: string;
}

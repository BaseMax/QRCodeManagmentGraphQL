import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QRCodeModule } from "./qrcode/qrcode.module";
import { join } from "path";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    QRCodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

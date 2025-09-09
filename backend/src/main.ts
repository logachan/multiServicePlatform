import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from "dotenv";
import { VersioningType } from '@nestjs/common';

dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  app.setGlobalPrefix("api")

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ["1"],
  })
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}
bootstrap();

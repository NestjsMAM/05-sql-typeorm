import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swaggers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initSwagger(app);

  await app.listen(3000);
  const logger = new Logger();
  logger.log(`Application is running on: ${await app.getUrl()}`);
  // console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API para pruebas')
    .setVersion('1.0.2')
     .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
}

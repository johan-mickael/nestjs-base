import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function configureSwagger(app: INestApplication) {
  const config: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
    .setTitle('Trying Nest API')
    .setDescription('A modular NestJS API with Swagger documentation')
    .setVersion('0.0.1')
    .addTag('app', 'General application endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

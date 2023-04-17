import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const globalPrefix = 'api';
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();

  const port_int = config.get('API_PORT_INT') || 3333;
  const port_ext = config.get('API_PORT_EXT') || 3333;
  const name = config.get('API_NAME') || 'NO-NAME';
  console.log(
    `process.env.SECRET_JWT ${process.env.SECRET_JWT}`,
    config.get('API_PORT_INT'),
  );

  const configSwagger = new DocumentBuilder()
    .setDescription(`Documentação ${name}`)
    .setVersion('1.0')
    .addTag('empresa')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
        name: 'JWT',
        description: 'teste..',
      },
      'JWT',
    )
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(port_int);

  Logger.log(
    `🚀🚀🚀 --- running on: http://localhost:${port_ext}/${globalPrefix}`,
    `${name} `,
  );
}
bootstrap();

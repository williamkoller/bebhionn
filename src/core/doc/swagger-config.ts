import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  setup(app: NestExpressApplication) {
    const options = new DocumentBuilder()
      .setTitle('Bebhionn Example')
      .setDescription('The Bebhionn Example API description')
      .setVersion('0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }
}

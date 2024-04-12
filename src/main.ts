import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigEnv } from '@/core/configure/config-env';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from '@/core/common/filters/http-exception.filter';
import {
  LoggingInterceptor,
  TimeoutInterceptor,
} from '@/core/common/interceptors';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerConfig } from '@/core/doc/swagger-config';

async function bootstrap() {
  const logger = new Logger('MainApplication');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  new SwaggerConfig().setup(app);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());

  const port = new ConfigEnv(new ConfigService()).port;
  await app.listen(port, () =>
    logger.log(`Server is running http://localhost:${port}/swagger`),
  );
}
bootstrap();

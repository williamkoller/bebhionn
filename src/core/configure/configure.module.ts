import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigEnv } from './config-env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.PATH_ENV,
    }),
  ],
  providers: [ConfigEnv],
  exports: [ConfigEnv],
})
export class ConfigureModule {}

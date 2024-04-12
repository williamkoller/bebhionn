import { ConfigService } from '@nestjs/config';

export class ConfigEnv {
  constructor(private readonly config: ConfigService) {}

  get port(): number {
    return this.config.get<number>('API_PORT') || 3003;
  }
}

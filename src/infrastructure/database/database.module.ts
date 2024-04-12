import { Module } from '@nestjs/common';
import { PrismaInstance } from '@/infrastructure/database/prisma/config/prisma-instance';
import { ArticleRepository } from '@/infrastructure/database/prisma/repositories/article/article.repository';

@Module({
  providers: [PrismaInstance, ArticleRepository],
  exports: [PrismaInstance, ArticleRepository],
})
export class DatabaseModule {}

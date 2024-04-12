import { Injectable } from '@nestjs/common';
import { PrismaInstance } from '@/infrastructure/database/prisma/config/prisma-instance';
import {
  AddArticleRepository,
  LoadArticleByFilterRepository,
} from '@/data/protocols/db/article';

@Injectable()
export class ArticleRepository
  implements AddArticleRepository, LoadArticleByFilterRepository
{
  constructor(private readonly prismaInstance: PrismaInstance) {}

  public async add(data: any): Promise<any> {
    return await this.prismaInstance.article.create({ data });
  }

  public async loadByFilter(filter: Record<string, string>): Promise<any> {
    return await this.prismaInstance.article.findMany({
      where: filter,
      orderBy: { id: 'asc' },
    });
  }
}

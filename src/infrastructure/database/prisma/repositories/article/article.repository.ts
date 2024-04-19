import { Injectable } from '@nestjs/common';
import { PrismaInstance } from '@/infrastructure/database/prisma/config/prisma-instance';
import {
  AddArticleRepository,
  LoadArticleByFilterRepository,
} from '@/data/protocols/db/article';
import { ArticleModel } from '@/domain/models/article/article';
import { Article } from '@prisma/client';

@Injectable()
export class ArticleRepository
  implements AddArticleRepository, LoadArticleByFilterRepository
{
  constructor(private readonly prismaInstance: PrismaInstance) {}

  public async add(articleModel: ArticleModel): Promise<Article> {
    return await this.prismaInstance.article.create({
      data: articleModel.props,
    });
  }

  public async loadByFilter(
    filter: Record<string, string>,
    orderBy: Record<string, string>,
  ): Promise<Article[]> {
    return await this.prismaInstance.article.findMany({
      where: filter,
      orderBy,
    });
  }
}

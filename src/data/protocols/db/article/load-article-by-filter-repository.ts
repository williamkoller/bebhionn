import { Article } from '@prisma/client';

export interface LoadArticleByFilterRepository {
  loadByFilter: (
    filter: Record<string, string>,
    order: Record<string, string>,
  ) => Promise<Article[]>;
}

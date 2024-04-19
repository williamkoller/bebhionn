import { ArticleModel } from '@/domain/models/article/article';
import { Article } from '@prisma/client';

export interface AddArticleRepository {
  add: (data: ArticleModel) => Promise<Article>;
}

import { ArticleModel, ArticleProps } from '@/domain/models/article/article';
import { ArticleRepository } from './article.repository';
import { PrismaInstance } from '@/infrastructure/database/prisma/config/prisma-instance';

describe('ArticleRepository - Unit Test', () => {
  let prismaInstanceMock: PrismaInstance;
  let articleRepository: ArticleRepository;

  beforeEach(() => {
    prismaInstanceMock = {
      article: {
        create: jest.fn(),
        findMany: jest.fn(),
      },
    } as unknown as PrismaInstance;

    articleRepository = new ArticleRepository(prismaInstanceMock);
  });

  describe('add', () => {
    it('should add a new article', async () => {
      const articleProps: ArticleProps = {
        content: 'Test Content',
        title: 'Test Article',
        slug: 'test-article',
      };

      const articleModel = new ArticleModel(articleProps);

      await articleRepository.add(articleModel);

      expect(prismaInstanceMock.article.create).toHaveBeenCalledTimes(1);
      expect(prismaInstanceMock.article.create).toHaveBeenCalledWith({
        data: articleModel.props,
      });
    });
  });

  describe('loadByFilter', () => {
    it('should load articles by filter', async () => {
      const filter = { published: '2022-01-01' };
      const orderBy = { id: 'asc' };

      await articleRepository.loadByFilter(filter, orderBy);

      expect(prismaInstanceMock.article.findMany).toHaveBeenCalledTimes(1);
      expect(prismaInstanceMock.article.findMany).toHaveBeenCalledWith({
        where: filter,
        orderBy,
      });
    });
  });
});

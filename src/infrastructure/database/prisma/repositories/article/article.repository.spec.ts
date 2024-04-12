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
      const articleData = { title: 'Test Article' };

      await articleRepository.add(articleData);

      expect(prismaInstanceMock.article.create).toHaveBeenCalledTimes(1);
      expect(prismaInstanceMock.article.create).toHaveBeenCalledWith({
        data: articleData,
      });
    });
  });

  describe('loadByFilter', () => {
    it('should load articles by filter', async () => {
      const filter = { published: '2022-01-01' };

      await articleRepository.loadByFilter(filter);

      expect(prismaInstanceMock.article.findMany).toHaveBeenCalledTimes(1);
      expect(prismaInstanceMock.article.findMany).toHaveBeenCalledWith({
        where: filter,
        orderBy: { id: 'asc' },
      });
    });
  });
});

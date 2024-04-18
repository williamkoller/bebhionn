import { ArticleModel, ArticleProps } from './article';

describe('ArticleModel - Unit Test', () => {
  it('should de defined', () => {
    const articleProps = {
      title: 'any_title',
      content: 'any_content',
      slug: 'any-slug',
    };
    const articleModel = ArticleModel.create(articleProps);
    expect(articleModel).toBeDefined();
  });

  it('should create ArticleModel instance with incremented id', () => {
    const articleProps: ArticleProps = {
      title: 'Test Title',
      content: 'Test Content',
      slug: 'test-slug',
    };

    const article = new ArticleModel(articleProps, 1);

    expect(article.id).toBe(1);
    expect(article.title).toBe('Test Title');
    expect(article.content).toBe('Test Content');
    expect(article.slug).toBe('test-slug');
  });

  it('should update title', () => {
    const articleProps: ArticleProps = {
      title: 'Test Title',
      content: 'Test Content',
      slug: 'test-slug',
    };

    const article = new ArticleModel(articleProps);
    article.updateTitle('New Title');

    expect(article.title).toBe('New Title');
  });

  it('should update content', () => {
    const articleProps: ArticleProps = {
      title: 'Test Title',
      content: 'Test Content',
      slug: 'test-slug',
    };

    const article = new ArticleModel(articleProps);
    article.updateContent('New Content');

    expect(article.content).toBe('New Content');
  });

  it('should update slug', () => {
    const articleProps: ArticleProps = {
      title: 'Test Title',
      content: 'Test Content',
      slug: 'test-slug',
    };

    const article = new ArticleModel(articleProps);
    article.updateSlug('new-slug');

    expect(article.slug).toBe('new-slug');
  });
});

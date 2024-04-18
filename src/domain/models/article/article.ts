import { BaseModel } from '../base/base';

export type ArticleProps = {
  title: string;
  content: string;
  slug: string;
};

export class ArticleModel extends BaseModel<ArticleProps> {
  updateTitle(title: string) {
    this.title = title;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  updateContent(content: string) {
    this.content = content;
  }

  get content() {
    return this.props.content;
  }

  private set content(value: string) {
    this.props.content = value;
  }

  updateSlug(slug: string) {
    this.slug = slug;
  }

  get slug() {
    return this.props.slug;
  }

  private set slug(value: string) {
    this.props.slug = value;
  }
}

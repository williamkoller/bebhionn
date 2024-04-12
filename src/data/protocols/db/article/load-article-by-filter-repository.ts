export interface LoadArticleByFilterRepository {
  loadByFilter: (filter: Record<string, any>) => Promise<any>;
}

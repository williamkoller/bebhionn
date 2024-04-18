export interface LoadArticleByFilterRepository {
  loadByFilter: (
    filter: Record<string, string>,
    order: Record<string, string>,
  ) => Promise<any>;
}

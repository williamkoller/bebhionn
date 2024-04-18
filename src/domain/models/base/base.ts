export class BaseModel<T> {
  private static nextId?: number = 1;
  public readonly id: number;
  public props: T;
  public constructor(props: T, id?: number) {
    this.id = id;
    this.props = {
      ...props,
    };
  }

  static create<T>(props: T): BaseModel<T> {
    const baseModel = new BaseModel(props, BaseModel.nextId);
    BaseModel.nextId++;
    return baseModel;
  }

  public toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

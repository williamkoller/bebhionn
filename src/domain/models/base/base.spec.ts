import { BaseModel } from './base';

describe('BaseModel', () => {
  it('should create BaseModel instance with incremented id', () => {
    type TestProps = {
      value: string;
    };

    const model1 = BaseModel.create<TestProps>({ value: 'Test1' });
    const model2 = BaseModel.create<TestProps>({ value: 'Test2' });

    expect(model1.id).toBe(1);
    expect(model2.id).toBe(2);
  });

  it('should serialize to JSON correctly', () => {
    type TestProps = {
      name: string;
      age: number;
    };

    const model = BaseModel.create<TestProps>({ name: 'John', age: 30 });

    expect(model.toJSON()).toEqual({ id: 3, name: 'John', age: 30 });
  });
});

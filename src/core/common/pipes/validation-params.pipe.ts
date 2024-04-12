import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class ValidationParamsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('Parameters are required.');
    }

    if (metadata.type === 'query') {
      const queryParams = Object.entries(value);
      for (const [key, param] of queryParams) {
        if (!param) {
          throw new BadRequestException(
            `Query parameter '${key}' cannot be empty.`,
          );
        }
      }
    }

    if (metadata.type === 'param') {
      const routeParams = Object.entries(value);
      for (const [key, param] of routeParams) {
        if (!param) {
          throw new BadRequestException(
            `Route parameter '${key}' cannot be empty.`,
          );
        }
      }
    }

    return value;
  }
}

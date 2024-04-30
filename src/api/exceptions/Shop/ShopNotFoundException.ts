import { NotFoundError } from 'routing-controllers';

export class ShopNotFoundException extends NotFoundError {
  constructor() {
    super('Shop not found!');
  }
}

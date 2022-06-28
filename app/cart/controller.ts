import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ShoppingCartService from 'ember-quickstart/shopping-cart-service/service';
//import {default as CartService} from './service';

export default class Cart extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @service shoppingCartService!: ShoppingCartService;
  model!: { price: number }[];
  get subtotal() {
    return this.shoppingCartService.items.reduce(
      (
        acc: any,
        item: {
          count: any;
          price: any;
        }
      ) => {
        return acc + item.price.current * item.count;
      },
      0
    );
  }
  get tax() {
    return 0.09 * this.subtotal;
  }
  get total() {
    return this.subtotal + this.tax;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    cart: Cart;
  }
}

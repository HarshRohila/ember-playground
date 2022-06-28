import DS from 'ember-data';
import { attr } from '@ember-data/model';

export default class ShoppingCart extends DS.Model.extend({}) {
  // normal class body definition here
  @attr() items!: any[];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'shopping-cart': ShoppingCart;
  }
}

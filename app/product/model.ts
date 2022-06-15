import { attr } from '@ember-data/model';
import DS from 'ember-data';

export default class Product extends DS.Model.extend({}) {
  @attr('string') name!: string;
  @attr() price!: Price;
  @attr() description!: string;
  @attr() features!: string[];
  @attr() colors!: Colors[];
}
interface Price {
  original: number;
  current: number;
}

interface Colors {
  color: string;
  image: string;
}
// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    product: Product;
  }
}

import transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { products } from 'ember-quickstart/data/product';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
model(params: object, transition: transition<unknown>): unknown {
  console.log(products);
  
  return products;
}
}
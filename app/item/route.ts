import transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { products } from 'ember-quickstart/data/product';

export default class Item extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(params: object): unknown {
    const 
    {
      //@ts-ignore
      item_id
    }=params;
    const product = products.find(({ id }) => id === item_id);
    console.log(product);
    
    return product;
  }
}

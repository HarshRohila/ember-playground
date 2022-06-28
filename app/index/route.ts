import transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
//import { products } from 'ember-quickstart/data/product';
import { Registry as Services } from '@ember/service';

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @service store!: Services['store'];

  model() {
    return this.store.findAll('product');
  }
}

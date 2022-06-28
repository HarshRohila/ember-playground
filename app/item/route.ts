//import { default } from '@ember/controller';
import transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { Registry as Services } from '@ember/service';

import { products } from 'ember-quickstart/data/product';

export default class Item extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @service store!: Services['store'];

  model(params: { item_id: string | number }) {
    return this.store.findRecord('product', params.item_id);
  }
}

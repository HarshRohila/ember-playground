//import { default } from '@ember/controller';
import transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { Registry as Services } from '@ember/service';

import { products } from 'ember-quickstart/data/product';

export default class Item extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  // model(params: object): unknown {
  //   const
  //   {
  //     //@ts-ignore
  //     item_id
  //   }=params;
  //   const product = products.find(({ id }) => id === item_id);
  //   /home/saif0660/projects/ember-playground/app/item//console.log(product);

  //   return product;
  // }

  @service store!: Services['store'];

  model(params: { item_id: string | number }) {
    return this.store.findRecord('product', params.item_id);
  }
  // setupController(controller: default, model: unknown, transition: transition<unknown>): void {
  //   super.setupController(controller,model,transition);
  //   controller.color=model.colors[0].color;
  // }
}

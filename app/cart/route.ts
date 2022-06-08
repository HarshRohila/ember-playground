
import Route from '@ember/routing/route';

export default class Cart extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model(){
  const items = [{price:10},{price:15}];
  return items;
  }
  
}

import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { Registry as Services } from '@ember/service';

export default class Posts extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @service store!: Services['store'];

  model() {
    return this.store.findAll('post');
  }
}

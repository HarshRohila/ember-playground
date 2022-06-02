import DS from 'ember-data';
import { attr } from '@ember-data/model';
export default class Post extends DS.Model.extend({}) {
  // normal class body definition here
  @attr('string') title!: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    post: Post;
  }
}

import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class Item extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model!: {
    id: string;
    name: string;
    description: string;
    price: {
        original: number;
        current: number;
    };
    features: string[];
    colors: {
        color: string;
        image: string;
    }[]};
  
  @tracked color = this.model.colors[0]!.color;


  

  get productImage() {
    console.log(this.color);
    
    const color=  this.model.colors.find(({ color }) => color === this.color);
    console.log(color?.image);
    return this.model.colors.find(({ color }) => color === this.color)?.image;
  }

  @action
  onChangeColor(newColor: any) {
    this.color = newColor;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'item': Item;
  }
}

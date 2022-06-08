import Controller from '@ember/controller';

export default class Cart extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
model!:{ price: number; }[];
  get subtotal(){
    return this.model.reduce((acc: any,item: { price: any; })=>{
      return acc+item.price;
    },0);
  }
  get tax(){
    return 0.09*this.subtotal;
  }
  get total(){
    return this.subtotal+this.tax;
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'cart': Cart;
  }
}

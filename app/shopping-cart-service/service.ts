import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { Registry as Services } from '@ember/service';
import { NotFoundError } from '@ember-data/adapter/error';
import ShoppingCart from 'ember-quickstart/shopping-cart/model';
import { action } from '@ember/object';
class Item {
  @tracked count;

  name;
  color;
  image;
  price;

  constructor(item: {
    count: any;
    name: any;
    color: any;
    image: any;
    price: any;
  }) {
    this.count = item.count;
    this.name = item.name;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}
export default class ShoppingCartService extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  @service store!: Services['store'];
  @service router!: Services['router'];
  @tracked items: any[] = [];

  async init(...args: any[]) {
    //@ts-ignore
    super.init(...args);
    try {
      let shoppingCart = await this.store.findRecord('shopping-cart', 'me'); // => GET /shopping-cart/me
      this.items = shoppingCart.items;
    } catch (error) {
      if (error instanceof NotFoundError) {
        let shoppingCart = this.store.createRecord('shopping-cart', {
          items: [],
          id: 'me',
        });
        await shoppingCart.save(); //POST to '/shopping-carts'
        this.items = shoppingCart.items;
      } else {
        throw error;
      }
    }
  }
  toJson(item: any) {
    const id = item.id;
    item = item.serialize().data.attributes;
    item.id = id;
    return item;
  }

  @action
  addToCart(item: any) {
    item = this.toJson(item);
    let shoppingCart = this.store.peekRecord('shopping-cart', 'me');
    if (!shoppingCart) return;
    shoppingCart.items = [...shoppingCart.items, item];
    this.items = shoppingCart.items;
    //console.log(shoppingCart);
    shoppingCart.save(); // --->post request
  }
  @action
  deleteFromCart(id: number) {
    let shoppingCart = this.store.peekRecord('shopping-cart', 'me');
    if (!shoppingCart) return;
    shoppingCart.items = shoppingCart.items.filter((item) => item.id != id);
    this.items = shoppingCart.items;
    shoppingCart.isDeleted;
    shoppingCart.save();
  }

  //   addItem(item: any) {
  //     const existingItem = this.items.find(
  //       ({ name, color }: { name: any; color: any }) => {
  //         return name === item.name && color === item.color;
  //       }
  //     );

  //     if (existingItem) {
  //       existingItem.count += 1;
  //     } else {
  //       this.items = [
  //         ...this.items,
  //         new Item({
  //           ...item,
  //           count: 1,
  //         }),
  //       ];
  //     }
  //   }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'shopping-cart-service': ShoppingCartService;
  }
}

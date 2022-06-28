import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { Registry as Services } from '@ember/service';
import { NotFoundError } from '@ember-data/adapter/error';
import ShoppingCart from 'ember-quickstart/shopping-cart/model';
import { action } from '@ember/object';

export default class ShoppingCartService extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  @service store!: Services['store'];
  @service router!: Services['router'];
  @tracked items: any[] = [];
  @tracked totalCount: number = 0;

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

    const existingItem = shoppingCart.items.find((obj) => obj.id == item.id);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      shoppingCart.items = [...shoppingCart.items, { ...item, count: 1 }];
    }

    this.items = shoppingCart.items;
    debugger;

    this.totalItems();
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
    this.totalItems();
  }
  @action
  updateItemCount(item: { count: number }, event: { target: { value: any } }) {
    const count = event.target.value;
    console.log('updateItemCalled');
    let shoppingCart = this.store.peekRecord('shopping-cart', 'me');
    if (!shoppingCart) return;

    let itemNeedToUpdate = shoppingCart.items.find(
      //@ts-ignore
      (obj) => obj.id == item.id
    );
    if (count >= 0) {
      itemNeedToUpdate.count = count;
    } else {
      itemNeedToUpdate.count = 0;
    }
    this.items = shoppingCart.items;
    shoppingCart.save();
    this.totalItems();
  }
  @action
  totalItems() {
    let sum = 0;
    this.items.forEach((element) => {
      sum += Number(element.count);
    });
    this.totalCount = sum;
    console.log(this.totalCount);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'shopping-cart-service': ShoppingCartService;
  }
}

import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;

  name;
  color;
  image;
  price;

  constructor(item: { count: any; name: any; color: any; image: any; price: any; }) {
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
  @tracked itemList:any = [];

  // addItem(item:any) {
  //   this.itemList = [...this.itemList, item];
  // }
 
  addItem(item:any) {
    const existingItem = this.itemList.find(({ name, color}:{name:any,color:any}) => {
      return name === item.name && color === item.color;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [...this.itemList, new Item({
        ...item,
        count: 1,
      })];
    }

  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'shopping-cart-service': ShoppingCartService;
  }
}

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import ShoppingCartService from 'ember-quickstart/shopping-cart-service/service';

interface ProductDetailsArgs {
    name:any;
    color:any;
    colors:any;
    price:any;
}

export default class ProductDetails extends Component<ProductDetailsArgs> {
    @service shoppingCartService!:ShoppingCartService;
   @action
  addToCart() {
    const { name, color, colors, price } = this.args;
    this.shoppingCartService.addItem({
      name,
      color,
      image: colors.find((colorInfo: { color: any; }) => colorInfo.color === color).image,
      price: price.current,
    });
    // console.log("add item called");
    // console.log(this.shoppingCartService.itemList.length);
  }
}

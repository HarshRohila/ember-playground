import Component from '@glimmer/component';
import { products } from 'ember-quickstart/data/product';

interface ProductArgs {
    product:typeof products[0] ;

}

export default class Product extends Component<ProductArgs> {
    productImage = this.args.product.colors[0]!.image;
}

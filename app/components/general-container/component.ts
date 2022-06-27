import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import ShoppingCartService from 'ember-quickstart/shopping-cart-service/service';

interface GeneralContainerArgs {}

export default class GeneralContainer extends Component<GeneralContainerArgs> {
  @service shoppingCartService!: ShoppingCartService;
}

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import ShoppingCartService from 'ember-quickstart/shopping-cart-service/service';

interface GeneralContainerArgs {}

export default class GeneralContainer extends Component<GeneralContainerArgs> {
  @service shoppingCartService!: ShoppingCartService;

  @action
  totalItems() {
    let totalCount = 0;
    this.shoppingCartService.items.forEach((element) => {
      totalCount += element.count;
    });
    return totalCount;
  }
}

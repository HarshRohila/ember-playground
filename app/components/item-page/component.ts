import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface ItemPageArgs {
    item: {
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
}

export default class ItemPage extends Component<ItemPageArgs> {
    @tracked color =this.args.item.colors[0]!.color;

    get productImage() {
        const {item}=this.args;
        console.log(this.color);
        
        const color=  item.colors.find(({ color }) => color === this.color);
        console.log(color?.image);
        return item.colors.find(({ color }) => color === this.color)?.image;
      }
    
      @action
      onChangeColor(newColor: any) {
        this.color = newColor;
      }
    }


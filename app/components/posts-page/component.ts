import Component from '@glimmer/component';
// @ts-ignore
import podNames from 'ember-component-css/pod-names';

interface PostsPageArgs {}

export default class PostsPage extends Component<PostsPageArgs> {
  get styleNamespace() {
    return podNames['posts-page'];
  }
}

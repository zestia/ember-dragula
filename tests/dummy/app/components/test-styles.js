/* eslint-disable no-console */

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TestStylesComponent extends Component {
  listOne = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
  listTwo = [{ name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }];

  @action
  dropped() {
    console.log('Item Dropped');
  }

  @action
  dragged() {
    console.log('Item Dragged');
  }
}

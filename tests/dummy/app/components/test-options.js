/* eslint-disable no-console */

import Component from '@ember/component';
import { action } from '@ember/object';

export default class TestOptionsComponent extends Component {
  constructor() {
    super(...arguments);

    this.listOne = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
    this.listTwo = [{ name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }];
  }

  @action
  dropped() {
    console.log('Item Dropped');
  }

  @action
  dragged() {
    console.log('Item Dragged');
  }

  moves() {
    return false;
  }
}

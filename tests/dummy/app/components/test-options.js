/* eslint-disable no-console */

import Component from '@glimmer/component';

export default class TestOptionsComponent extends Component {
  listOne = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
  listTwo = [{ name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }];

  dropped() {
    console.log('Item Dropped');
  }

  dragged() {
    console.log('Item Dragged');
  }

  moves() {
    return false;
  }
}

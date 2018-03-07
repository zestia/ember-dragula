/* eslint-disable no-console */

import Component from '@ember/component';
import { A as emberA } from '@ember/array';

export default Component.extend({
  list: emberA([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ]),

  listTwo: emberA([
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' }
  ]),

  actions: {
    dropped() {
      console.log('Item Dropped');
    },

    dragged() {
      console.log('Item Dragged');
    }
  }
});

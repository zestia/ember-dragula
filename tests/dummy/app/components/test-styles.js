/* eslint-disable no-console */

import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('list', [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' }
    ]);

    this.set('listTwo', [
      { name: 'Item 4' },
      { name: 'Item 5' },
      { name: 'Item 6' }
    ]);
  },

  actions: {
    dropped() {
      console.log('Item Dropped');
    },

    dragged() {
      console.log('Item Dragged');
    }
  }
});

/* eslint-disable */

import Component from '@ember/component';
import { A as emberA} from '@ember/array';

export default Component.extend({

  list: emberA([
    {name: 'name1'},
    {name: 'name2'},
    {name: 'name3'}
  ]),

  listTwo: emberA([
    {name: 'name4'},
    {name: 'name5'},
    {name: 'name6'}
  ]),

  moves: function() {
    return false;
  },

  actions: {

    onDrop() {
      console.log('Item Dropped');
    },

    onDrag() {
      console.log('Item Dragged');
    }
  }
});

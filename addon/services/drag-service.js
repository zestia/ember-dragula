import Service from '@ember/service';
import { A as emberA } from '@ember/array';

export default Service.extend({

  init() {
    this._super(...arguments);
    this.set('draggableItems', emberA([]));
    this.set('drake', window.dragula());

  },

  getDrakeInstance() {
    return this.get('drake');
  },

  addItem(item, element) {
    const draggableItems = this.get('draggableItems');
    const drake = this.get('drake');

    this.set('draggableItems', draggableItems.addObject(item));
    drake.containers.push(element);
  },

  removeItem(item, element) {
    const draggableItems = this.get('draggableItems');
    const drake = this.get('drake');

    this.set('draggableItems', draggableItems.removeObject());
    drake.containers.removeObject(item);
  },

  getDraggableItems() {
    return this.get('draggableItems');
  }

});

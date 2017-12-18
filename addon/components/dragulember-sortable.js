import Ember from 'ember';
import Component from '@ember/component';
import layout from '../templates/components/dragulember-sortable';

export default Component.extend({
  layout,

  dragService: Ember.inject.service('drag-service'),


  init() {
    this._super(...arguments);
    this.setupHandlers();
  },


  setupHandlers() {
    const dragService = this.get('dragService');
    const drake = dragService.getDrakeInstance();
    let draggingObjectIndex = null;

    drake.on('drag', (el, source) => {
      this.draggingObjectIndex = this.domIndexOf(el, source);
    });

    drake.on('drop', (dropElm, target, source) => {
      const draggableItems = dragService.getDraggableItems();
      const fromIndex = this.get('draggingObjectIndex');

      const dropIndex = this.domIndexOf(dropElm, target);
      const sourceModel = draggableItems[drake.containers.indexOf(source)];
      const targetModel = draggableItems[drake.containers.indexOf(target)];

      this.sendAction('drop', fromIndex, dropIndex, sourceModel, targetModel);
      this.draggingObjectIndex = null;
    });
  },

  domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(parent.children, child);
  }
});

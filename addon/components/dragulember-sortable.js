import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  dragService: Ember.inject.service('drag-service'),


  init() {
    this._super(...arguments);
    this.set('drake', window.dragula());
    this.setupHandlers();
  },


  setupHandlers() {
    const dragService = this.get('dragService');
    const drake = this.get('drake');
    let draggingObjectIndex = null;

    drake.on('drag', (el, source) => {
      this.draggingObjectIndex = this.domIndexOf(el, source);
    });

    drake.on('drop', (dropElm, target, source) => {
      const fromIndex = this.get('draggingObjectIndex');
      const dropIndex = this.domIndexOf(dropElm, target);
      const sourceListIndex = drake.containers.indexOf(source);


      this.sendAction('drop', fromIndex, dropIndex, sourceListIndex);
      this.draggingObjectIndex = null;
    });
  },

  domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(parent.children, child);
  }
});

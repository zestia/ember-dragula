import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.set('drake', window.dragula());
    this.setupHandlers();
  },


  setupHandlers() {
    const drake = this.get('drake');

    drake.on('drag', (el, source) => {
      this.draggingObjectIndex = this.domIndexOf(el, source);
    });

    drake.on('drop', (dropElm, target, source) => {
      const dropIndex = this.domIndexOf(dropElm, target);
      const sourceListIndex = drake.containers.indexOf(source);
      const targetListIndex = drake.containers.indexOf(target);

      this.sendAction('drop', this.draggingObjectIndex, dropIndex, sourceListIndex, targetListIndex);
      this.draggingObjectIndex = null;
    });
  },

  domIndexOf(child, parent) {
    return Array.prototype.indexOf.call(parent.children, child);
  }
});

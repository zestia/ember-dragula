import Component from '@ember/component';
import layout from 'dragulember-sortable/templates/components/dragulember-sortable';
import { assign } from '@ember/polyfills';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('drake', window.dragula(assign({}, this.get('options'))));
    this.setupHandlers();
  },


  setupHandlers() {
    const drake = this.get('drake');

    drake.on('drag', (el, source) => {
      this.sendAction('dragStartAction', el, source);
    });

    drake.on('drop', (dropElm, target, source) =>{
      this.sendAction('dropEndAction', dropElm, source, target);
    });
  },

  willDestroyElement() {
    const drake = this.get('drake');
    drake.destroy();
  }
});

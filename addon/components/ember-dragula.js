import Component from '@ember/component';
import layout from 'ember-dragula/templates/components/ember-dragula';
import { assign } from '@ember/polyfills';
import { run } from '@ember/runloop';

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
  },

  actions: {
    addContainer(component) {
      run(() => {
        const element = component.get('element');
        const containers = this.get('drake.containers');
        containers.push(element);
      });
    },

    removeContainer(component) {
      run(() => {
        const element = component.get('element');
        const containers = this.get('drake.containers');
        const index = containers.indexOf(element);
        containers.splice(index, 1);
      });
    }

  }
});

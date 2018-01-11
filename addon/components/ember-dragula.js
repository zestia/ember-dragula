import Component from '@ember/component';
import layout from 'ember-dragula/templates/components/ember-dragula';
import { assign } from '@ember/polyfills';
import { run } from '@ember/runloop';

export default Component.extend({
  layout,

  events: [
    'drag',
    'dragend',
    'drop',
    'cancel',
    'remove',
    'shadow',
    'over',
    'out',
    'cloned'
  ],

  init() {
    this._super(...arguments);
    this.set('drake', window.dragula(assign({}, this.get('options'))));
    this.setupHandlers();
  },


  setupHandlers() {
    const drake = this.get('drake');

    this.events.forEach((event) => {
      drake.on(event, (...args) => {
        const action = this.get(`on-${event}`);
          if (typeof action === 'function') {
            action(drake, [...args]);
          }
      })
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

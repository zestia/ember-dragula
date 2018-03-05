import Component from '@ember/component';
import layout from '@zestia/ember-dragula/templates/components/ember-dragula';
import { assign } from '@ember/polyfills';
import { run } from '@ember/runloop';

export default Component.extend({
  layout,
  classNames: ['ember-dragula'],

  init() {
    this._super(...arguments);
    this.set('drake', window.dragula(assign({}, this.get('options'))));
    this.set('events', [
      'drag',
      'dragend',
      'drop',
      'cancel',
      'remove',
      'shadow',
      'over',
      'out',
      'cloned'
    ]);
    this._setupHandlers();
    this.get('on-init')(this.get('drake'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('drake').destroy();
  },

  'on-init'() {},

  _setupHandlers() {
    const drake = this.get('drake');

    this.get('events').forEach(event => {
      drake.on(event, (...args) => {
        const action = this.get(`on-${event}`);
        if (typeof action === 'function') {
          action(...args);
        }
      });
    });
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

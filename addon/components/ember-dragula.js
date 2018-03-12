import Component from '@ember/component';
import layout from '@zestia/ember-dragula/templates/components/ember-dragula';
import { assign } from '@ember/polyfills';

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
    this.getWithDefault('on-init', () => {})(this.get('drake'));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('drake').destroy();
  },

  actions: {
    addContainer(component) {
      const element = component.get('element');
      const containers = this.get('drake.containers');
      containers.push(element);
    },

    removeContainer(component) {
      const element = component.get('element');
      const containers = this.get('drake.containers');
      const index = containers.indexOf(element);
      containers.splice(index, 1);
    }
  },

  _setupHandlers() {
    this.get('events').forEach(event => {
      this.get('drake').on(event, (...args) => {
        this.getWithDefault(`on-${event}`, () => {})(...args);
      });
    });
  }
});

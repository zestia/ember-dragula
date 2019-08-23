import Component from '@ember/component';
import { assign } from '@ember/polyfills';
import layout from '@zestia/ember-dragula/templates/components/ember-dragula';
import { bind } from '@ember/runloop';
import dragula from 'dragula';

const { keys } = Object;

export default Component.extend({
  layout,

  classNames: ['ember-dragula'],

  init() {
    this._super(...arguments);

    this.drake = dragula(assign({}, this.options));

    this.events = {
      drag: 'onDrag',
      dragend: 'onDragEnd',
      drop: 'onDrop',
      cancel: 'onCancel',
      remove: 'onRemove',
      shadow: 'onShadow',
      over: 'onOver',
      out: 'onOut',
      cloned: 'onCloned',
      init: 'onInit'
    };

    this._setupHandlers();

    this._performAction('init', this.drake);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.drake.destroy();
  },

  actions: {
    addContainer(containerComponent) {
      this.drake.containers.push(containerComponent.element);
    },

    removeContainer(containerComponent) {
      this.drake.containers.splice(
        this.drake.containers.indexOf(containerComponent.element),
        1
      );
    }
  },

  _setupHandlers() {
    keys(this.events).forEach(name => {
      this.drake.on(name, bind(this, '_performAction', name));
    });
  },

  _performAction(name, ...args) {
    const action = this[this.events[name]];

    if (typeof action === 'function') {
      action(...args);
    }
  }
});

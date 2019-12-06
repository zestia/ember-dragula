import Component from '@ember/component';
import { assign } from '@ember/polyfills';
import layout from '@zestia/ember-dragula/templates/components/ember-dragula';
import { bind } from '@ember/runloop';
import { action } from '@ember/object';
import dragula from 'dragula';

const { keys } = Object;

export default class EmberDragula extends Component {
  layout = layout;
  tagName = '';

  init() {
    super.init(...arguments);

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
      cloned: 'onCloned'
    };

    this._setupHandlers();
    this._performAction('onReady', this.drake);
  }

  @action
  addContainer(element) {
    this.drake.containers.push(element);
  }

  @action
  removeContainer(element) {
    this.drake.containers.splice(this.drake.containers.indexOf(element), 1);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.drake.destroy();
  }

  _setupHandlers() {
    keys(this.events).forEach(name => {
      this.drake.on(name, bind(this, '_performAction', this.events[name]));
    });
  }

  _performAction(name, ...args) {
    const action = this[name];

    if (typeof action === 'function') {
      action(...args);
    }
  }
}

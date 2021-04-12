import Component from '@glimmer/component';
import { bind } from '@ember/runloop';
import { action } from '@ember/object';
import dragula from 'dragula';
import { modifier } from 'ember-modifier';

const { keys } = Object;

const events = {
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

export default class EmberDragula extends Component {
  static events = events;

  constructor() {
    super(...arguments);

    this.drake = dragula(this.args.options);

    this._setupHandlers();
    this._invokeAction('onReady', this.drake);
  }

  handleDestroyElement = modifier(() => {
    return () => this.drake.destroy();
  });

  @action
  addContainer(element) {
    this.drake.containers.push(element);
  }

  @action
  removeContainer(element) {
    this.drake.containers.splice(this.drake.containers.indexOf(element), 1);
  }

  _setupHandlers() {
    keys(events).forEach((name) => {
      this.drake.on(name, bind(this, '_invokeAction', events[name]));
    });
  }

  _invokeAction(name, ...args) {
    const action = this.args[name];

    if (typeof action === 'function') {
      action(...args);
    }
  }
}

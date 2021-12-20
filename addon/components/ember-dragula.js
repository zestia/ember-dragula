import Component from '@glimmer/component';
import dragula from 'dragula';
import EmberDragulaContainer from './ember-dragula-container';

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

  EmberDragulaContainer = EmberDragulaContainer;

  constructor() {
    super(...arguments);

    this.drake = dragula({ ...this.args.options });

    this._setupHandlers();

    this.args.onReady?.(this.drake);
  }

  addContainer = (element) => {
    this.drake.containers.push(element);
  };

  removeContainer = (element) => {
    this.drake.containers.splice(this.drake.containers.indexOf(element), 1);
  };

  willDestroy() {
    super.willDestroy(...arguments);
    this.drake.destroy();
  }

  _setupHandlers() {
    keys(events).forEach((name) => {
      const handler = this.args[events[name]];

      if (typeof handler === 'function') {
        this.drake.on(name, handler);
      }
    });
  }
}

import Component from '@glimmer/component';
import dragula from 'dragula';
import { modifier } from 'ember-modifier';
import EmberDragulaContainer from './ember-dragula-container';
import { tracked } from '@glimmer/tracking';

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

  @tracked drake = null;

  dragula = modifier((element, [options]) => {
    this.drake = dragula(options);
    this._setupHandlers();
    this.args.onReady?.(this.drake);

    return () => this.drake.destroy();
  });

  _setupHandlers() {
    keys(events).forEach((name) => {
      const handler = this.args[events[name]];

      if (typeof handler === 'function') {
        this.drake.on(name, handler);
      }
    });
  }
}

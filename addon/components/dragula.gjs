import Component from '@glimmer/component';
import DragulaContainer from '@zestia/ember-dragula/components/dragula-container';
import dragula from 'dragula';
import { action } from '@ember/object';

const { keys } = Object;

export const events = {
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

export default class Dragula extends Component {
  #drake;

  constructor() {
    super(...arguments);

    this.#drake = dragula({ ...this.args.options });
    this._setupHandlers();
    this.args.onReady?.(this.#drake);
  }

  @action
  addContainer(element) {
    this.#drake.containers.push(element);
  }

  @action
  removeContainer(element) {
    this.#drake.containers.splice(this.#drake.containers.indexOf(element), 1);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.#drake.destroy();
  }

  _setupHandlers() {
    keys(events).forEach((name) => {
      const handler = this.args[events[name]];

      if (typeof handler === 'function') {
        this.#drake.on(name, handler);
      }
    });
  }

  <template>
    <div class="dragula" ...attributes {{this.dragula}}>
      {{#let
        (component
          DragulaContainer
          onInsert=this.addContainer
          onDestroy=this.removeContainer
        )
        as |Container|
      }}
        {{yield Container}}
      {{/let}}
    </div>
  </template>
}

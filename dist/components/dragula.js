import Component from '@glimmer/component';
import DragulaContainer from './dragula-container.js';
import dragula from 'dragula';
import { action } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { n } from 'decorator-transforms/runtime-esm';

const {
  keys
} = Object;
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
class Dragula extends Component {
  drake;
  constructor() {
    super(...arguments);
    this.drake = dragula({
      ...this.args.options
    });
    this._setupHandlers();
    this.args.onReady?.(this.drake);
  }
  addContainer(element) {
    this.drake.containers.push(element);
  }
  static {
    n(this.prototype, "addContainer", [action]);
  }
  removeContainer(element) {
    this.drake.containers.splice(this.drake.containers.indexOf(element), 1);
  }
  static {
    n(this.prototype, "removeContainer", [action]);
  }
  willDestroy() {
    super.willDestroy(...arguments);
    this.drake.destroy();
  }
  _setupHandlers() {
    keys(events).forEach(name => {
      const handler = this.args[events[name]];
      if (typeof handler === 'function') {
        this.drake.on(name, handler);
      }
    });
  }
  static {
    setComponentTemplate(precompileTemplate("<div class=\"dragula\" ...attributes {{this.dragula}}>\n  {{#let (component DragulaContainer onInsert=this.addContainer onDestroy=this.removeContainer) as |Container|}}\n    {{yield Container}}\n  {{/let}}\n</div>", {
      strictMode: true,
      scope: () => ({
        DragulaContainer
      })
    }), this);
  }
}

export { Dragula as default, events };
//# sourceMappingURL=dragula.js.map

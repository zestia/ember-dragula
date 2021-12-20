import Component from '@glimmer/component';
import Modifier from 'ember-modifier';

export default class EmberDragulaContainer extends Component {
  lifecycleHooks = class extends Modifier {
    didInstall() {
      this.args.named.didInstall(this.element);
    }

    willDestroy() {
      this.args.named.willDestroy(this.element);
      super.willDestroy(...arguments);
    }
  };
}

import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';

export default class EmberDragulaContainer extends Component {
  lifecycleActions = modifier((element) => {
    this.args.onInsert(element);
    return () => this.args.onDestroy(element);
  });
}

import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';

export default class DragulaContainer extends Component {
  lifecycle = modifier((element) => {
    this.args.onInsert(element);
    return () => this.args.onDestroy(element);
  });

  <template>
    <div class="dragula__container" {{this.lifecycle}} ...attributes>
      {{yield}}
    </div>
  </template>
}

import Component from "@ember/component";
import { classNames } from "@ember-decorators/component";
// @ts-ignore
import layout from "@zestia/ember-dragula/templates/components/ember-dragula-container";

@classNames("ember-dragula-container")
export default class EmberDragulaContainer extends Component.extend( {
  layout,
}) {
  public onInsert!: (container: EmberDragulaContainer) => void;
  public onDestroy!: (container: EmberDragulaContainer) => void;

  public didInsertElement(this: EmberDragulaContainer) {
    this._super(...arguments);
    this.onInsert(this);
  }

  public willDestroyElement(this: EmberDragulaContainer) {
    this._super(...arguments);
    this.onDestroy(this);
  }
}

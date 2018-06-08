import Component from "@ember/component";
// @ts-ignore
import layout from "@zestia/ember-dragula/templates/components/ember-dragula-container";

export default class EmberDragulaContainer extends Component.extend( {
  classNames: ["ember-dragula-container"],
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

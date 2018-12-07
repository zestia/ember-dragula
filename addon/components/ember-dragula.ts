import Component from "@ember/component";
import { assign } from "@ember/polyfills";
import { action } from "@ember-decorators/object";
import { classNames, attribute } from "@ember-decorators/component";
import { DragulaOptions, Drake } from "dragula";
import EmberDragulaContainer from "./ember-dragula-container";
// @ts-ignore
import layout from "@zestia/ember-dragula/templates/components/ember-dragula";

@classNames("ember-dragula")
export default class EmberDragula extends Component.extend( {
  layout,
}) {

  public drake!: Drake;
  public options?: DragulaOptions;
  public onInit?: (drake: any) => void;
  public onDrag?: (el?: HTMLElement, source?: HTMLElement) => void;
  public onDragend?: (el?: HTMLElement) => void;
  public onDrop?: (el?: HTMLElement, target?: HTMLElement, source?: HTMLElement, sibling?: HTMLElement) => void;
  public onCancel?: (el?: HTMLElement, container?: HTMLElement, source?: HTMLElement) => void;
  public onRemove?: (el?: HTMLElement, container?: HTMLElement, source?: HTMLElement) => void;
  public onShadow?: (el?: HTMLElement, container?: HTMLElement, source?: HTMLElement) => void;
  public onOver?: (el?: HTMLElement, container?: HTMLElement, source?: HTMLElement) => void;
  public onOut?: (el?: HTMLElement, container?: HTMLElement, source?: HTMLElement) => void;
  public onCloned?: (clone?: HTMLElement, original?: HTMLElement, type?: "mirror" | "copy" ) => void;

  private events!: string[];

  public init() {
    super.init();
    this.drake = (window as any).dragula(assign({}, this.options));
    this.events = [
      "drag",
      "dragend",
      "drop",
      "cancel",
      "remove",
      "shadow",
      "over",
      "out",
      "cloned",
    ];
    this.setupHandlers();
    if (this.onInit) {
      this.onInit(this.drake);
    }
  }

  public willDestroyElement(this: EmberDragula) {
    this._super(...arguments);
    this.drake.destroy();
  }

  @action
  public addContainer(this: EmberDragula, containerComponent: EmberDragulaContainer) {
    const element = containerComponent.element;
    const containers = this.drake.containers;
    containers.push(element);
  }

  @action
  public removeContainer(this: EmberDragula, containerComponent: EmberDragulaContainer) {
    const element = containerComponent.element;
    const containers = this.drake.containers;
    const index = containers.indexOf(element);
    containers.splice(index, 1);
  }

  private setupHandlers(this: EmberDragula) {
    this.events.forEach((event) => {
      this.drake.on(event, (...args: any[]) => {
        const camelEvent = this.capitalize(event);
        if ((this as any)[`on${camelEvent}`]) {
          (this as any)[`on${camelEvent}`](...args);
        }
      });
    });
  }

  private capitalize(event: string) {
    return event.charAt(0).toUpperCase() + event.slice(1);
  }
}

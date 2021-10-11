import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';

export default class EmberDragulaContainer extends Component {
  container = modifier((element, [drake]) => {
    drake.containers.push(element);
    return () => drake.containers.splice(drake.containers.indexOf(element), 1);
  });
}

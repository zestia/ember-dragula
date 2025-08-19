/* eslint-disable no-console */

import Component from '@glimmer/component';
import Dragula from '@zestia/ember-dragula/components/dragula';
import { hash } from '@ember/helper';

export default class TestOptionsComponent extends Component {
  listOne = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
  listTwo = [{ name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }];

  dropped() {
    console.log('Item Dropped');
  }

  dragged() {
    console.log('Item Dragged');
  }

  moves() {
    return false;
  }

  <template>
    <h2>
      Drag and drop with options
    </h2>

    <h3>
      Copy items
    </h3>

    <Dragula
      @options={{hash copy=true}}
      @onDrop={{this.dropped}}
      @onDrag={{this.dragged}}
      as |Container|
    >
      <Container class="list list-copy-1">
        {{#each this.listOne as |item|}}
          <div class="item">
            {{item.name}}
          </div>
        {{/each}}
      </Container>

      <Container class="list list-copy-2">
        {{#each this.listTwo as |item|}}
          <div class="item">
            {{item.name}}
          </div>
        {{/each}}
      </Container>
    </Dragula>

    <h3>
      Move disabled
    </h3>

    <Dragula
      @options={{hash moves=this.moves}}
      @onDrop={{this.dropped}}
      @onDrag={{this.dragged}}
      as |Container|
    >
      <Container class="list list-moves-1">
        {{#each this.listOne as |item|}}
          <div class="item">
            {{item.name}}
          </div>
        {{/each}}
      </Container>

      <Container class="list list-moves-2">
        {{#each this.listTwo as |item|}}
          <div class="item">
            {{item.name}}
          </div>
        {{/each}}
      </Container>
    </Dragula>
  </template>
}

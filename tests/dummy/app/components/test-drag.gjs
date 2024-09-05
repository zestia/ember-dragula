/* eslint-disable no-console */

import Component from '@glimmer/component';
import Dragula from '@zestia/ember-dragula/components/dragula';

export default class TestDragComponent extends Component {
  listOne = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
  listTwo = [{ name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }];

  dropped() {
    console.log('Item Dropped');
  }

  dragged() {
    console.log('Item Dragged');
  }

  <template>
    <h2>
      Basic Drag and Drop
    </h2>

    <Dragula @onDrop={{this.dropped}} @onDrag={{this.dragged}} as |Container|>
      <Container class="list list-1">
        {{#each this.listOne as |item|}}
          <div class="item">
            {{item.name}}
          </div>
        {{/each}}
      </Container>

      <Container class="list list-2">
        {{#each this.listTwo as |item|}}
          <div class="item">
            {{item.name}}
          </div>
        {{/each}}
      </Container>
    </Dragula>
  </template>
}

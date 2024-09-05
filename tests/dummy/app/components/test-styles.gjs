/* eslint-disable no-console */

import Component from '@glimmer/component';
import Dragula from '@zestia/ember-dragula/components/dragula';

export default class TestStylesComponent extends Component {
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
      Re-styled
    </h2>

    <Dragula @onDrop={{this.dropped}} @onDrag={{this.dragged}} as |Container|>
      <Container class="list">
        {{#each this.listOne as |item|}}
          <div class="item restyle">
            {{item.name}}
          </div>
        {{/each}}
      </Container>

      <Container class="list">
        {{#each this.listTwo as |item|}}
          <div class="item restyle">
            {{item.name}}
          </div>
        {{/each}}
      </Container>
    </Dragula>
  </template>
}

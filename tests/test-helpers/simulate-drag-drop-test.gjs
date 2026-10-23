import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hash } from '@ember/helper';
import Dragula from '#src/components/dragula';
import { simulateDrag } from '#src/test-helpers/simulate-drag-drop';

module('Integration | Test helper | simulate drag drop', function (hooks) {
  setupRenderingTest(hooks);

  test('simulating a drag', async function (assert) {
    assert.expect(2);

    const handleDrag = () => assert.step('drag');

    await render(
      <template>
        <Dragula @onDrag={{handleDrag}} as |Container|>
          <Container>
            <div class="item"></div>
          </Container>
        </Dragula>
      </template>
    );

    await simulateDrag(find('.item'));

    assert.verifySteps(['drag']);
  });

  test('simulating a drag past the slide factor', async function (assert) {
    assert.expect(3);

    const handleDrag = () => assert.step('drag');

    await render(
      <template>
        <Dragula
          @options={{hash slideFactorX=5 slideFactorY=5}}
          @onDrag={{handleDrag}}
          as |Container|
        >
          <Container>
            <div class="item"></div>
          </Container>
        </Dragula>
      </template>
    );

    await simulateDrag(find('.item'));

    assert.verifySteps([], 'does not move far enough by default');

    await simulateDrag(find('.item'), { slideFactorX: 5, slideFactorY: 5 });

    assert.verifySteps(['drag']);
  });
});

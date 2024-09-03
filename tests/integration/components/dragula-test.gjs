import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { find, render, rerender } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { fn } from '@ember/helper';
import { tracked } from '@glimmer/tracking';
import Dragula, { events } from '@zestia/ember-dragula/components/dragula';
const { keys } = Object;

module('Integration | Component | dragula', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    await render(hbs`<Dragula />`);

    assert.dom('.dragula').exists();
  });

  test('it emits dragula events as actions', async function (assert) {
    assert.expect(19);

    const testArgs = ['a', 'b', 'c', 'd'];

    let drake;

    const handleReady = (d) => (drake = d);

    const check = (name, ...args) => {
      assert.step(name);
      assert.deepEqual(args, testArgs);
    };

    await render(<template>
      <Dragula
        @onReady={{handleReady}}
        @onDrag={{fn check "drag"}}
        @onDragEnd={{fn check "dragEnd"}}
        @onDrop={{fn check "drop"}}
        @onCancel={{fn check "cancel"}}
        @onRemove={{fn check "remove"}}
        @onShadow={{fn check "shadow"}}
        @onOver={{fn check "over"}}
        @onOut={{fn check "out"}}
        @onCloned={{fn check "cloned"}}
      />
    </template>);

    keys(events).forEach((name) => {
      drake.emit(name, ...testArgs);
    });

    assert.verifySteps([
      'drag',
      'dragEnd',
      'drop',
      'cancel',
      'remove',
      'shadow',
      'over',
      'out',
      'cloned'
    ]);
  });

  test('it adds container to drake when container is added', async function (assert) {
    assert.expect(1);

    let drake;

    const handleReady = (d) => (drake = d);

    await render(<template>
      <Dragula @onReady={{handleReady}} as |Container|>
        <Container />
      </Dragula>
    </template>);

    assert.deepEqual(
      drake.containers[0],
      find('.dragula__container:nth-child(1)')
    );
  });

  test('it removes container from drake when container is removed', async function (assert) {
    assert.expect(2);

    let drake;

    const state = new (class {
      @tracked showContainer = true;
    })();

    const handleReady = (d) => (drake = d);

    await render(<template>
      <Dragula @onReady={{handleReady}} as |Container|>
        {{#if state.showContainer}}
          <Container />
        {{/if}}
      </Dragula>
    </template>);

    assert.deepEqual(
      drake.containers[0],
      find('.dragula__container:nth-child(1)')
    );

    state.showContainer = false;

    await rerender();

    assert.deepEqual(drake.containers, []);
  });

  test('tear down', async function (assert) {
    assert.expect(2);

    let drake;

    const state = new (class {
      @tracked show = true;
    })();

    const handleReady = (d) => (drake = d);

    await render(<template>
      {{#if state.show}}
        <Dragula @onReady={{handleReady}} />
      {{/if}}
    </template>);

    const originalDrakeDestroy = drake.destroy;

    drake.destroy = () => {
      assert.step('destroyed drake');
      originalDrakeDestroy();
    };

    state.show = false;

    await rerender();

    assert.verifySteps(
      ['destroyed drake'],
      'drake is torn down when the component is torn down'
    );
  });
});

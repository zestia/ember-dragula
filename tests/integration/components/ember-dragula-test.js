import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberDragula from '@zestia/ember-dragula/components/ember-dragula';
const { keys } = Object;

module('Integration | Component | ember-dragula', function (hooks) {
  setupRenderingTest(hooks);

  test('it emits dragula events as actions', async function (assert) {
    assert.expect(19);

    const testArgs = ['a', 'b', 'c', 'd'];

    let drake;

    this.set('ready', (d) => {
      drake = d;
    });

    this.set('test', (name, ...args) => {
      assert.step(name);
      assert.deepEqual(args, testArgs);
    });

    await this.render(hbs`
      <EmberDragula
        @onReady={{this.ready}}
        @onDrag={{fn this.test "drag"}}
        @onDragEnd={{fn this.test "dragEnd"}}
        @onDrop={{fn this.test "drop"}}
        @onCancel={{fn this.test "cancel"}}
        @onRemove={{fn this.test "remove"}}
        @onShadow={{fn this.test "shadow"}}
        @onOver={{fn this.test "over"}}
        @onOut={{fn this.test "out"}}
        @onCloned={{fn this.test "cloned"}} />
    `);

    keys(EmberDragula.events).forEach((name) => {
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

    this.set('ready', (d) => {
      drake = d;
    });

    await this.render(hbs`
      <EmberDragula @onReady={{this.ready}} as |d|>
        <d.Container />
      </EmberDragula>
    `);

    assert.deepEqual(
      drake.containers[0],
      find('.ember-dragula__container:nth-child(1)')
    );
  });

  test('it removes container from drake when container is removed', async function (assert) {
    assert.expect(2);

    let drake;

    this.set('ready', (d) => {
      drake = d;
    });

    this.set('renderContainer', true);

    await this.render(hbs`
      <EmberDragula @onReady={{this.ready}} as |d|>
        {{#if this.renderContainer}}
          <d.Container />
        {{/if}}
      </EmberDragula>
    `);

    assert.deepEqual(
      drake.containers[0],
      find('.ember-dragula__container:nth-child(1)')
    );

    this.set('renderContainer', false);

    assert.deepEqual(drake.containers, []);
  });
});

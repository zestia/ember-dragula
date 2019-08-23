import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
const { keys } = Object;

module('Integration | Component | ember-dragula', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.events = this.owner.lookup('component:ember-dragula').events;
  });

  test('it emits dragula events as actions', async function(assert) {
    assert.expect(19);

    const testArgs = ['a', 'b', 'c', 'd'];

    let drake;

    this.set('init', d => {
      drake = d;
    });

    this.set('test', (name, ...args) => {
      assert.step(name);
      assert.deepEqual(args, testArgs);
    });

    await this.render(hbs`
      <EmberDragula
        @onInit={{action this.init}}
        @onDrag={{action this.test "drag"}}
        @onDragEnd={{action this.test "dragEnd"}}
        @onDrop={{action this.test "drop"}}
        @onCancel={{action this.test "cancel"}}
        @onRemove={{action this.test "remove"}}
        @onShadow={{action this.test "shadow"}}
        @onOver={{action this.test "over"}}
        @onOut={{action this.test "out"}}
        @onCloned={{action this.test "cloned"}} />
    `);

    keys(this.events).forEach(name => {
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

  test('it adds container to drake when container is added', async function(assert) {
    assert.expect(1);

    let drake;

    this.set('init', d => {
      drake = d;
    });

    await this.render(hbs`
      <EmberDragula @onInit={{action this.init}} as |d|>
        <d.Container />
      </EmberDragula>
    `);

    assert.deepEqual(
      drake.containers[0],
      find('.ember-dragula-container:nth-child(1)')
    );
  });

  test('it removes container from drake when container is removed', async function(assert) {
    assert.expect(2);

    let drake;

    this.set('init', d => {
      drake = d;
    });

    this.set('renderContainer', true);

    await this.render(hbs`
      <EmberDragula @onInit={{action this.init}} as |d|>
        {{#if this.renderContainer}}
          <d.Container />
        {{/if}}
      </EmberDragula>
    `);

    assert.deepEqual(
      drake.containers[0],
      find('.ember-dragula-container:nth-child(1)')
    );

    this.set('renderContainer', false);

    assert.deepEqual(drake.containers, []);
  });
});

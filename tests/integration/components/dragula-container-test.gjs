import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { tracked } from '@glimmer/tracking';
import DragulaContainer from '@zestia/ember-dragula/components/dragula-container';

module('Integration | Component | dragula container', function (hooks) {
  setupRenderingTest(hooks);

  test('it sends an action when inserted into the dom', async function (assert) {
    assert.expect(1);

    const handleInserted = (element) =>
      assert.ok(element instanceof HTMLElement);

    const handleDestroyed = () => {};

    await render(<template>
      <DragulaContainer
        @onInsert={{handleInserted}}
        @onDestroy={{handleDestroyed}}
      />
    </template>);
  });

  test('it sends a destroy action when removed from the dom', async function (assert) {
    assert.expect(1);

    const state = new (class {
      @tracked renderComponent = true;
    })();

    const handleInserted = () => {};

    const handleDestroyed = (element) =>
      assert.ok(element instanceof HTMLElement);

    await render(<template>
      {{#if state.renderComponent}}
        <DragulaContainer
          @onDestroy={{handleDestroyed}}
          @onInsert={{handleInserted}}
        />
      {{/if}}
    </template>);

    state.renderComponent = false;
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-dragula container', function (hooks) {
  setupRenderingTest(hooks);

  test('it sends an action when inserted into the dom', async function (assert) {
    assert.expect(1);

    this.handleInserted = (element) => assert.ok(element);
    this.handleDestroyed = () => {};

    await render(hbs`
      <EmberDragulaContainer
        @onInsert={{this.handleInserted}}
        @onDestroy={{this.handleDestroyed}}
      />
    `);
  });

  test('it sends a destroy action when removed from the dom', async function (assert) {
    assert.expect(1);

    this.renderComponent = true;
    this.handleInserted = () => {};
    this.handleDestroyed = (element) => assert.ok(element);

    await render(hbs`
      {{#if this.renderComponent}}
        <EmberDragulaContainer
          @onDestroy={{this.handleDestroyed}}
          @onInsert={{this.handleInserted}}
        />
      {{/if}}
    `);

    this.set('renderComponent', false);
  });
});

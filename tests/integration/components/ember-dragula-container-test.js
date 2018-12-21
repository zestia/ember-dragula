import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-dragula container', function(hooks) {
  setupRenderingTest(hooks);

  test('it sends an action when inserted into the dom', async function(assert) {
    assert.expect(1);

    this.set('inserted', element => assert.ok(element));
    this.set('destroyed', () => {});

    await this.render(hbs`
      <EmberDragulaContainer @onInsert={{this.inserted}} @onDestroy={{this.destroyed}}>
        <div> item 1 </div>
        <div> item 2 </div>
      </EmberDragulaContainer>
    `);
  });

  test('it sends a destroy action when removed from the dom', async function(assert) {
    assert.expect(1);

    this.set('renderComponent', true);
    this.set('inserted', () => {});
    this.set('destroyed', element => assert.ok(element));

    await this.render(hbs`
      {{#if this.renderComponent}}
        <EmberDragulaContainer @onDestroy={{this.destroyed}} @onInsert={{this.inserted}}>
          <div> item 1 </div>
          <div> item 2 </div>
        </EmberDragulaContainer>
      {{/if}}
    `);

    this.set('renderComponent', false);
  });
});

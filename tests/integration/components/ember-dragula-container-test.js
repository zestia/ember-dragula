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
      {{#ember-dragula-container on-insert=inserted on-destroy=destroyed}}
        <div> item 1 </div>
        <div> item 2 </div>
      {{/ember-dragula-container}}
    `);
  });

  test('it sends a destroy action when removed from the dom', async function(assert) {
    assert.expect(1);

    this.set('renderComponent', true);
    this.set('inserted', () => {});
    this.set('destroyed', element => assert.ok(element));

    await this.render(hbs`
      {{#if renderComponent}}
        {{#ember-dragula-container on-destroy=destroyed on-insert=inserted}}
          <div> item 1 </div>
          <div> item 2 </div>
        {{/ember-dragula-container}}
      {{/if}}
    `);

    this.set('renderComponent', false);
  });
});

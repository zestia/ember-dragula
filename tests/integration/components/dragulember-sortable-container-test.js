/* eslint-disable */
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dragulember-sortable-container', 'Integration | Component | dragulember sortable container', {
  integration: true
});

test('it adds emits an on insert action when element is inserted', async function(assert) {
  assert.expect(1);

  this.set('onInsert', (element) => {
    assert.ok(element);
  });

  this.set('onDestroy', () => {});

  await this.render(hbs`
    {{#dragulember-sortable-container on-insert=onInsert on-destroy=onDestroy}}
      <div> item 1 </div>
      <div> item 2 </div>
    {{/dragulember-sortable-container}}
  `);

});

test('it removes a container when component is destroyed', async function(assert) {
  assert.expect(1);

  this.set('renderComponent', true);
  this.set('onInsert', function() {});
  this.set('onDestroy', (element) => {
    assert.ok(element)
  });

  await this.render(hbs`
    {{#if renderComponent}}
      {{#dragulember-sortable-container on-destroy=onDestroy on-insert=onInsert}}
        <div> item 1 </div>
        <div> item 2 </div>
      {{/dragulember-sortable-container}}
    {{/if}}
  `);

  this.set('renderComponent', false);
});

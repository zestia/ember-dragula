/* eslint-disable */
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dragulember-sortable-container', 'Integration | Component | dragulember sortable container', {
  integration: true
});

test('it adds a container to drake', async function(assert) {
  assert.expect(1);

  const fakeDrake = {
    containers: []
  }
  this.set('fakeDrake', fakeDrake);

  await this.render(hbs`
    {{#dragulember-sortable-container drake=fakeDrake}}
      <div> item 1 </div>
      <div> item 2 </div>
    {{/dragulember-sortable-container}}
  `);

  assert.equal(fakeDrake.containers.length, 1);
});

test('it adds each container to drake, when multiple containers', async function(assert) {
  assert.expect(1);

  const fakeDrake = {
    containers: []
  }
  this.set('fakeDrake', fakeDrake);

  await this.render(hbs`
    {{#dragulember-sortable-container drake=fakeDrake}}
      <div> item 1 </div>
      <div> item 2 </div>
    {{/dragulember-sortable-container}}

    {{#dragulember-sortable-container drake=fakeDrake}}
      <div> item 3 </div>
      <div> item 4 </div>
    {{/dragulember-sortable-container}}
  `);

  assert.equal(fakeDrake.containers.length, 2);
});

test('it removes a container when component is destroyed', async function(assert) {
  assert.expect(2);

  const fakeDrake = {
    containers: []
  }
  this.set('fakeDrake', fakeDrake);
  this.set('renderComponent', true);

  await this.render(hbs`
    {{#if renderComponent}}
      {{#dragulember-sortable-container drake=fakeDrake}}
        <div> item 1 </div>
        <div> item 2 </div>
      {{/dragulember-sortable-container}}
    {{/if}}
  `);

  assert.equal(fakeDrake.containers.length, 1);

  this.set('renderComponent', false);

  assert.equal(fakeDrake.containers.length, 0);
});

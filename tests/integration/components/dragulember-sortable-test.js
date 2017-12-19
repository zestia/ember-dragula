import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dragulember-sortable', 'Integration | Component | dragulember sortable', {
  integration: true
});

test('it renders', function(assert) {
  const dragulaSpy = this.spy(window, 'dragula');

  this.render(hbs`{{dragulember-sortable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dragulember-sortable}}
      template block text
    {{/dragulember-sortable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

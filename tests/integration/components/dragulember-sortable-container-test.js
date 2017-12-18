import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dragulember-sortable-container', 'Integration | Component | dragulember sortable container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dragulember-sortable-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dragulember-sortable-container}}
      template block text
    {{/dragulember-sortable-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-dragula', 'Integration | Component | dragulember sortable', {
  integration: true
});

test('it emits event on drop', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on: (eventName, cb) => {
      if(eventName === 'drop') {
        cb('dropElm', 'target', 'source')
      }
    },
    destroy: () => {}
  };
  window.dragula = () => {
    return fakeDrake;
  };

  this.set('onDropAction', function(dropElm, source, target) {
    assert.equal(dropElm, 'dropElm');
    assert.equal(target, 'target');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula dropEndAction=(action onDropAction)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it emits event on drag', async function(assert) {
  assert.expect(2);

  const fakeDrake = {
    on: (eventName, cb) => {
      if(eventName === 'drag') {
        cb('el', 'source');
      }
    },
    destroy: () => {}
  };
  window.dragula = () => {
    return fakeDrake;
  };

  this.set('onDragAction', function(el, source) {
    assert.equal(el, 'el');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula dragStartAction=(action onDragAction)}}
      template block text
    {{/ember-dragula}}
  `);
});

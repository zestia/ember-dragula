import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-dragula', 'Integration | Component | ember-dragula', {
  integration: true
});


test('it listens for event on drop', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'drop') {
        cb('dropElm', 'source', 'target');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('drop', function(dropElm, source, target) {
    assert.equal(dropElm, 'dropElm');
    assert.equal(target, 'target');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-drop=(action drop)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on drag', async function(assert) {
  assert.expect(2);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'drag') {
        cb('el', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('drag', function(el, source) {
    assert.equal(el, 'el');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-drag=(action drag)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on dragend', async function(assert) {
  assert.expect(1);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'dragend') {
        cb('el');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('dragEnd', function(el) {
    assert.equal(el, 'el');
  });

  await this.render(hbs`
    {{#ember-dragula on-dragend=(action dragEnd)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on cancel', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'cancel') {
        cb('el', 'container', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('cancel', function(el, container, source) {
    assert.equal(el, 'el');
    assert.equal(container, 'container');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-cancel=(action cancel)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on remove', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'remove') {
        cb('el', 'container', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('remove', function(el, container, source) {
    assert.equal(el, 'el');
    assert.equal(container, 'container');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-remove=(action remove)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on shadow', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'shadow') {
        cb('el', 'container', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('shadow', function(el, container, source) {
    assert.equal(el, 'el');
    assert.equal(container, 'container');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-shadow=(action shadow)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on over', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'over') {
        cb('el', 'container', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('over', function(el, container, source) {
    assert.equal(el, 'el');
    assert.equal(container, 'container');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-over=(action over)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on out', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'out') {
        cb('el', 'container', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('out', function(el, container, source) {
    assert.equal(el, 'el');
    assert.equal(container, 'container');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-out=(action out)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it listens for event on cloned', async function(assert) {
  assert.expect(3);

  const fakeDrake = {
    on(eventName, cb) {
      if (eventName === 'cloned') {
        cb('el', 'container', 'source');
      }
    },
    destroy() {}
  };

  window.dragula = () => fakeDrake;

  this.set('cloned', function(el, container, source) {
    assert.equal(el, 'el');
    assert.equal(container, 'container');
    assert.equal(source, 'source');
  });

  await this.render(hbs`
    {{#ember-dragula on-cloned=(action cloned)}}
      template block text
    {{/ember-dragula}}
  `);
});

test('it emits drake on init', async function(assert) {
  assert.expect(1);

  const fakeDrake = {
    on: () => {},
    destroy() {},
    containers: []
  };

  window.dragula = () => fakeDrake;

  this.set('init', function(drake) {
    assert.equal(drake, fakeDrake);
  });

  await this.render(hbs`
    {{#ember-dragula on-init=(action init)}}
      template block text
    {{/ember-dragula}}
  `);
});


test('it adds container to drake when container is added', async function(assert) {
  assert.expect(1);

  const fakeDrake = {
    on: () => {},
    destroy() {},
    containers: []
  };

  window.dragula = () => fakeDrake;

  await this.render(hbs`
    {{#ember-dragula as |d|}}
      {{#d.container}}
        Test container
      {{/d.container}}
    {{/ember-dragula}}
  `);

  assert.equal(fakeDrake.containers.length, 1);
});

test('it removes container from drake when container is removed', async function(assert) {
  assert.expect(2);

  const fakeDrake = {
    on() {},
    destroy() {},
    containers: []
  };

  window.dragula = () => fakeDrake;

  this.set('renderContainer', true);

  await this.render(hbs`
    {{#ember-dragula as |d|}}
      {{#if renderContainer}}
        {{#d.container}}
          Test container
        {{/d.container}}
      {{/if}}
    {{/ember-dragula}}
  `);

  assert.equal(fakeDrake.containers.length, 1);

  this.set('renderContainer', false);

  assert.equal(fakeDrake.containers.length, 0);

});

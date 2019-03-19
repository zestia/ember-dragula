import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-dragula', function(hooks) {
  setupRenderingTest(hooks);

  test('it listens for event on drop', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'drop') {
          handler('dropElm', 'source', 'target');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('drop', (dropElm, source, target) => {
      assert.equal(dropElm, 'dropElm');
      assert.equal(target, 'target');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onDrop={{action this.drop}} />
    `);
  });

  test('it listens for event on drag', async function(assert) {
    assert.expect(2);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'drag') {
          handler('el', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('drag', (el, source) => {
      assert.equal(el, 'el');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onDrag={{action this.drag}} />
    `);
  });

  test('it listens for event on dragend', async function(assert) {
    assert.expect(1);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'dragend') {
          handler('el');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('dragEnd', el => {
      assert.equal(el, 'el');
    });

    await this.render(hbs`
      <EmberDragula @onDragEnd={{action this.dragEnd}} />
    `);
  });

  test('it listens for event on cancel', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'cancel') {
          handler('el', 'container', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('cancel', (el, container, source) => {
      assert.equal(el, 'el');
      assert.equal(container, 'container');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onCancel={{action this.cancel}} />
    `);
  });

  test('it listens for event on remove', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'remove') {
          handler('el', 'container', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('remove', (el, container, source) => {
      assert.equal(el, 'el');
      assert.equal(container, 'container');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onRemove={{action this.remove}} />
    `);
  });

  test('it listens for event on shadow', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'shadow') {
          handler('el', 'container', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('shadow', (el, container, source) => {
      assert.equal(el, 'el');
      assert.equal(container, 'container');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onShadow={{action this.shadow}} />
    `);
  });

  test('it listens for event on over', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'over') {
          handler('el', 'container', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('over', (el, container, source) => {
      assert.equal(el, 'el');
      assert.equal(container, 'container');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onOver={{action this.over}} />
    `);
  });

  test('it listens for event on out', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'out') {
          handler('el', 'container', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('out', (el, container, source) => {
      assert.equal(el, 'el');
      assert.equal(container, 'container');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onOut={{action this.out}} />
    `);
  });

  test('it listens for event on cloned', async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName, handler) {
        if (eventName === 'cloned') {
          handler('el', 'container', 'source');
        }
      },
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('cloned', (el, container, source) => {
      assert.equal(el, 'el');
      assert.equal(container, 'container');
      assert.equal(source, 'source');
    });

    await this.render(hbs`
      <EmberDragula @onCloned={{action this.cloned}} />
    `);
  });

  test('it emits drake on init', async function(assert) {
    assert.expect(1);

    const fakeDrake = {
      containers: [],
      on: () => {},
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    this.set('init', drake => {
      assert.deepEqual(drake, fakeDrake);
    });

    await this.render(hbs`
      <EmberDragula @onInit={{action this.init}} />
    `);
  });

  test('it adds container to drake when container is added', async function(assert) {
    assert.expect(1);

    const fakeDrake = {
      containers: [],
      on: () => {},
      destroy() {}
    };

    window.dragula = () => fakeDrake;

    await this.render(hbs`
      <EmberDragula as |d|>
        <d.container>
          Test container
        </d.container>
      </EmberDragula>
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
      <EmberDragula as |d|>
        {{#if this.renderContainer}}
          <d.container>
            Test container
          </d.container>
        {{/if}}
      </EmberDragula>
    `);

    assert.equal(fakeDrake.containers.length, 1);

    this.set('renderContainer', false);

    assert.equal(fakeDrake.containers.length, 0);
  });
});

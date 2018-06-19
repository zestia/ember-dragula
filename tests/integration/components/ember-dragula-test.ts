// tslint:disable only-arrow-functions no-empty
import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | ember-dragula", function(hooks) {
  setupRenderingTest(hooks);

  test("it listens for event on drop", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (dropElm: string, source: string, target: string) => void) {
        if (eventName === "drop") {
          cb("dropElm", "source", "target");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("drop", function(dropElm: string, source: string, target: string) {
      assert.equal(dropElm, "dropElm");
      assert.equal(target, "target");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onDrop=(action drop)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on drag", async function(assert) {
    assert.expect(2);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, source: string) => void) {
        if (eventName === "drag") {
          cb("el", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("drag", function(el: string, source: string) {
      assert.equal(el, "el");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onDrag=(action drag)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on dragend", async function(assert) {
    assert.expect(1);

    const fakeDrake = {
      on(eventName: string, cb: (el: string) => void) {
        if (eventName === "dragend") {
          cb("el");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("dragEnd", function(el: string) {
      assert.equal(el, "el");
    });

    await this.render(hbs`
      {{#ember-dragula onDragend=(action dragEnd)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on cancel", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, container: string, source: string) => void) {
        if (eventName === "cancel") {
          cb("el", "container", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("cancel", function(el: string, container: string, source: string) {
      assert.equal(el, "el");
      assert.equal(container, "container");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onCancel=(action cancel)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on remove", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, container: string, source: string) => void) {
        if (eventName === "remove") {
          cb("el", "container", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("remove", function(el: string, container: string, source: string) {
      assert.equal(el, "el");
      assert.equal(container, "container");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onRemove=(action remove)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on shadow", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, container: string, source: string) => void) {
        if (eventName === "shadow") {
          cb("el", "container", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("shadow", function(el: string, container: string, source: string) {
      assert.equal(el, "el");
      assert.equal(container, "container");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onShadow=(action shadow)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on over", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, container: string, source: string) => void) {
        if (eventName === "over") {
          cb("el", "container", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("over", function(el: string, container: string, source: string) {
      assert.equal(el, "el");
      assert.equal(container, "container");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onOver=(action over)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on out", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, container: string, source: string) => void) {
        if (eventName === "out") {
          cb("el", "container", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("out", function(el: string, container: string, source: string) {
      assert.equal(el, "el");
      assert.equal(container, "container");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onOut=(action out)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it listens for event on cloned", async function(assert) {
    assert.expect(3);

    const fakeDrake = {
      on(eventName: string, cb: (el: string, container: string, source: string) => void) {
        if (eventName === "cloned") {
          cb("el", "container", "source");
        }
      },
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    this.set("cloned", function(el: string, container: string, source: string) {
      assert.equal(el, "el");
      assert.equal(container, "container");
      assert.equal(source, "source");
    });

    await this.render(hbs`
      {{#ember-dragula onCloned=(action cloned)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it emits drake on init", async function(assert) {
    assert.expect(1);

    const fakeDrake = {
      containers: [],
      on: () => {},
      destroy() {},

    };

    (window as any).dragula = () => fakeDrake;

    this.set("init", function(drake: any) {
      assert.equal(drake, fakeDrake);
    });

    await this.render(hbs`
      {{#ember-dragula onInit=(action init)}}
        template block text
      {{/ember-dragula}}
    `);
  });

  test("it adds container to drake when container is added", async function(assert) {
    assert.expect(1);

    const fakeDrake = {
      containers: [],
      on: () => {},
      destroy() {},
    };

    (window as any).dragula = () => fakeDrake;

    await this.render(hbs`
      {{#ember-dragula as |d|}}
        {{#d.container}}
          Test container
        {{/d.container}}
      {{/ember-dragula}}
    `);

    assert.equal(fakeDrake.containers.length, 1);
  });

  test("it removes container from drake when container is removed", async function(assert) {
    assert.expect(2);

    const fakeDrake = {
      on() {},
      destroy() {},
      containers: [],
    };

    (window as any).dragula = () => fakeDrake;

    this.set("renderContainer", true);

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

    this.set("renderContainer", false);

    assert.equal(fakeDrake.containers.length, 0);
  });
});
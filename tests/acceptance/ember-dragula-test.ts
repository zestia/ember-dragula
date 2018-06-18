// tslint:disable only-arrow-functions
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { simulateDragAndDrop } from "@zestia/ember-dragula/utils/simulate-drag-drop";
// @ts-ignore
import { find, findAll, visit, currentURL } from "@ember/test-helpers";

module("Acceptance | ember-dragula", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /ember-dragula", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
    assert.equal(findAll("#list-1 .item")[0].textContent, "Item 1");
    assert.equal(findAll("#list-1 .item")[1].textContent, "Item 2");
    assert.equal(findAll("#list-1 .item")[2].textContent, "Item 3");
    assert.equal(findAll("#list-2 .item")[0].textContent, "Item 4");
    assert.equal(findAll("#list-2 .item")[1].textContent, "Item 5");
    assert.equal(findAll("#list-2 .item")[2].textContent, "Item 6");
  });

  test("dragging objects", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");

    const elemDrag = findAll("#list-1 .item")[0];
    const elemDrop = find("#list-2");

    assert.equal(findAll("#list-1 .item").length, 3);
    assert.equal(findAll("#list-2 .item").length, 3);

    simulateDragAndDrop(elemDrag, elemDrop);

    assert.equal(findAll("#list-1 .item").length, 2);
    assert.equal(findAll("#list-2 .item").length, 4);
  });

  test("accepts dragula options", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");

    // Test passing copy option

    const elemDrag = findAll("#list-copy-1 .item")[0];
    const elemDrop = find("#list-copy-2");

    assert.equal(findAll("#list-copy-1 .item").length, 3);
    assert.equal(findAll("#list-copy-2 .item").length, 3);

    simulateDragAndDrop(elemDrag, elemDrop);

    assert.equal(findAll("#list-copy-1 .item").length, 3);
    assert.equal(findAll("#list-copy-2 .item").length, 4);

    // Test passing move function as option

    const unDraggableElem = findAll("#list-moves-1 .item")[0];
    const unDraggableElemDrop = find("#list-moves-2");

    assert.equal(findAll("#list-moves-1 .item").length, 3);
    assert.equal(findAll("#list-moves-2 .item").length, 3);

    simulateDragAndDrop(unDraggableElem, unDraggableElemDrop);

    assert.equal(findAll("#list-moves-1 .item").length, 3);
    assert.equal(findAll("#list-moves-2 .item").length, 3);
  });
});

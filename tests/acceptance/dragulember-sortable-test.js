import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { simulateDragAndDrop } from 'dragulember-sortable/utils/simulate-drag-drop';

moduleForAcceptance('Acceptance | dragulember sortable');

test('visiting /dragulember-sortable', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('#list-1-item-0').text(), 'name1');
    assert.equal(find('#list-1-item-1').text(), 'name2');
    assert.equal(find('#list-1-item-2').text(), 'name3');
    assert.equal(find('#list-2-item-0').text(), 'name4');
    assert.equal(find('#list-2-item-1').text(), 'name5');
    assert.equal(find('#list-2-item-2').text(), 'name6');
  });
});

test('dragging objects', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    const elemDrag = find('#list-1-item-0')[0];
    const elemDrop = find('#list-2-item-0')[0];

    assert.equal(find("#list-1").children().length, 3);
    assert.equal(find("#list-2").children().length, 3);

    simulateDragAndDrop(elemDrag, elemDrop);

    assert.equal(find("#list-1").children().length, 2);
    assert.equal(find("#list-2").children().length, 4);

  });
});

test('accepts dragula options', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    // Test passing copy option

    const elemDrag = find('#list-copy-1-item-0')[0];
    const elemDrop = find('#list-copy-2-item-0')[0];

    assert.equal(find("#list-copy-1").children().length, 3);
    assert.equal(find("#list-copy-2").children().length, 3);

    simulateDragAndDrop(elemDrag, elemDrop);

    assert.equal(find("#list-copy-1").children().length, 3);
    assert.equal(find("#list-copy-2").children().length, 4);

    // Test passing move function as option

    const unDraggableElem = find('#list-moves-1-item-0')[0];
    const unDraggableElemDrop = find('#list-moves-2-item-0')[0];

    assert.equal(find("#list-moves-1").children().length, 3);
    assert.equal(find("#list-moves-2").children().length, 3);

    simulateDragAndDrop(unDraggableElem, unDraggableElemDrop);

    assert.equal(find("#list-moves-1").children().length, 3);
    assert.equal(find("#list-moves-2").children().length, 3);

  });
});

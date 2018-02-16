import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { simulateDragAndDrop } from '@zestia/ember-dragula/utils/simulate-drag-drop';

moduleForAcceptance('Acceptance | ember-dragula');

test('visiting /ember-dragula', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('#list-1-item-0').text(), 'Item 1');
    assert.equal(find('#list-1-item-1').text(), 'Item 2');
    assert.equal(find('#list-1-item-2').text(), 'Item 3');
    assert.equal(find('#list-2-item-0').text(), 'Item 4');
    assert.equal(find('#list-2-item-1').text(), 'Item 5');
    assert.equal(find('#list-2-item-2').text(), 'Item 6');
  });
});

test('dragging objects', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    const elemDrag = find('#list-1-item-0')[0];
    const elemDrop = find('#list-2')[0];

    assert.equal(find('#list-1').children().length, 3);
    assert.equal(find('#list-2').children().length, 3);

    simulateDragAndDrop(elemDrag, elemDrop);

    assert.equal(find('#list-1').children().length, 2);
    assert.equal(find('#list-2').children().length, 4);

  });
});

test('accepts dragula options', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    // Test passing copy option

    const elemDrag = find('#list-copy-1-item-0')[0];
    const elemDrop = find('#list-copy-2')[0];

    assert.equal(find('#list-copy-1').children().length, 3);
    assert.equal(find('#list-copy-2').children().length, 3);

    simulateDragAndDrop(elemDrag, elemDrop);

    assert.equal(find('#list-copy-1').children().length, 3);
    assert.equal(find('#list-copy-2').children().length, 4);

    // Test passing move function as option

    const unDraggableElem = find('#list-moves-1-item-0')[0];
    const unDraggableElemDrop = find('#list-moves-2')[0];

    assert.equal(find('#list-moves-1').children().length, 3);
    assert.equal(find('#list-moves-2').children().length, 3);

    simulateDragAndDrop(unDraggableElem, unDraggableElemDrop);

    assert.equal(find('#list-moves-1').children().length, 3);
    assert.equal(find('#list-moves-2').children().length, 3);

  });
});

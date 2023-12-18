import { module, test } from 'qunit';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { simulateDragDrop } from '@zestia/ember-dragula/test-support/helpers/simulate-drag-drop';
import { find, findAll, visit } from '@ember/test-helpers';

module('Acceptance | ember-dragula', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    assert.expect(6);

    await visit('/');

    assert.dom(findAll('.list-1 .item')[0]).hasText('Item 1');
    assert.dom(findAll('.list-1 .item')[1]).hasText('Item 2');
    assert.dom(findAll('.list-1 .item')[2]).hasText('Item 3');
    assert.dom(findAll('.list-2 .item')[0]).hasText('Item 4');
    assert.dom(findAll('.list-2 .item')[1]).hasText('Item 5');
    assert.dom(findAll('.list-2 .item')[2]).hasText('Item 6');
  });

  test('dragging objects', async function (assert) {
    assert.expect(4);

    await visit('/');

    const elemDrag = findAll('.list-1 .item')[0];
    const elemDrop = find('.list-2');

    assert.dom('.list-1 .item').exists({ count: 3 });
    assert.dom('.list-2 .item').exists({ count: 3 });

    await simulateDragDrop(elemDrag, elemDrop);

    assert.dom('.list-1 .item').exists({ count: 2 });
    assert.dom('.list-2 .item').exists({ count: 4 });
  });

  test('accepts dragula options', async function (assert) {
    assert.expect(8);

    await visit('/');

    const elemDrag = findAll('.list-copy-1 .item')[0];
    const elemDrop = find('.list-copy-2');

    assert.dom('.list-copy-1 .item').exists({ count: 3 });
    assert.dom('.list-copy-2 .item').exists({ count: 3 });

    await simulateDragDrop(elemDrag, elemDrop);

    assert.dom('.list-copy-1 .item').exists({ count: 3 });
    assert.dom('.list-copy-2 .item').exists({ count: 4 });

    const unDraggableElem = findAll('.list-moves-1 .item')[0];
    const unDraggableElemDrop = find('.list-moves-2');

    assert.dom('.list-moves-1 .item').exists({ count: 3 });
    assert.dom('.list-moves-2 .item').exists({ count: 3 });

    await simulateDragDrop(unDraggableElem, unDraggableElemDrop);

    assert.dom('.list-moves-1 .item').exists({ count: 3 });
    assert.dom('.list-moves-2 .item').exists({ count: 3 });
  });
});

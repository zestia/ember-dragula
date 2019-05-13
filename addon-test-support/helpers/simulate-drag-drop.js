import { triggerEvent } from '@ember/test-helpers';
import { all } from 'rsvp';
const { floor } = Math;

export function simulateDragDrop(elemDrag, elemDrop) {
  return all([
    simulateDrag(elemDrag),
    simulateDrop(elemDrag, elemDrop)
  ]);
}

export function simulateDrag(elemDrag) {
  const dragPos = elemDrag.getBoundingClientRect();
  const centerDragX = floor((dragPos.left + dragPos.right) / 2);
  const centerDragY = floor((dragPos.top + dragPos.bottom) / 2);
  const startOptions = { clientX: centerDragX, clientY: centerDragY };
  const endOptions = { clientX: centerDragX + 1, clientY: centerDragY + 1 };
  return all([
    triggerEvent(elemDrag, 'mousedown', startOptions),
    triggerEvent(elemDrag, 'mousemove', endOptions),
    triggerEvent(elemDrag, 'mousemove', startOptions)
  ]);
}

export function simulateDrop(elemDrag, elemDrop) {
  const pos = elemDrop.getBoundingClientRect();
  const centerDropX = floor((pos.left + pos.right) / 2);
  const centerDropY = floor((pos.top + pos.bottom) / 2);
  const dropOptions = { clientX: centerDropX, clientY: centerDropY };
  return all([
    triggerEvent(elemDrag, 'mousemove', dropOptions),
    triggerEvent(elemDrag, 'mouseup', dropOptions)
  ]);
}

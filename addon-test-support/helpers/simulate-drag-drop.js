import { triggerEvent } from '@ember/test-helpers';
import { all } from 'rsvp';
const { floor } = Math;

export function simulateDragDrop(elemDrag, elemDrop) {
  return all([simulateDrag(elemDrag), simulateDrop(elemDrag, elemDrop)]);
}

export function simulateDrag(elemDrag) {
  const rectDrag = elemDrag.getBoundingClientRect();
  const centerDragX = floor(rectDrag.left + rectDrag.width / 2);
  const centerDragY = floor(rectDrag.top + rectDrag.height / 2);
  const fromOptions = { clientX: centerDragX, clientY: centerDragY };
  const toOptions = { clientX: centerDragX + 1, clientY: centerDragY + 1 };

  return all([
    triggerEvent(elemDrag, 'mousedown', fromOptions),
    triggerEvent(elemDrag, 'mousemove', toOptions),
  ]);
}

export function simulateDrop(elemDrag, elemDrop) {
  const rectDrop = elemDrop.getBoundingClientRect();
  const centerDropX = floor(rectDrop.left + rectDrop.width / 2);
  const centerDropY = floor(rectDrop.top + rectDrop.height / 2);
  const toOptions = { clientX: centerDropX, clientY: centerDropY };

  return all([
    triggerEvent(elemDrag, 'mousemove', toOptions),
    triggerEvent(elemDrag, 'mouseup', toOptions),
  ]);
}

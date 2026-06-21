import { triggerEvent } from '@ember/test-helpers';

const {
  floor
} = Math;
async function simulateDragDrop(elemDrag, elemDrop) {
  await simulateDrag(elemDrag);
  await simulateDrop(elemDrag, elemDrop);
}
async function simulateDrag(elemDrag) {
  const rectDrag = elemDrag.getBoundingClientRect();
  const centerDragX = floor(rectDrag.left + rectDrag.width / 2);
  const centerDragY = floor(rectDrag.top + rectDrag.height / 2);
  const fromOptions = {
    clientX: centerDragX,
    clientY: centerDragY
  };
  const toOptions = {
    clientX: centerDragX + 1,
    clientY: centerDragY + 1
  };
  await triggerEvent(elemDrag, 'mousedown', fromOptions);
  await triggerEvent(elemDrag, 'mousemove', toOptions);
}
async function simulateDrop(elemDrag, elemDrop) {
  const rectDrop = elemDrop.getBoundingClientRect();
  const centerDropX = floor(rectDrop.left + rectDrop.width / 2);
  const centerDropY = floor(rectDrop.top + rectDrop.height / 2);
  const toOptions = {
    clientX: centerDropX,
    clientY: centerDropY
  };
  await triggerEvent(elemDrag, 'mousemove', toOptions);
  await triggerEvent(elemDrag, 'mouseup', toOptions);
}

export { simulateDrag, simulateDragDrop, simulateDrop };
//# sourceMappingURL=simulate-drag-drop.js.map

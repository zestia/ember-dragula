/* eslint-disable object-property-newline */

import { triggerEvent } from '@ember/test-helpers';


function _fireEmberMouseEvent(type, elem, centerX, centerY) {
  triggerEvent(elem, type,
    {
      canBubble: true, cancelable: true, view: window,
      detail: 1, screenX: 1, screenY: 1, clientX: centerX,
      clientY: centerY, ctrlKey: false, altKey: false,
      shiftKey: false, metaKey: false, button: 0
    });
}

// Required for being able to do a separate drag and drop within an ember test.
function _fireMouseEvent(type, elem, centerX, centerY) {
  const evt = document.createEvent('MouseEvents');
  evt.initMouseEvent(type, true, true, window, 1, 1, 1,
    centerX, centerY, false, false, false, false, 0, elem);
  elem.dispatchEvent(evt);
}


export function simulateDragAndDrop(elemDrag, elemDrop) {
  if (!elemDrag || !elemDrop) {
    return false;
  }

  const pos = elemDrag.getBoundingClientRect();
  const centerDragX = Math.floor((pos.left + pos.right) / 2);
  const centerDragY = Math.floor((pos.top + pos.bottom) / 2);

  const dropPos = elemDrop.getBoundingClientRect();
  const centerDropX = Math.floor((dropPos.left + dropPos.right) / 2);
  const centerDropY = Math.floor((dropPos.top + dropPos.bottom) / 2);

  _fireEmberMouseEvent('mousedown', elemDrag, centerDragX, centerDragY);

  _fireEmberMouseEvent('mousemove', elemDrag, centerDragX + 1, centerDragY + 1 );

  _fireEmberMouseEvent('mousemove', elemDrag, centerDropX, centerDropY);

  _fireEmberMouseEvent('mouseup', elemDrag, centerDropX, centerDropY);

}

export function simulateDrag(elemDrag) {
  if (!elemDrag) {
    return false;
  }

  const pos = elemDrag.getBoundingClientRect();
  const centerDragX = Math.floor((pos.left + pos.right) / 2);
  const centerDragY = Math.floor((pos.top + pos.bottom) / 2);

  _fireMouseEvent('mousedown', elemDrag, centerDragX, centerDragY);

  _fireMouseEvent('mousemove', elemDrag, centerDragX + 1, centerDragY + 1 );

}

export function simulateDrop(elemDrag, elemDrop) {
  if (!elemDrag || !elemDrop) {
    return false;
  }

  const pos = elemDrop.getBoundingClientRect();
  const centerDropX = Math.floor((pos.left + pos.right) / 2);
  const centerDropY = Math.floor((pos.top + pos.bottom) / 2);

  _fireMouseEvent('mousemove', elemDrag, centerDropX, centerDropY);

  _fireMouseEvent('mouseup', elemDrag, centerDropX, centerDropY);

}

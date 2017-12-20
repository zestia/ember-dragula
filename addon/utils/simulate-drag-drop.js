/**
 * Credit: https://ghostinspector.com/blog/simulate-drag-and-drop-javascript-casperjs/
 */

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

  // calculate positions
  let pos = elemDrag.getBoundingClientRect();
  const center1X = Math.floor((pos.left + pos.right) / 2);
  const center1Y = Math.floor((pos.top + pos.bottom) / 2);
  pos = elemDrop.getBoundingClientRect();
  const center2X = Math.floor((pos.left + pos.right) / 2);
  const center2Y = Math.floor((pos.top + pos.bottom) / 2);

  // mouse over dragged element and mousedown
  _fireMouseEvent('mousemove', elemDrag, center1X, center1Y);
  _fireMouseEvent('mouseenter', elemDrag, center1X, center1Y);
  _fireMouseEvent('mouseover', elemDrag, center1X, center1Y);
  _fireMouseEvent('mousedown', elemDrag, center1X, center1Y);

  // start dragging process over to drop target
  _fireMouseEvent('dragstart', elemDrag, center1X, center1Y);
  _fireMouseEvent('drag', elemDrag, center1X, center1Y);
  _fireMouseEvent('mousemove', elemDrag, center1X, center1Y);
  _fireMouseEvent('drag', elemDrag, center2X, center2Y);
  _fireMouseEvent('mousemove', elemDrop, center2X, center2Y);

  // trigger dragging process on top of drop target
  _fireMouseEvent('mouseenter', elemDrop, center2X, center2Y);
  _fireMouseEvent('dragenter', elemDrop, center2X, center2Y);
  _fireMouseEvent('mouseover', elemDrop, center2X, center2Y);
  _fireMouseEvent('dragover', elemDrop, center2X, center2Y);

  // release dragged element on top of drop target
  _fireMouseEvent('drop', elemDrop, center2X, center2Y);
  _fireMouseEvent('dragend', elemDrag, center2X, center2Y);
  _fireMouseEvent('mouseup', elemDrag, center2X, center2Y);

}

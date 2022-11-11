# @zestia/ember-dragula

[![Latest npm release][npm-badge]][npm-badge-url]
[![Ember Observer][ember-observer-badge]][ember-observer-url]

<!-- [![GitHub Actions][github-actions-badge]][github-actions-url] -->

[npm-badge]: https://img.shields.io/npm/v/@zestia/ember-dragula.svg
[npm-badge-url]: https://www.npmjs.com/package/@zestia/ember-dragula
[github-actions-badge]: https://github.com/zestia/ember-dragula/workflows/CI/badge.svg
[github-actions-url]: https://github.com/zestia/ember-dragula/actions
[ember-observer-badge]: https://emberobserver.com/badges/-zestia-ember-dragula.svg
[ember-observer-url]: https://emberobserver.com/addons/@zestia/ember-dragula

This Ember addon provides support for drag and drop using [dragula](https://bevacqua.github.io/dragula/)

## Installation

```
ember install @zestia/ember-dragula
```

## Demo

https://zestia.github.io/ember-dragula

## Example

```handlebars
<EmberDragula as |d|>
  <d.Container>
    {{#each this.listOne as |item|}}
      {{item}}
    {{/each}}
  </d.Container>

  <d.Container>
    {{#each this.listTwo as |item|}}
      {{item}}
    {{/each}}
  </d.Container>
</EmberDragula>
```

## Arguments

### `@options`

The full range of options that dragula accepts are supported, see: [https://github.com/bevacqua/dragula#dragulacontainers-options](https://github.com/bevacqua/dragula#dragulacontainers-options)

### `@onReady`

The dragula instance is emitted via an `onReady` action, and allows access to all functions and fields on `drake` (https://github.com/bevacqua/dragula#api):

```handlebars
<EmberDragula @onReady={{this.ready}} as |d|>
  ...
</EmberDragula>
```

### Events

The full range of events that dragula emits are supported, see: [https://github.com/bevacqua/dragula#drakeon-events](https://github.com/bevacqua/dragula#drakeon-events). These can be accessed by prefixing the event name with "on", e.g. `@onDrag`

## Test helpers

To simulate dragging and dropping, test helpers are provided:

```javascript
import { simulateDragDrop } from '@zestia/ember-dragula/test-support/helpers/simulate-drag-drop';
```

Within a test:

```javascript
const dragMe = find('.drag-me');
const dropHere = find('.drop-here');

await simulateDrag(dragMe);
await simulateDrop(dragMe, dropHere);
await simulateDragDrop(dragMe, dropHere);
```

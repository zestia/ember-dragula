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
<Dragula as |Container|>
  <Container>
    {{#each this.listOne as |item|}}
      {{item}}
    {{/each}}
  </Container>

  <Container>
    {{#each this.listTwo as |item|}}
      {{item}}
    {{/each}}
  </Container>
</Dragula>
```

## `Dragula`

### Arguments

#### `@options`

Optional. The full range of options that dragula accepts are supported, see the [docs](https://github.com/bevacqua/dragula#dragulacontainers-options).

#### `@onReady`

Optional. The dragula instance is emitted via this action, allowing access to the [`drake`](https://github.com/bevacqua/dragula#api) API.

#### `@on<Event>`

Optional. The full range of events that dragula emits are supported, see the [docs](https://github.com/bevacqua/dragula#drakeon-events). These can be accessed by prefixing the event name with "on", e.g. `@onDrag`

## Test helpers

To simulate dragging and dropping, test helpers are provided.

<details>
  <summary>Example</summary>

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

</details>

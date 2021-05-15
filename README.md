# @zestia/ember-dragula

<p>
  <!--
  <a href="https://github.com/zestia/ember-dragula/actions/workflows/ci.yml">
    <img src="https://github.com/zestia/ember-dragula/actions/workflows/ci.yml/badge.svg">
  </a>
  -->

  <a href="https://david-dm.org/zestia/ember-dragula#badge-embed">
    <img src="https://david-dm.org/zestia/ember-dragula.svg">
  </a>

  <a href="https://david-dm.org/zestia/ember-dragula#dev-badge-embed">
    <img src="https://david-dm.org/zestia/ember-dragula/dev-status.svg">
  </a>

  <a href="https://emberobserver.com/addons/@zestia/ember-dragula">
    <img src="https://emberobserver.com/badges/-zestia-ember-dragula.svg">
  </a>

  <img src="https://img.shields.io/badge/Ember-%3E%3D%203.16-brightgreen">
</p>

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

## Options

The full range of options that dragula accepts are supported, see: [https://github.com/bevacqua/dragula#dragulacontainers-options](https://github.com/bevacqua/dragula#dragulacontainers-options)

To supply options:

```handlebars
<EmberDragula @options={{hash option=value}} as |d|>
  ...
</EmberDragula>
```

## Events

The full range of events that dragula emits are supported, see: [https://github.com/bevacqua/dragula#drakeon-events](https://github.com/bevacqua/dragula#drakeon-events). These can be accessed by prefixing the event name with "on":

```handlebars
<EmberDragula
  @onDrag={{this.onDrag}}
  @onDrop={{this.drop}}
  @onCancel={{this.cancel}}
  ...
  as |d|
>
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

The dragula instance is emitted via an `onReady` action, and allows access to all functions and fields on `drake` (https://github.com/bevacqua/dragula#api):

```handlebars
<EmberDragula @onReady={{this.ready}} as |d|>
  ...
</EmberDragula>
```

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

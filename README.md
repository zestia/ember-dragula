# @zestia/ember-dragula

<a href="https://badge.fury.io/js/%40zestia%2Fember-dragula"><img src="https://badge.fury.io/js/%40zestia%2Fember-dragula.svg" alt="npm version" height="18"></a> &nbsp; <a href="http://travis-ci.org/zestia/ember-dragula"><img src="https://travis-ci.org/zestia/ember-dragula.svg?branch=master"></a> &nbsp; <a href="https://david-dm.org/zestia/ember-dragula#badge-embed"><img src="https://david-dm.org/zestia/ember-dragula.svg"></a> &nbsp; <a href="https://david-dm.org/zestia/ember-dragula#dev-badge-embed"><img src="https://david-dm.org/zestia/ember-dragula/dev-status.svg"></a> &nbsp; <a href="https://emberobserver.com/addons/@zestia/ember-dragula"><img src="https://emberobserver.com/badges/-zestia-ember-dragula.svg"></a>

This Ember addon provides support for drag and drop using [dragula](https://bevacqua.github.io/dragula/)

[Demo](https://zestia.github.io/ember-dragula)

## Installation

```
ember install @zestia/ember-dragula
```

## Usage

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

@zestia/ember-dragula supports the full range of options that dragula accepts, see : [https://github.com/bevacqua/dragula#dragulacontainers-options](https://github.com/bevacqua/dragula#dragulacontainers-options)

To supply options:

``` handlebars
<EmberDragula @options={{hash option=value}} as |d|>
  ...
</EmberDragula>

```

## Events

@zestia/ember-dragula supports the full range of events that dragula emits, see [https://github.com/bevacqua/dragula#drakeon-events](https://github.com/bevacqua/dragula#drakeon-events). These can be accessed by prefixing the event name with on:

```handlebars
<EmberDragula @onDrag={{action "drag"}} @onDrop={{action "drop"}} @onCancel={{action "cancel"}} ... as |d|>
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


```JavaScript
  drop(el, target, source, sibling) {

  }
```

The dragula instance is emitted via an `onInit` event as follows and allows access to all functions and fields on [drake](https://github.com/bevacqua/dragula#api):


```handlebars
<EmberDragula @onInit={{action "init"}} as |d|>
  ...
</EmberDragula>

```


```JavaScript
  init(drake) {

  }
```

## Test helpers

To simulate dragging a HTML Element over another a test helper is provided.

```javascript
 import { simulateDragAndDrop } from '@zestia/ember-dragula/utils/simulate-drag-drop'
```

Then within a test

```javascript

  const draggingElement = find('.foo');
  const droppingElement = find('.bar');

  simulateDragAndDrop(draggingElement, droppingElement);

```

If you need to drag an element, wait for an async event and then drop that element there are separate test helpers provided for this use case:

```javascript
import { simulateDrag, simulateDrop } from '@zestia/ember-dragula/utils/simulate-drag-drop'

  const draggingElement = find('.foo');
  const droppingElement = find('.bar');

  simulateDrag(draggingElement);

  await someAsyncAction

  simulateDrop(draggingElement, droppingElement);

```



## Developing
### Installation

* `git clone https://github.com/zestia/ember-dragula.git`
* `cd ember-dragula`
* `npm install`

###  Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

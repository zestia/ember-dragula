# @zestia/ember-dragula

[![dependencies Status](https://david-dm.org/zestia/ember-dragula/status.svg)](https://david-dm.org/zestia/ember-dragula)
[![devDependencies Status](https://david-dm.org/zestia/ember-dragula/dev-status.svg)](https://david-dm.org/zestia/ember-dragula?type=dev)
[![Build Status](https://travis-ci.org/zestia/ember-dragula.svg?branch=master)](https://travis-ci.org/zestia/ember-dragula)



This Ember addon provides support for drag and drop using [dragula](https://bevacqua.github.io/dragula/)

[Demo](https://zestia.github.io/ember-dragula)

## Installation

```
ember install @zestia/ember-dragula
```

## Usage

```handlebars
{{#ember-dragula as |d|}}
  {{#d.container}}
    {{#each list as |item|}}
      {{item}}
    {{/each}}
  {{/d.container}}

  {{#d.container}}
    {{#each listTwo as |item|}}
      {{item}}
    {{/each}}
  {{/d.container}}
{{/ember-dragula}}

```

## Options

@zestia/ember-dragula supports the full range of options that dragula accepts, see : [https://github.com/bevacqua/dragula#dragulacontainers-options](https://github.com/bevacqua/dragula#dragulacontainers-options)

To supply options:

``` handlebars
{{#ember-dragula options = (hash option=value) as |d|}}


{{/ember-dragula }}

```

## Events

@zestia/ember-dragula supports the full range of events that dragula emits, see [https://github.com/bevacqua/dragula#drakeon-events](https://github.com/bevacqua/dragula#drakeon-events). These can be accessed by prefixing the event name with on:

```handlebars
{{#ember-dragula onDrag=(action 'drag') onDrop=(action 'drop') onCancel=(action 'cancel') ..... as |d|}}
  {{#d.container}}
    {{#each list as |item|}}
      {{item}}
    {{/each}}
  {{/d.container}}

  {{#d.container}}
    {{#each listTwo as |item|}}
      {{item}}
    {{/each}}
  {{/d.container}}
{{/ember-dragula}}

```


```JavaScript
  drop(el, target, source, sibling) {

  }
```

The dragula instance is emitted via an `onInit` event as follows and allows access to all functions and fields on [drake](https://github.com/bevacqua/dragula#api):


```handlebars
{{#ember-dragula onInit=(action 'init') as |d|}}
  ...
{{/ember-dragula}}

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

  const draggingElement = this.$('foo');
  const droppingElement = this.$('bar');

  simulateDragAndDrop(draggingElement, droppingElement);

```

If you need to drag an element, wait for an async event and then drop that element there are separate test helpers provided for this use case:

```javascript
import { simulateDrag, simulateDrop } from '@zestia/ember-dragula/utils/simulate-drag-drop'

  const draggingElement = this.$('foo');
  const droppingElement = this.$('bar');

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

# @zestia/ember-dragula

This Ember addon provides support for drag and drop sortable lists using [dragula](https://bevacqua.github.io/dragula/)

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

ember-dragula supports the full range of options that dragula accepts, see : [https://github.com/bevacqua/dragula#dragulacontainers-options](https://github.com/bevacqua/dragula#dragulacontainers-options)

To supply options:

``` handlebars
{{#ember-dragula options = (hash option=value) as |d|}}


{{/ember-dragula }}

```

## Events

ember-dragula supports the full range of events that dragula provides, see [https://github.com/bevacqua/dragula#drakeon-events](https://github.com/bevacqua/dragula#drakeon-events). These can be accessed by prefixing the event name with on-:

```handlebars
{{#ember-dragula on-drag=(action 'drag') on-drop=(action 'drop') on-cancel=(action 'cancel') ..... as |d|}}
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


## Test helpers

To simulate dragging a HTML Element over another a test helper is provided.

```javascript
 import { simulateDragAndDrop } from 'ember-dragula/utils/simulate-drag-drop'
```

Then within a test 

```javascript

  const draggingElement = this.$('foo');
  const droppingElement = this.$('bar');

  simulateDragAndDrop(draggingElement, droppingElement);

```



## Installation

* `git clone https://github.com/zestia/ember-dragula.git`
* `cd ember-dragula`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

# dragulember-sortable

This Ember addon provides support for drag and drop sortable lists using [dragula](https://bevacqua.github.io/dragula/)

## Usage

```handlebars
{{#dragulember-sortable dragStartAction='onDragStart' dropEndAction='onDrop' as |drake|}}
  {{#dragulember-sortable-container drake=drake }}
    {{#each list as |item|}}
        <div>{{item.name}}</div>
    {{/each}}
  {{/dragulember-sortable-container}}

  {{#dragulember-sortable-container drake=drake}}
    {{#each listTwo as |item|}}
        <div>{{item.name}}</div>
    {{/each}}
  {{/dragulember-sortable-container}}
{{/dragulember-sortable}}

```

## Events

Event Name            | Dragula Equivalent  | Arguments                  | Event Description
----------------------|---------------------|----------------------------|----------------------------------------------------------------------
`dragStartAction`     | `drag`              | `el`, `source`             | The element `el` was lifted from `source`
`dropEndAction`       | `drop`              | `el`, `source`, `target`   | The element `el` was lifted from `source` and dropped onto `target`


## Installation

* `git clone https://github.com/zestia/ember-dragula.git`
* `cd dragulember-sortable`
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

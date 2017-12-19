# dragulember-sortable

This README outlines the details of collaborating on this Ember addon.

This Ember addon provides support for drag and drop sortable lists using [dragula](https://bevacqua.github.io/dragula/)

Inspired by: [NG2 Dragula](https://github.com/valor-software/ng2-dragula)

## Usage

```handlebars
{{#dragulember-sortable}}
  {{#dragulember-sortable-container }}
    {{#each list as |item|}}
        <div>{{item.name}}</div>
    {{/each}}
  {{/dragulember-sortable-container}}

  {{#dragulember-sortable-container}}
    {{#each listTwo as |item|}}
        <div>{{item.name}}</div>
    {{/each}}
  {{/dragulember-sortable-container}}
{{/dragulember-sortable}}

```

## Installation

* `git clone <repository-url>` this repository
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

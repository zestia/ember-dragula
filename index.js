'use strict';

module.exports = {
  name: '@zestia/ember-dragula',

  included(app) {
    app.import('node_modules/dragula/dist/dragula.js');
    app.import('node_modules/dragula/dist/dragula.css');
  }
};

/* eslint-env node */
'use strict';

module.exports = {
  name: 'dragulember-sortable',

  included(app) {
    app.import('node_modules/dragula/dist/dragula.js');
    app.import('node_modules/dragula/dist/dragula.css');

  }
};

'use strict';

module.exports = {
  name: '@zestia/ember-dragula',

  options: {
    autoImport: {
      alias: {
        dragula: 'dragula/dist/dragula.js'
      }
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);
  }
};

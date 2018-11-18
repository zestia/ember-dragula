'use strict';

module.exports = {
  name: require('./package').name, // eslint-disable-line global-require

  included(app) {
    app.import('node_modules/dragula/dist/dragula.js');
    app.import('node_modules/dragula/dist/dragula.css');
  }
};

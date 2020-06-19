'use strict';

module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    this.addPackagesToProject([{ name: 'dragula' }]);
  }
};

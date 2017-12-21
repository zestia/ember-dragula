/* eslint-env node */
module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    this.addPackagesToProject([
      {name: 'dragula'}
    ])
  }

};

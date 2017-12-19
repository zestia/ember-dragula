import Component from '@ember/component';

export default Component.extend({

  didInsertElement: function() {
    this._super(...arguments);

    const drake = this.get('drake');

    drake.containers.push(this.element);
  },

  willDestroyElement() {
    const drake = this.get('drake');

    const index = drake.containers.indexOf(this.element);
    drake.containers.splice(index, 1);
  }
});

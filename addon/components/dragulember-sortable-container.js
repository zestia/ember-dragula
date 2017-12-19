import Component from '@ember/component';

export default Component.extend({

  didInsertElement: function() {
    this._super(...arguments);

    const drake = this.get('parentView.drake');

    drake.containers.push(this.element);
  },

  willDestroyElement() {
    const drake = this.get('parentView.drake');

    drake.containers.removeObject(this.element);
  }
});

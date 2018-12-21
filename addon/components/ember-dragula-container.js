import Component from '@ember/component';
import layout from '@zestia/ember-dragula/templates/components/ember-dragula-container';

export default Component.extend({
  layout,

  classNames: ['ember-dragula-container'],

  didInsertElement() {
    this._super(...arguments);
    this.onInsert(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.onDestroy(this);
  }
});

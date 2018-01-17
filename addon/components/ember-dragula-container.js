import Component from '@ember/component';
import layout from 'ember-dragula/templates/components/ember-dragula-container';

export default Component.extend({
  layout,
  classNames: ['ember-dragula-container'],

  didInsertElement() {
    this._super(...arguments);
    this.get('on-insert')(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('on-destroy')(this);
  }
});

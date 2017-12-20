import Component from '@ember/component';
import layout from 'dragulember-sortable/templates/components/dragulember-sortable-container';


export default Component.extend({
  layout,
  classNames: ['dragulember-sortable-container'],

  didInsertElement() {
    this._super(...arguments);
    this.get('on-insert')(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('on-destroy')(this);
  }
});

import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({

  items: null,
  dragService: Ember.inject.service('drag-service'),

  didRender: function() {
    this._super(...arguments);

    const dragService = this.get('dragService');
    dragService.addItem(this.get('items'), this.element);
  },

  willDestroyElement() {
    const dragService = this.get('dragService');
    dragService.removeItem(this.get('items'), this.element);
  }
});

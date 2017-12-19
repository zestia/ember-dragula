import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.set('drake', window.dragula());
    this.setupHandlers();
  },


  setupHandlers() {
    const drake = this.get('drake');

    drake.on('drag', (el, source) => {
      this.sendAction('dragAction', el, source);
    });

    drake.on('drop', (dropElm, target, source) =>{
      this.sendAction('dropEndAction', dropElm, source, target);
    });
  },

  willDestroyElement() {
    const drake = this.get('drake');
    drake.destroy();
  }
});

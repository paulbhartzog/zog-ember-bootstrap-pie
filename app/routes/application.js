import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    this.get('store').createRecord('obsession', {
      title: "Title 1",
      body: "With supporting body below as a natural lead-in to additional content.",
      footer: "footer"
    });
    this.get('store').createRecord('obsession', {
      title: "Title 2",
      body: "With supporting body below as a natural lead-in to additional content.",
      footer: "footer"
    });

  }
});
